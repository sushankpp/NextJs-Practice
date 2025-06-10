import { useState } from "react";
import { Section, SectionTitle, Button } from "../styles/ContainerStyle";
import {
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
} from "../styles/ContactFormStyle";

interface FormField {
  id: "name" | "email" | "subject" | "message";
  label: string;
  placeholder: string;
  type: string;
}

interface FormProps {
  title?: string;
  buttonText?: string;
  fields?: FormField[];
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Form({
  title = "Get In Touch",
  buttonText = "Send Message",
  fields = [
    { id: "name", label: "Name", placeholder: "Enter your name", type: "text" },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      id: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      type: "text",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Enter your message",
      type: "textarea",
    },
  ],
}: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = {
    name: (value: string): string => {
      if (!value.trim()) return "Name is required";
      if (value.length < 2) return "Name must be at least 2 characters";
      return "";
    },
    email: (value: string): string => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return "";
    },
    subject: (value: string): string => {
      if (!value.trim()) return "Subject is required";
      if (value.length < 3) return "Subject must be at least 3 characters";
      return "";
    },
    message: (value: string): string => {
      if (!value.trim()) return "Message is required";
      if (value.length < 10) return "Message must be at least 10 characters";
      return "";
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldId = id as keyof FormData;

    setFormData((prev) => ({ ...prev, [fieldId]: value }));

    if (formSubmitted || errors[fieldId]) {
      setErrors((prev) => ({
        ...prev,
        [fieldId]: validate[fieldId](value),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    const newErrors = {
      name: validate.name(formData.name),
      email: validate.email(formData.email),
      subject: validate.subject(formData.subject),
      message: validate.message(formData.message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      setIsSubmitting(true);

      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormSubmitted(false);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const getFieldValue = (id: keyof FormData): string => formData[id] || "";

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormGroup key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            {field.type === "textarea" ? (
              <>
                <TextArea
                  id={field.id}
                  value={getFieldValue(field.id)}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  $hasError={!!errors[field.id]}
                />
                {errors[field.id] && (
                  <ErrorMessage>{errors[field.id]}</ErrorMessage>
                )}
              </>
            ) : (
              <>
                <Input
                  type={field.type}
                  id={field.id}
                  value={getFieldValue(field.id)}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  $hasError={!!errors[field.id]}
                />
                {errors[field.id] && (
                  <ErrorMessage>{errors[field.id]}</ErrorMessage>
                )}
              </>
            )}
          </FormGroup>
        ))}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : buttonText}
        </Button>
      </ContactForm>
    </Section>
  );
}
