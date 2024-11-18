
export async function GET() {
  

  return Response.json({data: [
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
  ], headers: 'Access-Control-Allow-Origin: *'})
}