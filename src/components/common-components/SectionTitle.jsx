import { Title } from "./SectionTitle.styled";

export const SectionTitle = ({
   title = "sectiontitle",
   textAlign = "start",
   marginLeft = "0",
   marginBottom = { tablet: "0px", desktop: "0px" },
   width = { tablet: "200px", desktop: "300px" },
}) => {
   return (
      <Title
         textAlign={textAlign}
         marginLeft={marginLeft}
         marginBottom={marginBottom}
         width={width}
      >
         {title}
      </Title>
   );
};
