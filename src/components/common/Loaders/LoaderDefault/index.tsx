export interface ILoaderDefaultProps extends React.PropsWithChildren {
  isLoading: boolean
  spinner?: React.ReactNode
}

/**
 * Display a spinner or the children according props.
 */
export function LoaderDefault(props: ILoaderDefaultProps) {
  if (props.isLoading) {
    return props.spinner ?? <div>Loading...</div>
  }

  return props.children
}
