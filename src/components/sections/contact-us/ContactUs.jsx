import { SectionTitle } from "../../common-components/SectionTitle";

import { ContactUsList } from "./contact-list/ContactUsList";

import { Section, ContactWrapper } from "./ContactUs.styled";

import { ContactForm } from "./contact-form/ContactForm";

export const ContactUs = () => {
   return (
      <Section>
         <SectionTitle
            title="contact us"
            marginLeft="auto"
            width={{ mobile: "131px", desktop: "224px" }}
         />
         <ContactWrapper>
            <ContactUsList />
            <ContactForm />
         </ContactWrapper>
      </Section>
   );
};
