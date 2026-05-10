"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Send, CheckCircle, AlertCircle, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Contact section with animated form, validation, and success state
 */
export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ankit@example.com", href: "mailto:ankit@example.com" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/ankitsingh", href: "https://github.com/ankitsingh" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/ankitsingh", href: "https://linkedin.com/in/ankitsingh" },
    { icon: MapPin, label: "Location", value: "India", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 70%)",
            right: "-10%",
            bottom: "-10%",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work"
          titleHighlight="together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-6 border border-white/06">
              <h3 className="font-bold text-foreground text-lg mb-2">Get in touch</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                I&apos;m currently open to freelance projects, full-time opportunities, and interesting collaborations.
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>

              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/40">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-foreground/80 hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-foreground/80">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick actions */}
            <motion.div variants={fadeInLeft} className="flex flex-col gap-3">
              <Button
                variant="secondary"
                size="md"
                href="/resume.pdf"
                external
                icon={<Download className="w-4 h-4" />}
                className="justify-center"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="md"
                href="https://linkedin.com/in/ankitsingh"
                external
                icon={<LinkedinIcon className="w-4 h-4" />}
                className="justify-center"
              >
                Connect on LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-2xl p-10 border border-emerald-500/20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-foreground/60 text-sm mb-6">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-6 border border-white/06 space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl bg-white/03 border text-foreground placeholder-foreground/30 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200
                        ${errors.name ? "border-red-500/50 focus:ring-red-500/30" : "border-white/08 focus:border-primary/40"}`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/03 border text-foreground placeholder-foreground/30 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200
                        ${errors.email ? "border-red-500/50 focus:ring-red-500/30" : "border-white/08 focus:border-primary/40"}`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-white/03 border text-foreground placeholder-foreground/30 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none
                        ${errors.message ? "border-red-500/50 focus:ring-red-500/30" : "border-white/08 focus:border-primary/40"}`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === "loading"}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
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
