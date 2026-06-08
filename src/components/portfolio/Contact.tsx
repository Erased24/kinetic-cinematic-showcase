import { useState } from "react";
import { toast } from "sonner";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Enter a valid email address.");
      return;
    }
    toast.success("Message sent. I'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--ember)]">
            04 — Contact
          </span>
          <h2 className="mt-6 font-display text-6xl leading-[0.9] md:text-8xl">
            Let's make <br />
            <span className="text-gradient-ember italic">something</span> <br />
            move.
          </h2>

          <div className="mt-12 space-y-2">
            <a
              href="mailto:chetanjagtap2004ui@gmail.com"
              className="block font-serif text-2xl italic text-foreground hover:text-[var(--cream)] md:text-3xl"
            >
              chetanjagtap2004ui@gmail.com
            </a>
            <p className="text-sm text-muted-foreground">Mumbai · Available worldwide</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-widest transition-all hover:border-[var(--ember)] hover:text-[var(--ember)]"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-8 md:col-span-7">
          {[
            { key: "name", label: "Your name", type: "text", max: 100 },
            { key: "email", label: "Email", type: "email", max: 255 },
          ].map((f) => (
            <div key={f.key} className="border-b border-border pb-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                {f.label}
              </label>
              <input
                type={f.type}
                maxLength={f.max}
                value={(form as Record<string, string>)[f.key]}
                onChange={(e) =>
                  setForm({ ...form, [f.key]: e.target.value })
                }
                className="mt-2 w-full bg-transparent text-2xl text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-[var(--ember)]"
                placeholder="—"
              />
            </div>
          ))}

          <div className="border-b border-border pb-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Tell me about the project
            </label>
            <textarea
              rows={4}
              maxLength={1500}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full resize-none bg-transparent text-2xl text-foreground outline-none placeholder:text-muted-foreground/40"
              placeholder="—"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-4 rounded-full bg-[var(--ember)] px-10 py-5 text-sm font-medium uppercase tracking-widest text-[var(--primary-foreground)] transition-all hover:glow-ember"
          >
            Send Message
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
