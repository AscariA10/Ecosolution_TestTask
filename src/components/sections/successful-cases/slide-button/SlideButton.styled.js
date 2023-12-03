import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

export const Button = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 66px;
   height: 66px;
   top: ${props => props.position.top.mobile};
   right: ${props => props.position.right.mobile};

   border: 1px solid ${colors.ACCENT};
   border-radius: 50%;
   @media screen and (min-width: 768px) {
      top: ${props => props.position.top.tablet};
   }
`;
