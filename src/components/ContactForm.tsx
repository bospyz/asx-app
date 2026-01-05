"use client";

import React, { useMemo, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initial: FormState = { name: "", company: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "error"; text: string }>(null);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.company.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
      form.message.trim().length >= 10
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as any;

      if (!res.ok) {
        const msg = typeof data?.error === "string" ? data.error : "Submission failed";
        setStatus({ type: "error", text: msg });
        return;
      }

      setStatus({ type: "ok", text: "Request received. We will reach out shortly." });
      setForm(initial);
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="border border-[#CCFD03]/25 bg-black p-6 sm:p-7"
    >
      <div className="text-[11px] uppercase tracking-widest text-[#CCFD03] font-bold">SECURE_CHANNEL</div>
      <div className="mt-2 text-white/50 text-sm">Send a scoped pilot request. We respond within 1–2 business days.</div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          placeholder="Your name"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          autoComplete="name"
        />
        <Field
          label="Company"
          placeholder="Company / Department"
          value={form.company}
          onChange={(v) => setForm((s) => ({ ...s, company: v }))}
          autoComplete="organization"
        />
        <Field
          className="sm:col-span-2"
          label="Email"
          placeholder="name@company.com"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          autoComplete="email"
          inputMode="email"
        />
        <TextArea
          className="sm:col-span-2"
          label="Message"
          placeholder="Describe your environment (bank / telecom / gov), call volumes, and desired deployment (on-prem / private cloud)."
          value={form.message}
          onChange={(v) => setForm((s) => ({ ...s, message: v }))}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit || loading}
          className="bg-white text-black px-6 py-4 font-bold uppercase text-xs sm:text-sm hover:bg-[#CCFD03] transition-all text-left border-b-4 border-r-4 border-gray-400 active:border-0 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send_Request"}
        </button>

        <div className="text-[11px] uppercase tracking-widest text-white/50">
          {status ? (
            <span className={status.type === "ok" ? "text-[#CCFD03]" : "text-red-400"}>{status.text}</span>
          ) : (
            <span>
              Required: name, company, email, message
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

function Field(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
}) {
  return (
    <label className={props.className ?? ""}>
      <div className="text-[11px] uppercase tracking-widest text-white/60">{props.label}</div>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        className="mt-2 w-full bg-[#050505] border border-white/10 focus:border-[#CCFD03]/60 outline-none px-4 py-3 text-sm text-white/90 placeholder:text-white/30"
      />
    </label>
  );
}

function TextArea(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label className={props.className ?? ""}>
      <div className="text-[11px] uppercase tracking-widest text-white/60">{props.label}</div>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={5}
        className="mt-2 w-full bg-[#050505] border border-white/10 focus:border-[#CCFD03]/60 outline-none px-4 py-3 text-sm text-white/90 placeholder:text-white/30 resize-y"
      />
    </label>
  );
}
