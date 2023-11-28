import { DarkButton } from "../common-components/DarkButton";

import { HeaderWrapper, PageLogoWrapper, MenuButton } from "./Header.styled";
import { Container } from "../common-styles/common-styles.styled";

import { PageLogo } from "../../assets/svg-components/PageLogo";
import { Menu } from "../../assets/svg-components/Menu";
import { ArrowDown } from "../../assets/svg-components/ArrowDown";

export const Header = () => {
   return (
      <Container>
         <HeaderWrapper>
            <PageLogoWrapper href="/">
               <PageLogo />
            </PageLogoWrapper>
            <MenuButton>
               <Menu />
            </MenuButton>
            <DarkButton title="Get in touch" alwaysVisible={false}>
               <ArrowDown />
            </DarkButton>
         </HeaderWrapper>
      </Container>
   );
};
