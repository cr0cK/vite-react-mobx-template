export interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Box(props: IBoxProps) {
  return <div>{props.children}</div>
}
