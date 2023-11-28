import styled from "@emotion/styled";
import { colors } from "../common-styles/color";

export const HeaderWrapper = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 36px 0px;
`;

export const PageLogoWrapper = styled.a`
   min-width: 269px;
   height: 40px;
`;

export const MenuButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 12px;

   border: none;
   border-radius: 50%;

   background-color: ${colors.menuPrimary};
`;
