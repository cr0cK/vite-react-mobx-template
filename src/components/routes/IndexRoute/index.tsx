import { Button } from '@/components/ui/button'

export default function IndexRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button variant="destructive" onPress={() => console.log('click!')}>
        Click me
      </Button>
    </div>
  )
}
