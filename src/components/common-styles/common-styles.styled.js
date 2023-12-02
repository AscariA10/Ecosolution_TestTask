import styled from "@emotion/styled";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-left: 20px;
   padding-right: 20px;
   width: 100%;
   margin: 0 auto;

   @media screen and (min-width: 480px) {
      width: 480px;
   }

   @media screen and (min-width: 768px) {
      width: 768px;
      padding-left: 30px;
      padding-right: 30px;
   }

   @media screen and (min-width: 1280px) {
      width: 1280px;
      padding-left: 20px;
      padding-right: 20px;
   }
`;

export const IconContainer = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${props => props.width.mobile};
   height: ${props => props.height.mobile};
   @media screen and (min-width: 1280px) {
      width: ${props => props.width.desktop};
      height: ${props => props.height.desktop};
   }
`;
