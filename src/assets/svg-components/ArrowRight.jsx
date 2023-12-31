import { IconContainer } from "../../components/common-styles/common-styles.styled";

export const ArrowRight = ({
   width = { mobile: "16px", tablet: "", desktop: "" },
   height = { mobile: "16px", tablet: "", desktop: "" },
}) => {
   return (
      <IconContainer width={width} height={height}>
         <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M21.6458 8.89343L30.7508 17.9984L21.6458 27.1034"
               stroke="#173D33"
               strokeWidth="1.5"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M5.25098 17.9988H30.496"
               stroke="#173D33"
               strokeWidth="1.5"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </IconContainer>
   );
};
