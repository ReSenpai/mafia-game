import React from 'react';

// === material-ui ===
import { Box, Link } from '@material-ui/core';

const ContactsPage: React.FC = () => {
  return (
    <Box textAlign="center">
      <Box fontSize="h4.fontSize">Contacts</Box>

      <Link href="https://github.com/ReSenpai/mafia-game">GitHub</Link>
    </Box>
  );
};

export default ContactsPage;
