import {
   ContactType,
   ContactLink,
   ContactsList,
   ContactItem,
   SocialMediaContainer,
   SocialMediaLink,
} from "./ContactUsList.styled";

import { Phone } from "../../../../assets/svg-components/contacts/Phone";
import { Mail } from "../../../../assets/svg-components/contacts/Mail";
import { Address } from "../../../../assets/svg-components/contacts/Address";
import { Facebook } from "../../../../assets/svg-components/contacts/Facebook";
import { Instagram } from "../../../../assets/svg-components/contacts/Instagram";

export const ContactUsList = () => {
   return (
      <ContactsList>
         <ContactItem>
            <ContactType>Phone:</ContactType>
            <ContactLink href="tel:38 (098) 12 34 567">
               <Phone /> 38 (098) 12 34 567
            </ContactLink>
            <ContactLink href="tel:38 (093) 12 34 567">
               <Phone /> 38 (093) 12 34 567
            </ContactLink>
         </ContactItem>
         <ContactItem>
            <ContactType>E-mail:</ContactType>
            <ContactLink href="mailto: office@ecosolution.com">
               <Mail />
               office@ecosolution.com
            </ContactLink>
         </ContactItem>
         <ContactItem>
            <ContactType>Address:</ContactType>
            <ContactLink href="#">
               <Address />
               79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ContactLink>
         </ContactItem>
         <ContactItem>
            <ContactType>Social Networks:</ContactType>
            <SocialMediaContainer>
               <SocialMediaLink href="">
                  <Facebook />
               </SocialMediaLink>
               <SocialMediaLink href="">
                  <Instagram />
               </SocialMediaLink>
            </SocialMediaContainer>
         </ContactItem>
      </ContactsList>
   );
};
