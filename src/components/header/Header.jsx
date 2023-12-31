import { DarkButton } from "../common-components/DarkButton";

import { HeaderWrapper, HeaderContainer, PageLogoWrapper, MenuButton } from "./Header.styled";

import { PageLogo } from "../../assets/svg-components/PageLogo";
import { Menu } from "../../assets/svg-components/Menu";
import { ArrowDown } from "../../assets/svg-components/ArrowDown";

export const Header = () => {
   return (
      <HeaderWrapper>
         <HeaderContainer>
            <PageLogoWrapper href="/">
               <PageLogo />
            </PageLogoWrapper>
            <MenuButton>
               <Menu />
            </MenuButton>
            <DarkButton title="Get in touch" alwaysVisible={false}>
               <ArrowDown />
            </DarkButton>
         </HeaderContainer>
      </HeaderWrapper>
   );
};
