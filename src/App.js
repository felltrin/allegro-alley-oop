import { Container, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={6} px={6}>
          <Header />
        </Container>
      </Theme>
    </Provider>
  );
}

export default App;
