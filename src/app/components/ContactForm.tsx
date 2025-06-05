import { Section, SectionTitle, Button } from "../styles/ContainerStyle";
import {
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
} from "../styles/ContactFormStyle";

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
}) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ContactForm>
        {fields.map((field) => (
          <FormGroup key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            {field.type === "textarea" ? (
              <TextArea
                id={field.id}
                placeholder={field.placeholder}
              ></TextArea>
            ) : (
              <Input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
              />
            )}
          </FormGroup>
        ))}

        <Button type="submit">
          {buttonText}
        </Button>
        
      </ContactForm>
    </Section>
  );
}
