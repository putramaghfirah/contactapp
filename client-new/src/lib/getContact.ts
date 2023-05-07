export default async function getContact(contactId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/contact/${contactId}`,
  )

  if (!res.ok) return undefined

  return res.json()
}
