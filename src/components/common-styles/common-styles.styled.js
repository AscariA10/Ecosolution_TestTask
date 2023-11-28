import styled from "@emotion/styled";

export const Container = styled.div`
   padding-left: 20px;
   padding-right: 20px;
   width: 100%;
   margin: 0 auto;

   @media screen and (min-width: 480px) {
      max-width: 480px;
   }

   @media screen and (min-width: 768px) {
      max-width: 768px;
      padding-left: 30px;
      padding-right: 30px;
   }

   @media screen and (min-width: 1280px) {
      max-width: 1240px;
      padding-left: 20px;
      padding-right: 20px;
   }
`;

export const IconContainer = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${props => props.width};
   height: ${props => props.width};
`;
