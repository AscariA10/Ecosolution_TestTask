import { IconContainer } from "../../../components/common-styles/common-styles.styled";

export const ExternalLink = () => {
   return (
      <IconContainer
         width={{ mobile: "28px", tablet: "", desktop: "" }}
         height={{ mobile: "28px", tablet: "", desktop: "" }}
      >
         <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M10.9976 6.98669L21.0125 6.98669L21.0125 17.0017"
               stroke="#173D33"
               strokeWidth="1.5"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M6.98901 21.0109L20.8731 7.12688"
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
