export interface ILoaderProps extends React.PropsWithChildren {
  isLoading: boolean
  spinner?: React.ReactNode
}

/**
 * Display a spinner or the children according props.
 */
export default function Loader(props: ILoaderProps) {
  if (props.isLoading) {
    return props.spinner ?? <div>Loading...</div>
  }

  return props.children
}
