import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const ContactsList = styled.ul`
   list-style: none;
`;

export const ContactItem = styled.li`
   margin-bottom: 24px;
`;

export const ContactType = styled.h3`
   margin-bottom: 8px;
   font-size: 16px;
   font-weight: 400;
`;

export const ContactLink = styled.a`
   display: flex;
   gap: 8px;

   font-size: 20px;
   text-decoration: none;
   @media screen and (min-width: 1280px) {
      font-size: 24px;
   }
`;

export const SocialMediaContainer = styled.div`
   display: flex;
   gap: ;
`;

export const SocialMediaLink = styled.a`
   padding: 12px;
`;
