import nodemailer from "nodemailer";

export async function sendMail(name: string, email: string, message: string) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    await transport.verify();
  } catch (error) {
    console.error({ error });
    throw new Error(`Couldn't verify the transport: ${error}`);
  }

  try {
    const sendResult = await transport.sendMail({
      from: "me@mail.com",
      to: SMTP_EMAIL,
      subject: "Personal Site: Someone left a Message",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    });
    return sendResult;
  } catch (error) {
    console.log(error);
    throw new Error(`Couldn't send the message: ${error}`);
  }
}
