import React from "react";
import FooterTop from "../shared/Footer/Footer";
import ContactUsTitle from "./ContactUsTitle";
import OurContactAddress from "./OurContactAddress";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <main>
      <ContactUsTitle />
      <OurContactAddress />
      <FooterTop />
    </main>
  );
};
export default ContactUs;
