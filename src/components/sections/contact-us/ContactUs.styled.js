import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding: 18px 20px 36px;
   margin-left: auto;
   margin-right: auto;

   grid-template-columns: 1fr;

   @media screen and (min-width: 480px) {
      width: 480px;
   }
   @media screen and (min-width: 768px) {
      width: 708px;
      padding-top: 83px;
   }
   @media screen and (min-width: 1280px) {
      width: 1240px;
      padding-top: 109px;
   }
`;

export const ContactWrapper = styled.div`
   margin-top: 40px;
   display: grid;

   grid-template-columns: 1fr;

   @media screen and (min-width: 480px) {
      width: 480px;
   }
   @media screen and (min-width: 768px) {
      width: 708px;

      grid-template-columns: 244px 342px;
      gap: 0 122px;
   }
   @media screen and (min-width: 1280px) {
      margin-top: 120px;
      width: 1240px;

      grid-template-columns: 466px 596px;
      gap: 0 178px;
   }
`;
