import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const FooterContainer = styled.footer`
   padding-bottom: 24px;
   font-size: 16px;
`;

export const FooterWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
`;

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 12px;

   border: none;
   border-radius: 50%;

   background-color: ${colors.MENU_PRIMARY};
`;

export const Address = styled.address`
   margin-left: auto;
   margin-right: auto;
   margin-top: 24px;
   text-align: center;
   font-style: normal;
`;

export const Email = styled.a`
   display: block;

   margin-left: auto;
   margin-right: auto;
   margin-top: 16px;

   text-decoration: none;

   }
`;

export const Copyright = styled.p`
   margin-left: auto;
   margin-right: auto;
   margin-top: 16px;
   @media screen and (min-width: 768px) {
      display: block;
      margin-left: auto;
   }
`;

export const SocialMediaContainer = styled.div`
   display: flex;
   margin-top: 24px;
`;

export const SocialMediaLink = styled.a`
   padding: 1px;
`;
