import { Button } from "./SlideButton.styled";

export const SlideButton = ({
   children,
   onClick,
   position = {
      top: { mobile: "0px", tablet: "0px", desktop: "0px" },
      right: { mobile: "0px", tablet: "0px", desktop: "0px" },
   },
}) => {
   return (
      <Button position={position} onClick={onClick}>
         {children}
      </Button>
   );
};
