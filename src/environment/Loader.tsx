export interface ILoaderProps extends React.PropsWithChildren {
  isLoading: boolean
  renderLoading?: React.ReactNode
}

/**
 * Display a loader or the children according to the `isLoading` state.
 */
export default function Loader(props: ILoaderProps) {
  if (props.isLoading) {
    return props.renderLoading ?? <div>Loading...</div>
  }

  return props.children
}
