import { Button, InnerIcon } from "./LightButton.styled";

export const LightButton = ({
   children,
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
         <InnerIcon>{children}</InnerIcon>
      </Button>
   );
};
