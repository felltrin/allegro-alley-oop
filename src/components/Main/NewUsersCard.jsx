import { Card, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
// import Demo from "../Demo";
import { BsArrowUp } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const NewUsersCard = () => {
  return (
    <Card.Root border={"1px solid"} borderColor={"gray.200"} minW={"470px"}>
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
  );
};

export default NewUsersCard;
