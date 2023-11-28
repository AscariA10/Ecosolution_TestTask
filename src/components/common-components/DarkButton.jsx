import { Button, InnerIcon } from "./DarkButton.styled";

export const DarkButton = ({ children, title = "button" }) => {
   return (
      <Button>
         {title}
         <InnerIcon>{children}</InnerIcon>
      </Button>
   );
};
