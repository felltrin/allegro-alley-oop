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
  Table,
  Image,
} from "@chakra-ui/react";
import { GoDownload } from "react-icons/go";
import { BiChevronDown, BiUser } from "react-icons/bi";
import {
  FaCircle,
  FaDollarSign,
  FaEllipsis,
  FaPlus,
  FaRegCalendarDays,
} from "react-icons/fa6";
import { LuChartColumnBig } from "react-icons/lu";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  Line,
  Pie,
  PieChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Main = () => {
  const statisticsChart = useChart({
    data: [
      { sales: 175, expenses: 123, profit: 30, type: "Mon" },
      { sales: 175, expenses: 73, profit: 80, type: "Tue" },
      { sales: 125, expenses: 123, profit: 80, type: "Wed" },
      { sales: 175, expenses: 123, profit: 30, type: "Thur" },
      { sales: 175, expenses: 123, profit: 30, type: "Fri" },
      { sales: 175, expenses: 123, profit: 30, type: "Sat" },
      { sales: 275, expenses: 23, profit: 30, type: "Sun" },
    ],
    series: [
      { name: "sales", color: "#328299", stackId: "a" },
      { name: "profit", color: "#EAE3C9", stackId: "a" },
      { name: "expenses", color: "#B8EB9E", stackId: "a" },
    ],
  });

  const analyticsChart = useChart({
    data: [
      { revenue: 0, expenses: 0, month: "Mon" },
      { revenue: 15, expenses: 5, month: "Tue" },
      { revenue: 27, expenses: 15, month: "Wed" },
      { revenue: 88, expenses: 30, month: "Thur" },
      { revenue: 25, expenses: 62, month: "Fri" },
      { revenue: 90, expenses: 25, month: "Sat" },
      { revenue: 90, expenses: 6, month: "Sun" },
    ],
    series: [
      { name: "revenue", color: "#328299" },
      { name: "expenses", color: "#B8EB9E" },
    ],
  });

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
      <Flex justifyContent={"space-between"} pb={8}>
        <Card.Root border={"1px solid"} borderColor={"gray.200"} minW={"470px"}>
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
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} pb={8}>
        <Flex>
          <Card.Root
            bg={"#ffffff"}
            rounded={"md"}
            variant={"subtle"}
            border={"2px solid"}
            borderColor={"gray.200"}
            minW={"75vh"}
          >
            <Card.Header>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Card.Title fontWeight={"semibold"} color={"black"}>
                  Statistics
                </Card.Title>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      color={"black"}
                      _hover={{ color: "white" }}
                      rounded={"xl"}
                      borderColor={"gray.200"}
                    >
                      <FaRegCalendarDays />
                      19 Aug - 25 Aug
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
            </Card.Header>
            <Card.Body pl={0}>
              <Chart.Root maxH="xs" chart={statisticsChart}>
                <BarChart data={statisticsChart.data} barSize={15}>
                  <CartesianGrid
                    stroke={"black"}
                    vertical={false}
                    opacity={0.1}
                  />
                  <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey={statisticsChart.key("type")}
                    tick={{ dy: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 400]}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    cursor={{ fill: "none" }}
                    animationDuration={100}
                    content={<Chart.Tooltip />}
                  />
                  <Legend content={<Chart.Legend />} align="right" />
                  {statisticsChart.series.map((item, index) =>
                    index !== statisticsChart.series.length - 1 ? (
                      <Bar
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={statisticsChart.key(item.name)}
                        fill={statisticsChart.color(item.color)}
                        stackId={item.stackId}
                      />
                    ) : (
                      <Bar
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={statisticsChart.key(item.name)}
                        fill={statisticsChart.color(item.color)}
                        radius={[10, 10, 0, 0]}
                        stackId={item.stackId}
                      />
                    )
                  )}
                </BarChart>
              </Chart.Root>
            </Card.Body>
          </Card.Root>
        </Flex>

        <Flex>
          <Card.Root
            bg={"white"}
            rounded={"md"}
            variant={"subtle"}
            border={"2px solid"}
            borderColor={"gray.200"}
            minW={"65vh"}
          >
            <Card.Header>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Card.Title color={"black"} fontWeight={"semibold"}>
                  Analytics
                </Card.Title>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      color={"black"}
                      _hover={{ color: "white" }}
                      rounded={"xl"}
                      borderColor={"gray.200"}
                    >
                      <FaRegCalendarDays />
                      19 Aug - 25 Aug
                      <Icon>
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
            </Card.Header>
            <Card.Body>
              <Flex gap={12} mb={4}>
                <Flex alignItems={"center"} gap={3}>
                  <IconButton
                    bg={"#d5e7ec71"}
                    pointerEvents={"none"}
                    rounded={"xl"}
                  >
                    <BsArrowUp color="#328299" />
                  </IconButton>
                  <Text color={"black"} textStyle={"lg"}>
                    $5.890
                  </Text>
                </Flex>
                <Flex alignItems={"center"} gap={3}>
                  <IconButton
                    bg={"#ecf3e79c"}
                    pointerEvents={"none"}
                    rounded={"xl"}
                  >
                    <BsArrowDown color="#b6eb8e" />
                  </IconButton>
                  <Text color={"black"} textStyle={"lg"}>
                    $1.750
                  </Text>
                </Flex>
              </Flex>
              <Chart.Root maxH={"xs"} h={"265px"} chart={analyticsChart}>
                <AreaChart
                  data={analyticsChart.data}
                  margin={{ left: 15, right: 15 }}
                  height={"100px"}
                >
                  <CartesianGrid
                    stroke={analyticsChart.color("#e4e8edff")}
                    horizontal={false}
                  />
                  <XAxis
                    axisLine={false}
                    dataKey={analyticsChart.key("month")}
                    tickLine={false}
                    stroke={analyticsChart.color("#e4e8edff")}
                  />
                  <ReferenceLine
                    y={0}
                    stroke={analyticsChart.color("#e4e8edff")}
                  />
                  <Tooltip
                    animationDuration={100}
                    cursor={false}
                    content={<Chart.Tooltip />}
                  />
                  {analyticsChart.series.map((item) => (
                    <>
                      <Area
                        type={"linear"}
                        dataKey={analyticsChart.key(item.name)}
                        stroke="none"
                        fill={analyticsChart.color(item.color)}
                        color="black"
                        opacity={"0.2"}
                      />
                      <Line
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={analyticsChart.key(item.name)}
                        stroke={analyticsChart.color(item.color)}
                        strokeWidth={2}
                        fill={analyticsChart.color("white")}
                        opacity={analyticsChart.getSeriesOpacity(item.name)}
                      />
                    </>
                  ))}
                </AreaChart>
              </Chart.Root>
            </Card.Body>
          </Card.Root>
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
