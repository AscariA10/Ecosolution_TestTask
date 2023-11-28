import styled from "@emotion/styled";
import { colors } from "../common-styles/color";

export const Button = styled.button`
   display: ${props => (props.alwaysVisible ? "flex" : "none")};
   align-items: center;
   padding: 10px 16px;

   background-color: ${colors.accent};
   border: none;
   border-radius: 32px;

   font-size: 16px;
   letter-spacing: -0.032rem;

   @media (min-width: 768px) {
      display: flex;
   }
`;

export const InnerIcon = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 14px;
   height: 14px;
   background-color: ${colors.accentDark};

   margin-left: 12px;
   border-radius: 50%;
`;
