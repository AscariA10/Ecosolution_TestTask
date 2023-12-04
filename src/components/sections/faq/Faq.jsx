import { useState } from "react";

import { SectionTitle } from "../../common-components/SectionTitle";
import { DarkButton } from "../../common-components/DarkButton";

import { Section, QuestionList, QuestionItem, Question, Answer, Icon, Appeal } from "./Faq.styled";

import { Plus } from "../../../assets/svg-components/faq/Plus";
import { Minus } from "../../../assets/svg-components/faq/Minus";

const questions = [
   {
      id: "0",
      question: "How do wind turbines and solar panels work together in a renewable energy system?",
      answer:
         "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
   },
   {
      id: "1",
      question:
         "What sets EcoSolution's renewable energy solutions apart from others on the market?",
      answer:
         "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
   },
   {
      id: "2",
      question:
         "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
      answer:
         "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
   },
   {
      id: "3",
      question:
         "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
      answer:
         "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
   },
   {
      id: "4",
      question:
         "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
      answer:
         "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
   },
];

export const Faq = () => {
   const [activeAnswer, setActiveAnswer] = useState(0);

   return (
      <Section>
         <SectionTitle title="Frequently Asked Questions" width={{ tablet: "347px" }} />
         <QuestionList>
            {questions.map((element, index) => {
               return (
                  <QuestionItem
                     key={element.id}
                     id={element.id}
                     onClick={() => {
                        setActiveAnswer(element.id);
                     }}
                  >
                     <Question>
                        <Icon>
                           {Number(activeAnswer) === index ? (
                              <Minus
                                 width={{ mobile: "16px", tablet: "", desktop: "28px" }}
                                 height={{ mobile: "16px", tablet: "", desktop: "28px" }}
                              />
                           ) : (
                              <Plus
                                 width={{ mobile: "16px", tablet: "", desktop: "28px" }}
                                 height={{ mobile: "16px", tablet: "", desktop: "28px" }}
                              />
                           )}
                        </Icon>
                        {element.question}
                     </Question>
                     {Number(activeAnswer) === index ? <Answer>{element.answer}</Answer> : null}
                  </QuestionItem>
               );
            })}
         </QuestionList>
         <Appeal>Didn't find the answer to your question?</Appeal>
         <DarkButton
            alwaysVisible={true}
            width={{ mobile: "130px", tablet: "130px", desktop: "130px" }}
            title="Contact Us"
         />
      </Section>
   );
};
