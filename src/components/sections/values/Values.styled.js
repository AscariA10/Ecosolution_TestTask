import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding: 18px 0;
`;

// export const ValuesContainer = styled.div`

// `;

export const Definition = styled.p`
   width: 320px;
   margin-bottom: 36px;

   text-align: justify;
   @media screen and (min-width: 768px) {
      width: 342px;
      margin-bottom: 0;

      text-align: left;
   }
   @media screen and (min-width: 1280px) {
      width: 363px;
   }
`;

export const ValueList = styled.ul`
   list-style: none;
   width: 320px;

   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 197px 197px;
   gap: 24px;
`;
