import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding: 18px 0;

   @media screen and (min-width: 768px) {
      padding-top: 83px;
   }
   @media screen and (min-width: 1280px) {
      padding-top: 102px;
   }
`;

export const TitleWrapper = styled.div`
   margin-bottom: 36px;

   @media screen and (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: space-between;

      margin-bottom: 100px;
   }
   @media screen and (min-width: 1280px) {
      margin-bottom: 122px;
   }
`;

export const Definition = styled.p`
   width: 320px;

   text-align: justify;
   @media screen and (min-width: 768px) {
      position: relative;
      width: 342px;
      margin-bottom: 0;

      line-height: 1.19;
      &::before {
         content: "";
         position: absolute;
         display: block;
         top: 4px;
         left: -11px;

         height: 110px;
         width: 1px;

         border-left: 1px solid ${colors.ACCENT};
      }
   }
   @media screen and (min-width: 1280px) {
      width: 459px;

      &::before {
         content: "";
         position: absolute;
         top: 4px;
         left: -161px;
         display: block;
         height: 87px;
         width: 1px;

         border-left: 1px solid ${colors.ACCENT};
      }
   }
`;

export const ValuesWrapper = styled.div`
   width: 100%;

   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 197px 197px;
   gap: 24px;
   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
   }
   @media screen and (min-width: 1280px) {
      grid-template-rows: repeat(2, 339px);
      gap: 48px;
   }
`;

export const Thumb = styled.div`
   display: none;

   @media screen and (min-width: 768px) {
      display: block;
      width: 342px;
      margin: 0;

      grid-column: 1 / 3;
      grid-row: 2 / 3;
      &:last-child {
         grid-column: 3 / 5;
         grid-row: 1 / 2;
      }
   }

   @media screen and (min-width: 1280px) {
      width: 596px;
   }
`;
