"use client";
import styles from "./styles.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactMeForm() {
  const { push } = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/v1/createForm", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.status === 200) {
      push("/sent");
    } else {
      console.error(data.error);
      setError("Somthing went wrong!");
    }
    setIsLoading(true);
  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <label className={styles.labelText} htmlFor="name">
        Name
        <input
          className={styles.inputField}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
      </label>
      <label className={styles.labelText} htmlFor="email">
        Email
        <input
          className={styles.inputField}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </label>
      <label className={styles.labelText} htmlFor="message">
        Message
        <textarea
          className={styles.messageField}
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        />
      </label>
      <button
        className={styles.submitButton}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending" : "Submit"}
      </button>
      <div className={styles.error}>{error}</div>
    </form>
  );
}
