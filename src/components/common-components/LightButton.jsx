import { Button, InnerIcon } from "./LightButton.styled";

export const LightButton = ({
   children,
   title = "button",
   marginLeft = "auto",
   marginRight = "auto",
   marginBottom = "0x",
}) => {
   return (
      <Button marginLeft={marginLeft} marginRight={marginRight} marginBottom={marginBottom}>
         {title}
         <InnerIcon>{children}</InnerIcon>
      </Button>
   );
};
