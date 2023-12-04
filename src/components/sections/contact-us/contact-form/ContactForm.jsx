import { Formik } from "formik";
import { Form, Field, FieldText, EmailError } from "./ContactForm.styled";
import * as Yup from "yup";

import { LightButton } from "../../../common-components/LightButton";
import { colors } from "../../../common-styles/colors";

export const ContactForm = () => {
   const SignupSchema = Yup.object().shape({
      fullName: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
      phone: Yup.string().min(10, "Too Short!").max(10, "Too Long!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
   });
   return (
      <Formik
         initialValues={{
            firstName: "",
            lastName: "",
            email: "",
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
            values.preventDefault();
            console.log(values);
         }}
      >
         {({ errors, touched }) => (
            <Form
               onSubmit={values => {
                  values.preventDefault();
               }}
            >
               <label htmlFor="fullName">* Full name:</label>
               <Field
                  type="text"
                  name="fullName"
                  placeholder="John Rosie"
                  color={errors.fullName && touched.fullName ? colors.ERROR : colors.ACCENT}
               />
               {errors.fullName && touched.fullName && <EmailError>Wrong Fullname</EmailError>}
               <label htmlFor="email">* E-mail:</label>
               <Field
                  type="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  color={errors.email && touched.email ? colors.ERROR : colors.ACCENT}
               />
               {errors.email && touched.email && <EmailError>Wrong Email</EmailError>}
               <label htmlFor="phone">* Phone:</label>
               <Field
                  type="phone"
                  name="phone"
                  placeholder="380961234567"
                  color={errors.phone && touched.phone ? colors.ERROR : colors.ACCENT}
               />
               {errors.phone && touched.phone && <EmailError>Wrong Phone</EmailError>}
               <label htmlFor="message">Message:</label>
               <FieldText type="text-area" name="message" placeholder="Your message" />
               <LightButton
                  title="Send"
                  type="submit"
                  marginLeft={{ mobile: "auto", tablet: "", desktop: "" }}
                  marginRight="0px"
               />
            </Form>
         )}
      </Formik>
   );
};
