import { HeaderWrapper, PageLogoWrapper, MenuButton } from "./Header.styled";
import { Container } from "../common-styles/common-styles.styled";

import { PageLogo } from "../../assets/svg-components/PageLogo";
import { Menu } from "../../assets/svg-components/Menu/Menu";

export const Header = () => {
   return (
      <Container>
         <HeaderWrapper>
            <PageLogoWrapper>
               <PageLogo />
            </PageLogoWrapper>
            <MenuButton>
               <Menu />
            </MenuButton>
         </HeaderWrapper>
      </Container>
   );
};
