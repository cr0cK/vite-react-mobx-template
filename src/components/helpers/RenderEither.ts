import type { ObservableEither } from '@/src/libs/mobx/ObservableEither'
import { observer } from 'mobx-react-lite'

export interface IEitherProps<TLeft, TRight> {
  observableEither: ObservableEither<TLeft, TRight>
  onLeft?: (left: TLeft) => React.ReactNode
  onRight?: (right: TRight) => React.ReactNode
}

/**
 * Render left or right values according to the value of the observableEither value passed as props.
 */
function RenderEither<TError, TSuccess>(props: IEitherProps<TError, TSuccess>) {
  const [left, right, position] = props.observableEither.unwrapedEither

  if (position === 'left' && left && props.onLeft) {
    return props.onLeft(left)
  }

  if (position === 'right' && right && props.onRight) {
    return props.onRight(right)
  }

  return null
}

export default observer(RenderEither)
