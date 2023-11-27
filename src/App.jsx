import { Wrapper } from "./App.styled";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

function App() {
   return (
      <Wrapper>
         <Header></Header>
         <Main></Main>
         <Footer></Footer>
      </Wrapper>
   );
}

export default App;
