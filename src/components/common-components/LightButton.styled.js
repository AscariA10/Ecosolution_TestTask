import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const Button = styled.button`
   display: flex;
   align-items: center;
   padding-top: 4px;
   padding-bottom: 4px;
   padding-left: 16px;
   padding-right: 4px;
   height: 39px;

   margin-left: ${props => props.marginLeft.mobile};
   margin-right: ${props => props.marginRight};
   margin-bottom: 0;

   background-color: ${colors.BACKGROUND_LIGHT};
   border: 1px solid ${colors.ACCENT};
   border-radius: 32px;

   font-size: 16px;
   line-height: 1.12;
   letter-spacing: -0.04em;
   @media screen and (min-width: 768px) {
      margin-top: ${props => props.marginTop.tablet};
      margin-bottom: 0;
      margin-left: ${props => props.marginLeft.tablet};
   }
   @media screen and (min-width: 1280px) {
      margin-top: ${props => props.marginTop.desktop};
   }
`;

export const InnerIcon = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 32px;
   height: 32px;

   padding: 8px;
   color: ${colors.ACCENT_DARK};
   background-color: ${colors.ACCENT};

   margin-left: 12px;
   border-radius: 50%;
`;
