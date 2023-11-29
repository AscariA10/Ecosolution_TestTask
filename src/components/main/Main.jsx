import { Hero } from "../sections/hero/Hero";
import { Values } from "../sections/values/Values";
import { ElectricityIndicator } from "../sections/electricity-indicator/ElectricityIndicator";
import { SuccessfulCases } from "../sections/successful-cases/SuccessfulCases";
import { Faq } from "../sections/faq/Faq";
import { ContactUs } from "../sections/contact-us/ContactUs";

export const Main = () => {
   return (
      <main>
         <Hero></Hero>
         <Values></Values>
         <ElectricityIndicator></ElectricityIndicator>
         <SuccessfulCases></SuccessfulCases>
         <Faq></Faq>
         <ContactUs></ContactUs>
      </main>
   );
};
