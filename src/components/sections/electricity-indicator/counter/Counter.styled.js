import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Produced = styled.p`
   position: relative;
   display: flex;
   justify-content: space-between;
   width: 320px;
   padding-top: 72px;

   font-family: "Oswald", sans-serif;
   align-items: center;
   font-size: 48px;
   font-weight: 700;
   line-height: 1;
   color: ${colors.ACCENT};
   &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      width: 1px;
      height: 48px;
      border-left: 1px solid ${colors.ACCENT};
   }
   @media screen and (min-width: 768px) {
      width: 100%;
      padding-left: 35px;
      padding-right: 35px;
      padding-top: 111px;
      font-size: 100px;
      &::before {
         height: 87px;
      }
   }
   @media screen and (min-width: 1280px) {
      padding-top: 104px;
      padding-left: 110px;
      padding-right: 110px;
      font-size: 164px;
   }
`;

export const Units = styled.span`
   font-family: "Oswald", sans-serif;
   font-weight: 400;
   font-size: 24px;
   color: ${colors.ACCENT_DARK};
   @media screen and (min-width: 768px) {
      font-size: 28px;
   }
   @media screen and (min-width: 1280px) {
      font-size: 48px;
   }
`;
