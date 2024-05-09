
export async function POST(request: Request) {
  const data = { name: 'lemon tree' }
  return Response.json(data)
}
