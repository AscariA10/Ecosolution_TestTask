import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const Title = styled.h3`
   display: block;
   width: 320px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 24px;

   text-transform: uppercase;
   font-family: "Oswald", sans-serif;
   font-size: 28px;
   font-weight: 400;
   line-height: 1;
   letter-spacing: 0;

   @media screen and (min-width: 768px) {
      width: 272px;
      margin-left: 0;
      margin-bottom: 0;

      font-size: 36px;
   }
   @media screen and (min-width: 1280px) {
      width: 365px;

      font-size: 48px;
   }
`;
