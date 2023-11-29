import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const Button = styled.button`
   display: flex;
   align-items: center;
   padding-top: 4px;
   padding-bottom: 4px;
   padding-left: 16px;
   padding-right: 4px;

   margin-left: ${props => props.marginLeft};
   margin-right: ${props => props.marginRight};
   margin-bottom: ${props => props.marginBottom};

   background-color: ${colors.backgroundLight};
   border: 1px solid ${colors.accent};
   border-radius: 32px;

   font-size: 16px;
   line-height: 1.12;
   letter-spacing: -0.04em;
`;

export const InnerIcon = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 32px;
   height: 32px;

   padding: 8px;
   color: ${colors.accentDark};
   background-color: ${colors.accent};

   margin-left: 12px;
   border-radius: 50%;
`;
