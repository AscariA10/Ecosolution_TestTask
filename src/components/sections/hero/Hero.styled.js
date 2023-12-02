import styled from "@emotion/styled";

import { LightButton } from "../../common-components/LightButton";

import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding-top: 136px;
   padding-bottom: 18px;
   @media screen and (min-width: 768px) {
      width: 708px;
      padding-top: 154px;
   }
   @media screen and (min-width: 1280px) {
      padding-top: 190px;
      width: 1240px;
   }
`;

export const HeroWrapper = styled.div`
   margin-bottom: 49px;
   @media screen and (min-width: 768px) {
      display: grid;
      grid-auto-flow: column;
      grid-template-areas:
         "A B"
         "A C";
      gap: 0px 65px;

      margin-bottom: 41px;
   }
   @media screen and (min-width: 1280px) {
      gap: 0px 296px;
      grid-template-columns: 485px 363px;
      margin-bottom: 37px;
   }
`;

export const HeroTitle = styled.h1`
   display: block;
   width: 320px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 24px;

   text-transform: uppercase;
   font-family: "Oswald", sans-serif;
   font-size: 36px;
   font-weight: 400;
   line-height: 1;
   letter-spacing: 0;
   @media screen and (min-width: 768px) {
      grid-area: A;
      width: 290px;
      margin-bottom: 0;
      font-size: 48px;
   }
   @media screen and (min-width: 1280px) {
      margin-left: 0;
      font-size: 64px;
      width: 485px;
   }
`;

export const Definition = styled.p`
   width: 320px;
   margin-bottom: 24px;

   text-align: justify;
   @media screen and (min-width: 768px) {
      grid-area: B;
      width: 342px;
      margin-bottom: 0;

      text-align: left;
   }
   @media screen and (min-width: 1280px) {
      width: 363px;
   }
`;

export const AddressWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;

   &::before {
      content: "";
      display: block;
      position: absolute;
      top: -24px;

      width: 100%;

      border-bottom: 1px solid ${colors.ACCENT};
   }
   @media screen and (min-width: 768px) {
      flex-direction: row;

      align-items: center;
      &::before {
         top: -16px;
      }
   }
   @media screen and (min-width: 1280px) {
      flex-direction: row;

      align-items: center;
      &::before {
         top: -12px;
      }
   }
`;

export const Address = styled.address`
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   font-style: normal;

   @media screen and (min-width: 768px) {
      margin-left: 0;
      margin-right: 77px;
   }
   @media screen and (min-width: 1280px) {
      margin-right: 492px;
   }
`;

export const Email = styled.a`
   display: block;
   width: 163px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 8px;

   text-decoration: none;
   @media screen and (min-width: 768px) {
      margin: 0;
   }
`;

export const Copyright = styled.p`
   display: none;
   @media screen and (min-width: 768px) {
      display: block;
      margin-left: auto;
   }
`;

export const Thumb = styled.div`
   width: 320px;
   margin: 36px auto 0;

   @media screen and (min-width: 768px) {
      margin-top: 40px;
      width: 708px;
   }

   @media screen and (min-width: 1280px) {
      margin-top: 36px;
      width: 1280px;
   }
`;

export const Picture = styled.picture`
   display: block;
   max-width: 100%;
`;
