import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding: 18px 20px;
   margin-left: auto;
   margin-right: auto;
   display: grid;

   grid-template-columns: 1fr;
   grid-auto-flow: dense;
   justify-items: center;
   gap: 12px 24px;

   @media screen and (min-width: 480px) {
      width: 480px;
   }
   @media screen and (min-width: 768px) {
      width: 708px;
      padding-top: 83px;
      grid-template-columns: repeat(2, 343px);
      grid-template-rows: auto 22px 39px;
   }
   @media screen and (min-width: 1280px) {
      width: 1240px;
      padding-top: 109px;
      grid-template-columns: 596px auto;
      gap: 12px 185px;
   }
`;
// minmax(auto, 549px)
export const QuestionList = styled.ul`
   padding-left: 24px;
   margin-bottom: 20px;
   @media screen and (min-width: 768px) {
      margin-bottom: 0px;
      grid-column: 1/2;
      grid-row: 1/4;
   }
   @media screen and (min-width: 1280px) {
      padding-left: 52px;
   }
`;

export const QuestionItem = styled.li`
   position: relative;
   :before {
      content: "";
      position: absolute;
      top: 0;
      left: -7%;
      width: 107%;
      height: 1px;
      border-bottom: 1px solid ${colors.ACCENT};
      @media screen and (min-width: 1280px) {
         left: -10%;
         width: 110%;
      }
   }
`;

export const Question = styled.p`
   position: relative;
   padding-top: 17px;
   margin-bottom: 16px;
   @media screen and (min-width: 768px) {
      font-size: 18px;
   }
   @media screen and (min-width: 1280px) {
      padding-top: 25px;
      margin-bottom: 25px;
      font-size: 22px;
   }
`;
export const Answer = styled.p`
   font-size: 14px;
   margin-bottom: 16px;
   text-align: justify;
   @media screen and (min-width: 1280px) {
      font-size: 16px;
      margin-bottom: 25px;
   }
`;

export const Icon = styled.span`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 16px;
   width: 16px;
   left: -24px;
   top: 50%;
   transform: translateY(-50%);
   @media screen and (min-width: 1280px) {
      height: 28px;
      width: 28px;
      left: -52px;
   }
`;

export const Appeal = styled.p`
   margin-bottom: 12px;
   line-height: 1.22;
   @media screen and (min-width: 768px) {
      margin-bottom: 0px;
      font-size: 18px;
   }
   @media screen and (min-width: 1280px) {
      font-size: 24px;
   }
`;
