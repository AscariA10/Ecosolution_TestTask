import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Card = styled.li`
   padding: 13px 12px 12px;
   background-color: ${colors.CARD_BACKGROUND};
`;

export const CardTitle = styled.h3`
   display: flex;
   align-items: center;
   gap: 8px;
   margin-bottom: 33px;

   font-family: "Oswald", sans-serif;
   font-weight: 400;
   text-transform: uppercase;
   line-height: 1.5;

   border-bottom: 1px solid ${colors.ACCENT};
`;

export const CardDescription = styled.p`
   text-align: justify;

   font-size: 14px;
`;
