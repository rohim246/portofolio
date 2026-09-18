import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi2";
import { contactData } from "./contact.data";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = contactData.formFields.name.errorMessages.required;
    if (!data.email.trim()) {
      errs.email = contactData.formFields.email.errorMessages.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = contactData.formFields.email.errorMessages.invalid;
    }
    if (!data.subject.trim()) errs.subject = contactData.formFields.subject.errorMessages.required;
    if (!data.message.trim()) {
      errs.message = contactData.formFields.message.errorMessages.required;
    } else if (data.message.trim().length < 10) {
      errs.message = contactData.formFields.message.errorMessages.minLength;
    }
    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Real-time validation for touched fields
    if (touched.has(name)) {
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => new Set(prev).add(name));
    const newErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormErrors],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched(new Set(["name", "email", "subject", "message"]));

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTouched(new Set());
    setErrors({});

    setTimeout(() => setIsSuccess(false), 4000);
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
      errors[field] && touched.has(field)
        ? "border-red-500/50 focus:ring-red-500/30"
        : "border-white/[0.08] focus:ring-primary-500/30 focus:border-primary-500/50"
    }`;

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-sm font-semibold text-accent-500 tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {contactData.subtitle}
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {contactData.title}
          </motion.h2>
          <motion.p
            className="section-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {contactData.description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Social cards */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactData.socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/[0.06] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <link.icon className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-white font-medium truncate group-hover:text-primary-400 transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 lg:p-8 space-y-8"
              noValidate
            >
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {contactData.formFields.name.label}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder={contactData.formFields.name.placeholder}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    className={inputClasses("name")}
                    autoComplete="name"
                  />
                  <AnimatePresence>
                    {errors.name && touched.has("name") && (
                      <motion.p
                        className="text-xs text-red-400 mt-1.5"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {contactData.formFields.email.label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={contactData.formFields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={inputClasses("email")}
                    autoComplete="email"
                  />
                  <AnimatePresence>
                    {errors.email && touched.has("email") && (
                      <motion.p
                        className="text-xs text-red-400 mt-1.5"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {contactData.formFields.subject.label}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder={contactData.formFields.subject.placeholder}
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => handleBlur("subject")}
                  className={inputClasses("subject")}
                />
                <AnimatePresence>
                  {errors.subject && touched.has("subject") && (
                    <motion.p
                      className="text-xs text-red-400 mt-1.5"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {contactData.formFields.message.label}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={contactData.formFields.message.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClasses("message")} resize-none`}
                />
                <AnimatePresence>
                  {errors.message && touched.has("message") && (
                    <motion.p
                      className="text-xs text-red-400 mt-1.5"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.span
                      key="success"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <HiCheckCircle size={20} />
                      {contactData.submitButton.success}
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="loading"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.span
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      {contactData.submitButton.loading}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <HiPaperAirplane size={18} />
                      {contactData.submitButton.default}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;