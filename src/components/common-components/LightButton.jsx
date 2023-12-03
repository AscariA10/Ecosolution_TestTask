import { Button, InnerIcon } from "./LightButton.styled";

import { ArrowRight } from "../../assets/svg-components/ArrowRight";

export const LightButton = ({
   title = "button",
   marginTop = { mobile: "", tablet: "", desktop: "" },
   marginLeft = { mobile: "", tablet: "", desktop: "" },
   marginRight = "auto",
   marginBottom = { mobile: "", tablet: "", desktop: "" },
}) => {
   return (
      <Button
         marginTop={marginTop}
         marginLeft={marginLeft}
         marginRight={marginRight}
         marginBottom={marginBottom}
      >
         {title}
         <InnerIcon>
            <ArrowRight />
         </InnerIcon>
      </Button>
   );
};
