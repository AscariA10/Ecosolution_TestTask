import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Card = styled.div`
   width: 320px;

   @media screen and (min-width: 768px) {
      width: 342px;
   }
   @media screen and (min-width: 1280px) {
      width: 596px;
   }
`;

export const Image = styled.img`
   width: 320px;

   @media screen and (min-width: 768px) {
      width: 342px;
   }
   @media screen and (min-width: 1280px) {
      width: 596px;
   }
`;

export const DescriptionContainer = styled.div`
   position: relative;
   width: 320px;
   padding: 24px 12px 12px;

   display: grid;
   grid-template-columns: 176px 60px;
   gap: 34px 61px;
   justify-content: space-between;
   background-color: ${colors.CARD_BACKGROUND};
   &::before {
      content: "";
      position: absolute;
      top: 111px;
      left: 12px;

      display: block;
      height: 1px;
      width: 294px;

      border-top: 1px solid ${colors.ACCENT};
   }
   @media screen and (min-width: 768px) {
      width: 342px;
      &::before {
         top: 112px;
         left: 12px;

         width: 318px;
      }
   }
   @media screen and (min-width: 1280px) {
      width: 596px;
      padding: 36px 48px;

      gap: 61px 83px;
      &::before {
         top: 130px;
         left: 48px;

         width: 500px;
      }
   }
`;

export const Title = styled.h3`
   width: 176px;
   font-size: 18px;
   font-weight: 400;
   text-align: justify;
   @media screen and (min-width: 1280px) {
      width: 357px;
      font-size: 24px;
      text-align: start;
   }
`;

export const Link = styled.a`
   display: block;
   width: 60px;
   height: 60px;
   padding: 16px;

   border-radius: 50%;
   background-color: ${colors.ACCENT};
`;

export const Description = styled.p`
   font-size: 12px;
   line-height: 1.17;
   text-align: start;
   @media screen and (min-width: 768px) {
      width: 205px;
      font-size: 14px;
   }
   @media screen and (min-width: 1280px) {
      width: 357px;
      font-size: 16px;
   }
`;

export const Date = styled.p`
   font-size: 12px;
   line-height: 1.17;
   text-align: end;
   @media screen and (min-width: 1280px) {
      font-size: 16px;
   }
`;
