import styled from "@emotion/styled";
import { colors } from "../common-styles/color";

export const Button = styled.button`
   padding: 10px 16px;

   background-color: ${colors.accent};
   border: none;
   border-radius: 32px;

   font-size: 16px;
   letter-spacing: -0.032rem;
`;

export const InnerIcon = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 12px;
   border-radius: 50%;
`;
