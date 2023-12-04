import styled from "@emotion/styled";
import { colors } from "../../../common-styles/colors";

import { Form as FormikForm, Field as FormikField } from "formik";

export const Form = styled(FormikForm)`
   width: 100%;
   padding: 36px 12px;

   background-color: ${colors.CARD_BACKGROUND};
   @media screen and (min-width: 1280px) {
      padding: 48px;
   }
`;

export const Field = styled(FormikField)`
   width: 100%;
   margin-bottom: 28px;

   background-color: ${colors.CARD_BACKGROUND};
   border: none;
   border-bottom: 1px solid ${props => props.color};
`;

export const FieldText = styled.textarea`
   width: 100%;
   min-height: 147px;
   margin-bottom: 16px;

   background-color: ${colors.CARD_BACKGROUND};
   border: none;
   border-bottom: 1px solid ${colors.ACCENT};
`;

export const EmailError = styled.p`
   top: 0;
   font-size: 14px;
   text-align: end;
   color: ${colors.ERROR};
`;
