import { buildVariants } from '@/init/styles/buildVariants'
import styled from '@emotion/styled'

export interface ContainerFlexProps extends FlexProps {
  name: string
  className?: string
  style?: React.CSSProperties
  innerProps?: React.HTMLAttributes<HTMLDivElement>
}

interface FlexProps {
  /** Direction of the flex items: row or column */
  direction?: 'row' | 'column'
  /** How to justify the content horizontally */
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** How to align items vertically */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  /** Whether flex items should wrap or not */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** How to align wrapped rows/columns */
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
  /** Flex grow value for children */
  grow?: number
  /** Optional gap between items */
  gap?: number | string
  /** Enables debug mode, adding an outline to children */
  debug?: boolean
  /** Child elements */
  children?: React.ReactNode
}

/**
 * Container exposing Flex properties.
 */
const Div = styled.div<FlexProps>(props => {
  return buildVariants(props)
    .css({
      display: 'flex',
      flexDirection: props.direction ? props.direction : undefined,
      justifyContent: props.justifyContent ? props.justifyContent : undefined,
      alignItems: props.alignItems ? props.alignItems : undefined,
      flexWrap: props.wrap ? props.wrap : undefined,
      alignContent: props.alignContent ? props.alignContent : undefined,
      flexGrow: props.grow ? props.grow : undefined,
      gap: props.gap ? props.gap : undefined
    })
    .if(props.debug ?? false, {
      '> *': {
        outline: '1px dotted red'
      }
    })
    .end()
})

/**
 * Container wrapping main flex properties.
 */
export function ContainerFlex(props: ContainerFlexProps) {
  return (
    <Div
      data-attr-name={props.name}
      className={props.className}
      style={props.style}
      direction={props.direction}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      wrap={props.wrap}
      alignContent={props.alignContent}
      grow={props.grow}
      gap={props.gap}
      debug={props.debug}
      {...props.innerProps}
    >
      {props.children}
    </Div>
  )
}
