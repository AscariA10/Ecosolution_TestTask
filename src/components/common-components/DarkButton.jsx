import { Button, InnerIcon } from "./DarkButton.styled";

export const DarkButton = ({ children, title = "button", alwaysVisible }) => {
   return (
      <Button alwaysVisible={alwaysVisible}>
         {title}
         <InnerIcon>{children}</InnerIcon>
      </Button>
   );
};
