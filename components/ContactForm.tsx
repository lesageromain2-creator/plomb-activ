"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { brand } from "@/lib/siteCopy";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Contact", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await api.contact(form);
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", subject: "Contact", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {status === "success" && <p className="mb-4 text-green-700 font-medium">Message envoyé. Nous vous recontactons rapidement.</p>}
      {status === "error" && (
        <p className="mb-4 text-red-700">Erreur d&apos;envoi. Appelez le {brand.phone}.</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Nom *"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
        />
        <input
          type="email"
          required
          placeholder="Email *"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
        />
        <textarea
          required
          rows={4}
          placeholder="Message *"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-primary text-white py-3 font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>
      </form>
    </>
  );
}
