import { action, autorun, computed, observable, observe, toJS } from 'mobx'
import type { Maybe } from '../../helpers/types'
import { ObservableEither } from '../ObservableEither'

class IError {
  constructor(public message?: string) {}
}

interface IUser {
  id: number
  name: string
}

describe('RenderEither', () => {
  it('should set left and right values', () => {
    expect.assertions(4)

    const spy = jest.fn()

    const either = ObservableEither.create(() => [
      // not observable
      new IError(),
      // not observable
      null as Maybe<IUser>
    ]).setDebugLogger(spy)

    // if success, success is defined and error is null

    either.setRight({
      id: 1,
      name: 'Bob'
    })

    expect(either.right).toEqual({
      id: 1,
      name: 'Bob'
    })

    expect(either.left).toEqual(null)

    // if error, error is defined and success is null

    either.setLeft({
      message: 'Something happens'
    })

    expect(either.left).toEqual({
      message: 'Something happens'
    })

    expect(either.right).toBeNull()
  })

  it('should update right value', () => {
    expect.assertions(4)

    const either = ObservableEither.create(() => [
      observable.box<IError>(new IError()),
      observable.box<IUser>()
    ])

    // biome-ignore lint/style/noNonNullAssertion:
    const dispose = observe(either.either.right!, change => {
      expect(change.type).toEqual('update')
      expect(change.newValue).toEqual({
        id: 1,
        name: 'Bob'
      })
    })

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    expect(toJS(either.right)).toEqual({
      id: 1,
      name: 'Bob'
    })

    expect(either.left).toBeNull()

    dispose()
  })

  it('should update left value', () => {
    expect.assertions(4)

    const either = ObservableEither.create(() => [
      observable.box<IError>(),
      observable.box<IUser>()
    ])

    // biome-ignore lint/style/noNonNullAssertion:
    const dispose = observe(either.either.left!, change => {
      expect(change.type).toEqual('update')
      expect(change.newValue).toEqual({
        message: 'Something happens'
      })
    })

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    expect(toJS(either.left)).toEqual({
      message: 'Something happens'
    })

    expect(either.right).toBeNull()

    dispose()
  })

  it('should memo values', () => {
    const spy = jest.fn()

    const either = ObservableEither.create(() => [
      observable.box(new IError()),
      observable.box<IUser>()
    ]).setDebugLogger(spy)

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 2,
        name: 'Alice'
      })
    )

    either.updateLeft(box => box.set(new IError('Boom')))

    autorun(() => {
      // Three right accesses will trigger only one right computation
      either.right
      either.right
      either.right
    })()

    autorun(() => {
      // An another right access in an another observe block will trigger an another right computation
      either.right

      // Will trigger a left computation
      either.left
    })()

    expect(spy.mock.calls).toEqual([
      // 4 first updateRight
      ['updateRight'],
      ['updateRight'],
      ['updateRight'],
      ['updateRight'],
      // next, one updateLeft
      ['updateLeft'],
      // 2 right computation for each observe blocks
      ['computeRight'],
      ['computeRight'],
      // 1 left computation for the latest observe block
      ['computeLeft']
    ])
  })

  it('should toggle position', () => {
    const either = ObservableEither.create(() => [
      observable.box<IError>(),
      observable.box<IUser>()
    ])

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    // right has been updated last, so the current value is right

    const [left1, right1] = either.unwrapedEither

    expect(left1).toBeNull()
    expect(toJS(right1)).toEqual({
      id: 1,
      name: 'Bob'
    })

    // set "left" to get the error (without having update left value)

    either.setPosition('left')

    const [left2, right2] = either.unwrapedEither

    expect(toJS(left2)).toEqual({
      message: 'Something happens'
    })
    expect(toJS(right2)).toBeNull()
  })

  it('should reset values', () => {
    const either = ObservableEither.create(() => [
      observable.box<IError>(),
      observable.box<IUser>()
    ])

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.reset()

    const [left, right] = either.unwrapedEither

    expect(left?.get()).toBeUndefined()
    expect(right?.get()).toBeUndefined()
  })

  describe('Through an another store', () => {
    const spy = jest.fn()

    class StoreTodo {
      public readonly todosEither = ObservableEither.create(() => [
        null,
        observable.array<string>([])
      ]).setDebugLogger(spy)

      addTodo = action((todo: string): void => {
        this.todosEither.updateRight(arr => arr.push(todo))
      })

      private _todoCountComputed = computed(() => {
        return this.todosEither.right?.length ?? 0
      })

      get todoCount(): number {
        return this._todoCountComputed.get()
      }
    }

    class StoreApp {
      storeTodo = new StoreTodo()

      private _countTodos = computed(() => {
        return this.storeTodo.todoCount
      })

      get countTodos() {
        return this._countTodos.get()
      }
    }

    let storeApp: StoreApp

    beforeEach(() => {
      spy.mockClear()
      storeApp = new StoreApp()
    })

    it('should trigger computations', () => {
      storeApp.storeTodo.addTodo('Make a test')
      storeApp.storeTodo.addTodo('Take a break')

      autorun(() => {
        // should trigger one computation
        storeApp.countTodos
        storeApp.countTodos
        storeApp.countTodos
      })

      expect(spy.mock.calls).toEqual([
        ['updateRight'],
        ['updateRight'],
        ['computeRight']
      ])

      expect(storeApp.countTodos).toBe(2)
    })
  })
})
