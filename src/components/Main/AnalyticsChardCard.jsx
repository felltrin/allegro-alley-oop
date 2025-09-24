import {
  Button,
  Card,
  Flex,
  IconButton,
  Icon,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
} from "recharts";

const AnalyticsChardCard = () => {
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

  return (
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
            <IconButton bg={"#d5e7ec71"} pointerEvents={"none"} rounded={"xl"}>
              <BsArrowUp color="#328299" />
            </IconButton>
            <Text color={"black"} textStyle={"lg"}>
              $5.890
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={3}>
            <IconButton bg={"#ecf3e79c"} pointerEvents={"none"} rounded={"xl"}>
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
            <ReferenceLine y={0} stroke={analyticsChart.color("#e4e8edff")} />
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
  );
};

export default AnalyticsChardCard;
