/** Shared contact-form types and client-side validation. */

export type ContactValues = {
  name: string;
  shop: string;
  email: string;
  phone: string;
  message: string;
  // Honeypot — must stay empty for a genuine human submission.
  botcheck: string;
};

export type FieldErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates the human-facing fields. Returns a map of field -> error message. */
export function validateContact(data: Partial<ContactValues>): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!data.email || !EMAIL_RE.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please include a short message (at least 10 characters).";
  }
  if (data.message && data.message.length > 5000) {
    errors.message = "Message is too long.";
  }

  return errors;
}
