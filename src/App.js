import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  IconButton,
  Icon,
  Menu,
  Portal,
  Stack,
  Text,
  Theme,
} from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { GoDownload } from "react-icons/go";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import { LuChartColumnBig } from "react-icons/lu";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={2} px={6}>
          <Header />
        </Container>
        <Flex minH={"93.3dvh"}>
          {/* Sidebar */}
          <Sidebar />
          {/* Main */}
          <Container
            bg={"gray.100"}
            px={8}
            py={10}
            maxW={"100%"}
            border={"2px solid"}
            borderColor={"gray.200"}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"} pb={8}>
              <Flex>
                <Text textStyle={"3xl"} fontWeight={"semibold"}>
                  Overview
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={4}>
                <Box
                  bg={"#fff"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"32px"}
                  height={"32px"}
                  rounded={"md"}
                >
                  <GoDownload />
                </Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button variant={"ghost"} bg={"#fff"} size="sm">
                      Last 7 days
                      <BiChevronDown />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.Item value="new-txt-a">
                          New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
                        </Menu.Item>
                        <Menu.Item value="new-file-a">
                          New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
                        </Menu.Item>
                        <Menu.Item value="new-win-a">
                          New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
                        </Menu.Item>
                        <Menu.Item value="open-file-a">
                          Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
                        </Menu.Item>
                        <Menu.Item value="export-a">
                          Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
                        </Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </Flex>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Card.Root
                border={"1px solid"}
                borderColor={"gray.200"}
                minW={"470px"}
              >
                <Card.Body>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Stack>
                      <Text textStyle={"sm"} color={"gray.400"}>
                        Total Profit
                      </Text>
                      <Flex alignItems={"center"} gap={2}>
                        <Text textStyle={"3xl"} fontWeight={"semibold"}>
                          $14.500
                        </Text>
                        <Flex alignItems={"center"}>
                          <Icon size={12} color={"green.500"}>
                            <BsArrowUp />
                          </Icon>

                          <Text fontWeight={"semibold"} color={"green.500"}>
                            50.8%
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                    <IconButton
                      bg={"#ecf3e79c"}
                      size={"2xl"}
                      rounded={"3xl"}
                      pointerEvents={"none"}
                    >
                      <FaDollarSign color={"#B8EB9E"} />
                    </IconButton>
                  </Flex>
                </Card.Body>
              </Card.Root>
              <Card.Root
                border={"1px solid"}
                borderColor={"gray.200"}
                minW={"470px"}
              >
                <Card.Body>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Stack>
                      <Text textStyle={"sm"} color={"gray.400"}>
                        Total Sales
                      </Text>

                      <Flex alignItems={"center"} gap={2}>
                        <Text textStyle={"3xl"} fontWeight={"semibold"}>
                          26.800K
                        </Text>
                        <Flex alignItems={"center"}>
                          <Icon size={12} color={"red.400"}>
                            <BsArrowDown />
                          </Icon>

                          <Text fontWeight={"semibold"} color={"red.400"}>
                            10.5%
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                    <IconButton
                      bg={"#ecf3e79c"}
                      size={"2xl"}
                      rounded={"3xl"}
                      pointerEvents={"none"}
                    >
                      <LuChartColumnBig color={"#B8EB9E"} />
                    </IconButton>
                  </Flex>
                </Card.Body>
              </Card.Root>
              <Card.Root
                border={"1px solid"}
                borderColor={"gray.200"}
                minW={"470px"}
              >
                <Card.Body>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Stack>
                      <Text textStyle={"sm"} color={"gray.400"}>
                        New Users
                      </Text>

                      <Flex alignItems={"center"} gap={2}>
                        <Text textStyle={"3xl"} fontWeight={"semibold"}>
                          8.300K
                        </Text>
                        <Flex alignItems={"center"}>
                          <Icon size={12} color={"green.500"}>
                            <BsArrowUp />
                          </Icon>

                          <Text fontWeight={"semibold"} color={"green.500"}>
                            24.9%
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                    <IconButton
                      bg={"#ecf3e79c"}
                      size={"2xl"}
                      rounded={"3xl"}
                      pointerEvents={"none"}
                    >
                      <BiUser color={"#B8EB9E"} />
                    </IconButton>
                  </Flex>
                </Card.Body>
              </Card.Root>
            </Flex>
          </Container>
        </Flex>
        {/* <Demo /> */}
      </Theme>
    </Provider>
  );
}

export default App;
