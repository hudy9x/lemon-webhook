export async function POST(request: Request) {
  const data = { name: 'hello' }
  return Response.json({ data })
}
