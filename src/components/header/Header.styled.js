import styled from "@emotion/styled";
import { colors } from "../common-styles/colors";

export const HeaderWrapper = styled.header`
   padding: 36px 0px 10px;
`;

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left: 20px;
   padding-right: 20px;
   width: 100%;
   margin: 0 auto;

   @media screen and (min-width: 480px) {
      width: 480px;
   }

   @media screen and (min-width: 768px) {
      width: 768px;
      padding-left: 30px;
      padding-right: 30px;
   }

   @media screen and (min-width: 1280px) {
      width: 1280px;
      padding-left: 20px;
      padding-right: 20px;
   }
`;

export const PageLogoWrapper = styled.a`
   width: 270px;
   @media (min-width: 768px) {
      margin-right: 247px;
   }
   @media (min-width: 1280px) {
      margin-right: 779px;
   }
`;

export const MenuButton = styled.button`
   display: flex;
   width: 40px;
   align-items: center;
   justify-content: center;
   padding: 12px;

   border: none;
   border-radius: 50%;

   background-color: ${colors.MENU_PRIMARY};
`;
