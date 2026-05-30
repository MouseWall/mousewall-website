"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";
import {
  validateContact,
  type ContactValues,
  type FieldErrors,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

// Public Web3Forms access key. This is meant to be public — it only forwards
// submissions to the inbox configured at https://web3forms.com. Set it in
// .env.local / Vercel as NEXT_PUBLIC_WEB3FORMS_KEY. No private secret exists.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const emptyForm: ContactValues = {
  name: "",
  shop: "",
  email: "",
  phone: "",
  message: "",
  botcheck: "",
};

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactValues>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const set =
    (field: keyof ContactValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  async function submit() {
    setServerError(null);

    const clientErrors = validateContact(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      document.getElementById(`${uid}-${Object.keys(clientErrors)[0]}`)?.focus();
      return;
    }

    if (!WEB3FORMS_KEY) {
      // Form isn't configured yet — point people to the direct email instead.
      setServerError(
        `The form isn't set up yet. Please email us directly at ${site.contact.email}.`,
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Mouse Wall inquiry from ${values.name.trim()}`,
          from_name: "Mouse Wall Website",
          name: values.name,
          shop: values.shop,
          email: values.email,
          phone: values.phone,
          message: values.message,
          botcheck: values.botcheck, // Web3Forms drops the submission if set.
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setValues(emptyForm);
        return;
      }

      setServerError(
        (data && data.message) ||
          `We couldn't send your message. Please email us at ${site.contact.email}.`,
      );
      setStatus("error");
    } catch {
      setServerError(
        `We couldn't reach the form service. Please email us at ${site.contact.email}.`,
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success card" role="status">
        <h2>Thank you — your message is on its way.</h2>
        <p>
          We&apos;ve received your note and will be in touch shortly. For
          anything urgent, call{" "}
          <a href={`tel:${site.contact.phoneHref}`} className="link">
            {site.contact.phone}
          </a>
          .
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      {serverError ? (
        <p className="form-alert" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="form-row">
        <Field
          id={`${uid}-name`}
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={set("name")}
          autoComplete="name"
        />
        <Field
          id={`${uid}-shop`}
          label="Shop name"
          value={values.shop}
          onChange={set("shop")}
          autoComplete="organization"
        />
      </div>

      <div className="form-row">
        <Field
          id={`${uid}-email`}
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
        />
        <Field
          id={`${uid}-phone`}
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
        />
      </div>

      <div className="form-field">
        <label htmlFor={`${uid}-message`} className="form-label">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${uid}-message`}
          className="form-control"
          rows={6}
          value={values.message}
          onChange={set("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
        />
        {errors.message ? (
          <p id={`${uid}-message-error`} className="form-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from humans, tempting to bots. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${uid}-botcheck`}>Leave this field empty</label>
        <input
          id={`${uid}-botcheck`}
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={set("botcheck")}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary contact-form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  type = "text",
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="form-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
