import { IconContainer } from "../../components/common-styles/common-styles.styled";

export const ArrowLeft = ({
   width = { mobile: "16px", tablet: "", desktop: "" },
   height = { mobile: "16px", tablet: "", desktop: "" },
}) => {
   return (
      <IconContainer width={width} height={height}>
         <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M14.3542 8.89343L5.24925 17.9984L14.3542 27.1034"
               stroke="#173D33"
               strokeWidth="1.5"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M30.749 17.9988H5.50402"
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
