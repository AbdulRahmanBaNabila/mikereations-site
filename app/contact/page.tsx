"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <Link href="/" className="text-white/60 hover:text-white">
            Home
          </Link>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="What do you need built?"
            rows={6}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none"
            required
          />

          <button
            disabled={status === "sending"}
            className="w-full rounded-full bg-white text-black px-6 py-3 font-medium disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && <p className="text-sm text-white/60">Sent.</p>}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Failed. Check SMTP/App Password.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
