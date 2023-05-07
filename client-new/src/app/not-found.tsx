import Button from '@/components/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center text-gray-900 dark:text-white">
      <p className="text-center text-lg font-medium">
        Not Found 🥲
        <br /> Could not find requested resource
      </p>
      <Button size="medium" href="/" className="mt-3">
        Go To Home Page
      </Button>
    </main>
  )
}
