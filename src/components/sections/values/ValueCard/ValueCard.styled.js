import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Card = styled.div`
   padding: 13px 12px 12px;
   background-color: ${colors.CARD_BACKGROUND};

   @media screen and (min-width: 768px) {
      padding-top: 12px;
   }

   @media screen and (min-width: 1280px) {
      padding: 48px 24px;
   }
`;

export const CardTitle = styled.h3`
   display: flex;
   align-items: center;
   gap: 8px;
   margin-bottom: 33px;

   font-family: "Oswald", sans-serif;
   font-weight: 400;
   text-transform: uppercase;
   line-height: 1.5;

   @media screen and (min-width: 768px) {
      margin-bottom: 51px;
      font-size: 18px;
   }

   @media screen and (min-width: 1280px) {
      margin-bottom: 94px;
      font-size: 32px;
   }
`;

export const CardDescription = styled.p`
   padding-top: 12px;
   text-align: justify;

   font-size: 14px;
   border-top: 1px solid ${colors.ACCENT};
   @media screen and (min-width: 768px) {
      line-height: 1.2;
   }
   @media screen and (min-width: 1280px) {
      padding-top: 24px;
      font-size: 16px;
   }
`;
