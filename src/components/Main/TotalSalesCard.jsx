import { Card, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { LuChartColumnBig } from "react-icons/lu";

const TotalSalesCard = () => {
  return (
    <Card.Root border={"1px solid"} borderColor={"gray.200"} minW={"470px"}>
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
  );
};

export default TotalSalesCard;
