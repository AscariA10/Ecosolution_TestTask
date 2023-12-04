import { Button, InnerIcon } from "./DarkButton.styled";

export const DarkButton = ({
   children,
   title = "button",
   width = { mobile: "140px", tablet: "272px", desktop: "365px" },
   alwaysVisible,
}) => {
   return (
      <Button width={width} alwaysVisible={alwaysVisible}>
         {title}
         <InnerIcon>{children}</InnerIcon>
      </Button>
   );
};
