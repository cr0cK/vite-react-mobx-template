import { Button } from '@/components/ui/button'

export default function IndexRoute() {
  return (
    <div>
      <h1
        sx={{
          color: 'primary',
          fontFamily: 'heading'
        }}
      >
        Hello
      </h1>

      <Button onPress={() => console.log('click!')}>Click me</Button>
    </div>
  )
}
