import { IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';

type TUserMenuProps = {
    output: () => void
    loginName: string | null
}

const UserMenu: React.FC<TUserMenuProps> = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const output = () => {
        handleClose();
        props.output();
    }

    return(
        <div className={classes.wrapper}>
            { props.loginName
                &&  <Typography variant="h6" className={classes.userName}>{props.loginName}</Typography>}
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Профиль</MenuItem>
                <MenuItem onClick={output}>Выйти</MenuItem>
            </Menu>
        </div>
    )
}

export default UserMenu;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        padding: '0 10px'
    }
}))