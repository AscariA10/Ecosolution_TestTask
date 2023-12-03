import { ExternalLink } from "../../../../assets/svg-components/cases/ExternalLink";

import {
   Card,
   Image,
   Title,
   Date,
   DescriptionContainer,
   Description,
   Link,
} from "./SliderCard.styled";

export const SliderCard = ({ image }) => {
   return (
      <Card>
         <Image src={image} alt="turbines" />
         <DescriptionContainer>
            <Title>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</Title>
            <Link href="#">
               <ExternalLink />
            </Link>
            <Description>Wind Power for auto field irrigation</Description>
            <Date>July 2023</Date>
         </DescriptionContainer>
      </Card>
   );
};
