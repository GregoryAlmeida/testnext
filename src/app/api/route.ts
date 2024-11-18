export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Gregory',
      idade: 21,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Thiago',
      idade: 21,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Brunno',
      idade: 20,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Carlos Lucas',
      idade: 22,
    },
  ])
}