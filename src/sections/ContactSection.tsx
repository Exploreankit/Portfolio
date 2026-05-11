"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Send, CheckCircle, AlertCircle, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface FormData  { name: string; email: string; message: string }
interface FormErrors { name?: string; email?: string; message?: string }
type FormStatus = "idle" | "loading" | "success" | "error";

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#F9FAFB",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [status, setStatus]     = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.message.trim()) e.message = "Message is required";
    else if (formData.message.trim().length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const contactInfo = [
    { icon: Mail,        label: "Email",         value: "ankitsingh7167@gmail.com",              href: "mailto:ankitsingh7167@gmail.com" },
    { icon: GithubIcon,  label: "GitHub",        value: "github.com/Exploreankit",                href: "https://github.com/Exploreankit" },
    { icon: LinkedinIcon,label: "LinkedIn",      value: "linkedin.com/in/ankit-singh-34939121b",  href: "https://www.linkedin.com/in/ankit-singh-34939121b/" },
    { icon: XIcon,       label: "X (Twitter)",   value: "x.com/being_ankit7167",                  href: "https://x.com/being_ankit7167" },
    { icon: MapPin,      label: "Location",      value: "Greater Noida, India",                   href: null },
    { icon: Clock,       label: "Response Time", value: "Within 24 hours",                        href: null },
  ];

  return (
    <section id="contact" style={{ padding: "96px 0", position: "relative" }}>
      {/* Background glow */}
      <div style={{ position: "absolute", right: "-10%", bottom: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <SectionHeader
          eyebrow="Contact"
          title="Let's work"
          titleHighlight="together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          align="center"
        />

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "32px", alignItems: "start" }}>

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Info card */}
            <div style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "17px", color: "#F9FAFB", margin: "0 0 8px 0" }}>Get in touch</h3>
              <p style={{ fontSize: "13.5px", color: "rgba(249,250,251,0.55)", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                I&apos;m currently open to full-time opportunities, freelance projects, and interesting collaborations.
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: "#7C3AED" } as React.CSSProperties} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "rgba(249,250,251,0.35)", marginBottom: "1px" }}>{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{ fontSize: "13px", color: "rgba(249,250,251,0.8)", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,250,251,0.8)")}
                        >{value}</a>
                      ) : (
                        <span style={{ fontSize: "13px", color: "rgba(249,250,251,0.8)" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Button variant="secondary" size="md" href="/resume.pdf" external icon={<Download className="w-4 h-4" />} className="justify-center">
                Download Resume
              </Button>
              <Button variant="outline" size="md" href="https://www.linkedin.com/in/ankit-singh-34939121b/" external icon={<LinkedinIcon className="w-4 h-4" />} className="justify-center">
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", borderRadius: "16px", padding: "48px 24px", border: "1px solid rgba(16,185,129,0.2)", textAlign: "center" }}
                >
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                    <CheckCircle style={{ width: "32px", height: "32px", color: "#34D399" }} />
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#F9FAFB", margin: "0 0 8px 0" }}>Message sent!</h3>
                  <p style={{ fontSize: "14px", color: "rgba(249,250,251,0.55)", margin: "0 0 24px 0" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>Send another message</Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: "18px" }}
                >
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "rgba(249,250,251,0.7)", marginBottom: "6px" }}>
                      Name <span style={{ color: "#7C3AED" }}>*</span>
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                      style={{ ...inputBase, borderColor: errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.name && <p style={{ marginTop: "5px", fontSize: "12px", color: "#F87171", display: "flex", alignItems: "center", gap: "4px" }}><AlertCircle style={{ width: "12px", height: "12px" }} />{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "rgba(249,250,251,0.7)", marginBottom: "6px" }}>
                      Email <span style={{ color: "#7C3AED" }}>*</span>
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com"
                      style={{ ...inputBase, borderColor: errors.email ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.email && <p style={{ marginTop: "5px", fontSize: "12px", color: "#F87171", display: "flex", alignItems: "center", gap: "4px" }}><AlertCircle style={{ width: "12px", height: "12px" }} />{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "rgba(249,250,251,0.7)", marginBottom: "6px" }}>
                      Message <span style={{ color: "#7C3AED" }}>*</span>
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." rows={5}
                      style={{ ...inputBase, resize: "none", borderColor: errors.message ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.message && <p style={{ marginTop: "5px", fontSize: "12px", color: "#F87171", display: "flex", alignItems: "center", gap: "4px" }}><AlertCircle style={{ width: "12px", height: "12px" }} />{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" loading={status === "loading"} icon={<Send className="w-4 h-4" />} iconPosition="right" className="w-full justify-center">
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
