import { Container, Flex, Theme } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Theme appearance="light">
      <Container bg={"#fff"} maxW={"full"} py={2} px={6}>
        <Header />
      </Container>
      <Flex minH={"93.3dvh"}>
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <Main />
      </Flex>
    </Theme>
  );
}

export default App;
