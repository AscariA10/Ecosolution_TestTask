import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const Button = styled.button`
   display: ${props => (props.alwaysVisible ? "flex" : "none")};
   align-items: center;
   padding: 10px 16px;
   width: 130px;

   background-color: ${colors.ACCENT};
   border: none;
   border-radius: 32px;

   font-size: 16px;
   line-height: 1.18;
   letter-spacing: -0.04em;

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
   background-color: ${colors.ACCENT_DARK};

   margin-left: 12px;
   border-radius: 50%;
`;
