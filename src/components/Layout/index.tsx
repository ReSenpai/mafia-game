import React, {FC, ReactElement} from 'react'
import cx from 'classnames'
import { Dir, Ai, Jc, Ma } from '../../common/enums'
import './styles.scss'

interface ILayoutProps {
  direction?: Dir
  ai?: Ai
  jc?: Jc
  margin?: Ma
  widthAuto?: boolean
  positionAuto?: boolean
  fullHeight?: boolean
  classes?: string
  nowrap?: boolean
  pointer?: boolean
  children?: any
  onClick?: (...args: any) => any
}

const Layout: FC<ILayoutProps> = ({
  direction = Dir.default,
  ai = Ai.default,
  jc = Jc.default,
  widthAuto = false,
  fullHeight = false,
  classes,
  nowrap = false,
  pointer = false,
  margin,
  children,
  ...props
}: ILayoutProps): ReactElement => {
  const classNames = cx(
    "layout",
    `layout_direction_${direction}`,
    `layout_ai_${ai}`,
    `layout_jc_${jc}`,
    margin && `layout_margin_${margin}`,
    widthAuto && "layout_widthAuto",
    fullHeight && "layout_fullHeight",
    nowrap && "layout_nowrap",
    pointer && "layout_pointer",
    classes
  )
  return (
    <div classNames={classNames} {...props}>
      {children}
    </div>
  )
}


const Row: FC<ILayoutProps> = (props: ILayoutProps): ReactElement => (
  <Layout direction={Dir.row} {...props} />
)

const Col: FC<ILayoutProps> = (props: ILayoutProps): ReactElement => (
  <Layout direction={Dir.column} {...props} />
)

export { Layout, Row, Col }
