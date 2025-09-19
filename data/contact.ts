import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ruent.dev@gmail.com",
    href: "mailto:ruent.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 952 480 4218",
    href: "tel:+639524804218",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines",
    href: "#",
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/RuentDev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ruent-dev",
    label: "LinkedIn",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:ruent.dev@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+639171234567", label: "Phone" },
];

export const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
