import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const Title = styled.h2`
   display: block;
   width: 320px;
   margin-left: ${props => props.marginLeft};
   margin-right: auto;
   margin-bottom: 24px;

   text-transform: uppercase;
   text-align: ${props => props.textAlign};
   font-family: "Oswald", sans-serif;
   font-size: 28px;
   font-weight: 400;
   line-height: 1;
   letter-spacing: 0;

   @media screen and (min-width: 768px) {
      width: ${props => props.width.tablet};
      margin-left: ${props => props.marginLeft};
      margin-bottom: ${props => props.marginBottom.tablet};

      font-size: 36px;
   }
   @media screen and (min-width: 1280px) {
      width: ${props => props.width.desktop};
      margin-bottom: ${props => props.marginBottom.desktop};

      font-size: 48px;
   }
`;
