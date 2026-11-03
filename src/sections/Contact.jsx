import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
const ContactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vipinverma4224@gmail.com",
    href: "mailto:vipinverma4224@gmail.com",
  },

  {
    icon: Phone,
    label: "Phone",
    value : "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow",
    href: "#"
  },
];


const Contact = () => {
  return (
    <section id="contect" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>
      <div></div>
    </section>
  );
}

export default Contact