import { ExternalLink } from "../../../../assets/svg-components/cases/ExternalLink";

import { Title, Date, DescriptionContainer, Description, Link } from "./SliderCard.styled";

import turbines from "../../../../assets/images/cases/turbines-mobile.jpg";

export const SliderCard = () => {
   return (
      <div>
         <img src={turbines} alt="turbines" />
         <DescriptionContainer>
            <Title>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</Title>
            <Link href="#">
               <ExternalLink />
            </Link>
            <Description>Wind Power for auto field irrigation</Description>
            <Date>July 2023</Date>
         </DescriptionContainer>
      </div>
   );
};
