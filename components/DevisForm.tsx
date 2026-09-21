"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { brand } from "@/lib/siteCopy";

function mailTo(form: { name: string; email: string; phone: string; subject: string; message: string }) {
  const body = `Nom: ${form.name}\nEmail: ${form.email}\nTél: ${form.phone}\n\n${form.message}`;
  window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Devis " + form.subject)}&body=${encodeURIComponent(body)}`;
}

export default function DevisForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Fuite / dépannage urgence",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
      mailTo(form);
      setStatus("success");
      return;
    }
    try {
      const res = await api.contact(form);
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "Fuite / dépannage urgence", message: "" });
      } else setStatus("error");
    } catch {
      mailTo(form);
      setStatus("success");
    }
  };

  return (
    <>
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
          Votre demande s&apos;ouvre vers {brand.email}. Sinon appelez le {brand.phone}.
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          Erreur lors de l&apos;envoi. Réessayez ou appelez le {brand.phone}.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-card border border-primary/10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
            placeholder="Prénom Nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
            placeholder="votre@email.fr"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type d&apos;intervention</label>
          <select
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
          >
            <option>Fuite / dépannage urgence</option>
            <option>Chauffe-eau</option>
            <option>Chaudière / chauffage</option>
            <option>Pose clim / entretien clim</option>
            <option>Plomberie / sanitaires</option>
            <option>Salle de bain</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-secondary/40 outline-none"
            placeholder="Décrivez votre besoin, adresse, urgence…"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-primary text-white py-3 font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
    </>
  );
}
