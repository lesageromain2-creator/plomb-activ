"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { brand } from "@/lib/siteCopy";

function mailTo(form: { name: string; email: string; phone: string; subject: string; message: string }) {
  const body = `Nom: ${form.name}\nEmail: ${form.email}\nTél: ${form.phone}\n\n${form.message}`;
  window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Contact PLOMB'ACTIV", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backend) {
      mailTo(form);
      setStatus("success");
      return;
    }
    try {
      const res = await api.contact(form);
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", subject: "Contact PLOMB'ACTIV", message: "" });
    } catch {
      mailTo(form);
      setStatus("success");
    }
  };

  return (
    <>
      {status === "success" && (
        <p className="mb-4 text-green-700 font-medium">Votre messagerie s&apos;ouvre vers {brand.email}. Sinon appelez le {brand.phone}.</p>
      )}
      {status === "error" && <p className="mb-4 text-red-700">Erreur d&apos;envoi. Appelez le {brand.phone}.</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" required placeholder="Nom *" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/40" />
        <input type="email" required placeholder="Email *" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/40" />
        <input type="tel" placeholder="Téléphone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/40" />
        <textarea required rows={4} placeholder="Message *" value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/40" />
        <button type="submit" disabled={status === "sending"} className="w-full rounded-xl bg-primary text-white py-3 font-semibold hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>
      </form>
    </>
  );
}
