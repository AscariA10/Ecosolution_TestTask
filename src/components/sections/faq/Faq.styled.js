import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   padding: 18px 20px;

   display: grid;

   grid-template-columns: 1fr;
   justify-items: center;

   @media screen and (min-width: 480px) {
      width: 480px;
   }
   @media screen and (min-width: 768px) {
      padding-top: 83px;
      grid-template-columns: repeat(2, 343px);
      grid-template-rows: 561px 12px;
   }
   @media screen and (min-width: 1280px) {
      padding-top: 102px;
   }
`;

export const QuestionList = styled.ul`
   padding-left: 24px;
   margin-bottom: 20px;
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
   }
`;

export const Question = styled.p`
   position: relative;
   padding-top: 17px;
   margin-bottom: 16px;
`;
export const Answer = styled.p`
   font-size: 14px;
   margin-bottom: 16px;
   text-align: justify;
`;

export const Icon = styled.span`
   position: absolute;
   height: 16px;
   width: 16px;
   left: -24px;
   top: 50%;
   transform: translateY(-50%);
`;

export const Appeal = styled.p`
   margin-bottom: 12px;
`;
