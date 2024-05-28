export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  //TO-DO
  return Response.json({ isDone: "yes" });
}
