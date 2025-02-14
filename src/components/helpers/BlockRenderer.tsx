import type { ObservableEither } from '@/src/libs/mobx/ObservableEither'
import { observer } from 'mobx-react-lite'
import Loader, { type ILoaderProps } from './Loader'

export interface IBlockRendererProps<TLeft, TRight> {
  isLoading?: boolean
  isError?: boolean
  error?: React.ReactNode
  content?: React.ReactNode
  observableEither?: ObservableEither<TLeft, TRight>
  onLeft?: (left: TLeft) => React.ReactNode
  onRight?: (right: TRight) => React.ReactNode
  loaderProps?: ILoaderProps
}

/**
 * Renderer of a "block", which can be anything on the UI conditioned
 * by a loading/error state and data to displayed.
 * Consider your whole UI as a tons of nested BlockRender.
 */
function BlockRenderer<TLeft, TRight>(
  props: IBlockRendererProps<TLeft, TRight>
) {
  function renderObservableEither() {
    if (!props.observableEither) {
      return null
    }

    const [left, right, position] = props.observableEither.unwrapedEither

    if (position === 'left' && left && props.onLeft) {
      return props.onLeft(left)
    }

    if (position === 'right' && right && props.onRight) {
      return props.onRight(right)
    }
  }

  function render() {
    if (props.isError) {
      return props.error ?? null
    }

    if (props.content) {
      return props.content
    }

    return renderObservableEither()
  }

  return (
    <Loader {...props.loaderProps} isLoading={props.isLoading ?? false}>
      {render()}
    </Loader>
  )
}

export default observer(BlockRenderer)
