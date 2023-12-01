import { Card, CardDescription, CardTitle } from "./ValueCard.styled";

export const ValueCard = ({ children = "", title = "title", description = "description" }) => {
   return (
      <Card>
         <CardTitle>
            {children}
            {title}
         </CardTitle>
         <CardDescription>{description}</CardDescription>
      </Card>
   );
};
