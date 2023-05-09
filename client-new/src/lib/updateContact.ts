export default async function updateContact(contact: Contact) {
  const { _id, nama, nohp, email } = contact

  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/contact/update`, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      _id,
      nama,
      nohp,
      email,
    }),
  })

  return res
}
