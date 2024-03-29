export default async function getAllContacts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/contact`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('failed to fetch user')

  return res.json()
}
