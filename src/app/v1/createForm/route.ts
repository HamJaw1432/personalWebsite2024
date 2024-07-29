import { sendMail } from "@/utils/mail";

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get("name")?.toString() || "";
  const email = data.get("email")?.toString() || "";
  const message = data.get("message")?.toString() || "";

  try {
    const result = await sendMail(name, email, message);
    return Response.json({ messageId: result.messageId }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 400 });
  }
}
