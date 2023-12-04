import { IconContainer } from "../../../components/common-styles/common-styles.styled";

export const Minus = ({
   width = { mobile: "16px", tablet: "", desktop: "" },
   height = { mobile: "16px", tablet: "", desktop: "" },
}) => {
   return (
      <IconContainer width={width} height={height}>
         <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M4 8H12"
               stroke="#173D33"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </IconContainer>
   );
};
