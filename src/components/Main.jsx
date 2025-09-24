import {
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
  Table,
  Image,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaCircle, FaEllipsis, FaPlus } from "react-icons/fa6";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Chart, useChart } from "@chakra-ui/charts";
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";
import OverviewHeader from "./Main/OverviewHeader";
import TotalProfitCard from "./Main/TotalProfitCard";
import TotalSalesCard from "./Main/TotalSalesCard";
import NewUsersCard from "./Main/NewUsersCard";
import StatisticsChartCard from "./Main/StatisticsChartCard";
import AnalyticsChardCard from "./Main/AnalyticsChardCard";

const Main = () => {
  const chart = useChart({
    data: [
      { id: 1, name: "Current week", value: 2500, color: "#328299" },
      { id: 2, name: "Last week", value: 1000, color: "#B6EB8E" },
    ],
  });

  const nums = [1, 2, 3, 4];
  const numOfSeries = [1, 2, 3];

  return (
    <Container
      bg={"gray.100"}
      px={8}
      py={10}
      maxW={"100%"}
      border={"2px solid"}
      borderColor={"gray.200"}
    >
      <OverviewHeader />
      <Flex justifyContent={"space-between"} pb={8}>
        <TotalProfitCard />
        <TotalSalesCard />
        <NewUsersCard />
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} pb={8}>
        <Flex>
          <StatisticsChartCard />
        </Flex>

        <Flex>
          <AnalyticsChardCard />
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Flex>
          <Card.Root
            width="320px"
            variant={"subtle"}
            key={"subtle"}
            bg={"#fff"}
            rounded={"xl"}
            minW={"95vh"}
          >
            <Card.Body gap="2">
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                pb={6}
              >
                <Card.Title mb="2" textStyle={"2xl"} pt={2}>
                  My Cards
                </Card.Title>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      color={"black"}
                      _hover={{ color: "white" }}
                      rounded={"xl"}
                      borderColor={"gray.200"}
                      textStyle={"lg"}
                      py={6}
                    >
                      <Image src="/mastercard-logo.png" width={10} height={8} />
                      5880 **** **** 8854
                      <Icon size={"xs"} color={"gray.400"}>
                        <BiChevronDown />
                      </Icon>
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

              <Flex gap={10}>
                <Table.Root size="sm" maxW={"xs"}>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Flex pb={8}>
                          <Card.Root
                            position={"relative"}
                            overflow={"hidden"}
                            bg={"#328299"}
                            minW={"xs"}
                            border={"none"}
                            rounded={"2xl"}
                          >
                            <FaCircle
                              style={{
                                position: "absolute",
                                transform: "translate(50%, 20%)",
                              }}
                              size={384}
                              color="#B6EB8E"
                              fill="#B6EB9E"
                            />
                            <Stack position={"relative"}>
                              <Card.Header>
                                <Flex
                                  alignItems={"baseline"}
                                  justifyContent={"space-between"}
                                >
                                  <Stack gap={-1}>
                                    <Theme bg={"#328299"}>
                                      <Text>Current balance</Text>
                                      <Text
                                        textStyle={"4xl"}
                                        fontWeight={"semibold"}
                                      >
                                        70,700.00
                                      </Text>
                                    </Theme>
                                  </Stack>
                                  <Image
                                    src="/Visa_Logo.png"
                                    alt="visa logo"
                                    htmlHeight={"25px"}
                                    htmlWidth={"75px"}
                                  />
                                </Flex>
                              </Card.Header>
                              <Card.Body></Card.Body>
                              <Card.Footer>
                                <Theme bg={"transparent"}>
                                  <Stack minW={"xs"}>
                                    <Text>Thresea Webb</Text>
                                    <Flex
                                      gap={18}
                                      alignItems={"center"}
                                      justifyContent={"space-between"}
                                    >
                                      <Flex gap={4} alignItems={"center"}>
                                        {numOfSeries.map(() => (
                                          <Flex gap={0.5}>
                                            {nums.map(() => (
                                              <FaCircle
                                                size={3}
                                                color={"white"}
                                                fill="white"
                                              />
                                            ))}
                                          </Flex>
                                        ))}
                                        <Text>87276</Text>
                                      </Flex>
                                      <Flex>
                                        <Text>12/19</Text>
                                      </Flex>
                                    </Flex>
                                  </Stack>
                                </Theme>
                              </Card.Footer>
                            </Stack>
                          </Card.Root>
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell pt={8}>
                        <Button
                          variant="subtle"
                          minW={"full"}
                          bg={"#befaf23e"}
                          rounded={"xl"}
                          color={"#328299"}
                          fontWeight={"bold"}
                          textStyle={"lg"}
                          py={6}
                        >
                          <FaPlus />
                          Add Card
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
                <Table.Root size="sm">
                  <Table.Body>
                    <Table.Row textStyle={"lg"}>
                      <Table.Cell>
                        <Flex gap={20} pb={3}>
                          <Stack color={"gray.400"} gap={4}>
                            <Text>Card Type:</Text>
                            <Text>Card Holder:</Text>
                            <Text>Expires:</Text>
                            <Text>Card Number:</Text>
                            <Text>Total Balance:</Text>
                            <Text>Total Debt:</Text>
                          </Stack>
                          <Stack gap={4}>
                            <Text>Visa</Text>
                            <Text>Thresea Webb</Text>
                            <Text>12/19</Text>
                            <Text>5880 5087 3288 8854</Text>
                            <Text>80,700.00</Text>
                            <Text>8,250.00</Text>
                          </Stack>
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell pt={8}>
                        <Flex gap={8}>
                          <Button
                            bg={"#328299"}
                            textStyle={"lg"}
                            px={8}
                            rounded={"xl"}
                            size={"xl"}
                            // fontWeight={"semibold"}
                          >
                            Pay Debt
                          </Button>
                          <Button
                            variant="outline"
                            size={"xl"}
                            rounded={"xl"}
                            px={8}
                            fontWeight={"semibold"}
                            textStyle={"lg"}
                          >
                            Cancel
                          </Button>
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Flex>
            </Card.Body>
          </Card.Root>
        </Flex>

        <Flex>
          <Card.Root
            bg={"#fff"}
            variant={"subtle"}
            border={"2px solid"}
            borderColor={"gray.100"}
            rounded={"xl"}
            minW={"md"}
            minH={"lg"}
            // maxH={"lg"}
          >
            <Card.Header>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                pb={6}
              >
                <Card.Title
                  color={"black"}
                  fontWeight={"semibold"}
                  textStyle={"2xl"}
                >
                  Sales
                </Card.Title>
                <IconButton
                  bg={"#fff"}
                  color={"gray.400"}
                  _hover={{ bg: "#000", color: "white" }}
                >
                  <FaEllipsis />
                </IconButton>
              </Flex>
            </Card.Header>
            <Card.Body>
              <Theme appearance="light" bg={"#fff"}>
                <Chart.Root boxSize={"200px"} chart={chart} mx={"auto"}>
                  <PieChart>
                    <Tooltip
                      cursor={false}
                      animationDuration={100}
                      content={<Chart.Tooltip />}
                    />
                    <Pie
                      innerRadius={100}
                      outerRadius={120}
                      isAnimationActive={false}
                      data={chart.data}
                      dataKey={chart.key("value")}
                      nameKey="name"
                    >
                      <Label
                        content={({ viewBox }) => (
                          <Chart.RadialText
                            viewBox={viewBox}
                            title={chart.getTotal("value").toLocaleString()}
                            description="Total"
                          />
                        )}
                      />
                      {chart.data.map((item) => {
                        return (
                          <Cell
                            key={item.name}
                            fill={chart.color(item.color)}
                          />
                        );
                      })}
                      <Cell />
                    </Pie>
                  </PieChart>
                </Chart.Root>
              </Theme>
            </Card.Body>
            <Card.Footer>
              <Table.Root variant={"simple"} color={"black"} textStyle={"lg"}>
                <Table.Caption />
                <Table.Body>
                  {chart.data.map((item) =>
                    item.name === "Current week" ? (
                      <Table.Row key={item.id}>
                        <Table.Cell color={"gray.400"}>
                          <Flex alignItems={"center"} gap={1}>
                            <FaCircle size={12} color={"teal"} fill="teal" />
                            {item.name}
                          </Flex>
                        </Table.Cell>
                        <Table.Cell>{item.value}</Table.Cell>
                        <Table.Cell
                          textAlign="end"
                          alignItems={"center"}
                          justifyContent={"center"}
                          color={"#B6EB8E"}
                        >
                          <Flex alignItems={"center"} justifyContent={"end"}>
                            <BsArrowUp size={12} />
                            <Text fontWeight={"semibold"}>8.6%</Text>
                          </Flex>
                        </Table.Cell>
                      </Table.Row>
                    ) : (
                      <Table.Row key={item.id}>
                        <Table.Cell color={"gray.400"}>
                          <Flex alignItems={"center"} gap={1}>
                            <FaCircle
                              size={12}
                              color={"#B6EB8E"}
                              fill="#B6EB8E"
                            />
                            {item.name}
                          </Flex>
                        </Table.Cell>
                        <Table.Cell>{item.value}</Table.Cell>
                        <Table.Cell color={"red.300"}>
                          <Flex alignItems={"center"} justifyContent={"end"}>
                            <BsArrowDown size={12} />
                            <Text fontWeight={"semibold"}>5.8%</Text>
                          </Flex>
                        </Table.Cell>
                      </Table.Row>
                    )
                  )}
                </Table.Body>
              </Table.Root>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Main;
