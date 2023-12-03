import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Card = styled.div`
   width: 320px;

   @media screen and (min-width: 768px) {
      width: 342px;
   }
`;

export const Image = styled.img`
   width: 320px;

   @media screen and (min-width: 768px) {
      width: 342px;
   }
`;

export const DescriptionContainer = styled.div`
   position: relative;
   width: 320px;
   padding: 24px 12px 12px;

   display: grid;
   grid-template-columns: 176px 60px;
   gap: 34px 61px;
   justify-content: space-between;
   background-color: ${colors.CARD_BACKGROUND};
   &::before {
      content: "";
      position: absolute;
      top: 111px;
      left: 12px;

      display: block;
      height: 1px;
      width: 294px;

      border-top: 1px solid ${colors.ACCENT};
   }
   @media screen and (min-width: 768px) {
      width: 342px;
   }
`;

export const Title = styled.h3`
   width: 176px;
   font-size: 18px;
   font-weight: 400;
   text-align: justify;
`;

export const Link = styled.a`
   display: block;
   width: 60px;
   height: 60px;
   padding: 16px;

   border-radius: 50%;
   background-color: ${colors.ACCENT};
`;

export const Description = styled.p`
   font-size: 12px;
   line-height: 1.17;
`;

export const Date = styled.p`
   font-size: 12px;
   line-height: 1.17;
   text-align: end;
`;
