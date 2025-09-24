import { Button, Card, Flex, Icon, Menu, Portal } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatisticsChartCard = () => {
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

  return (
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
            <CartesianGrid stroke={"black"} vertical={false} opacity={0.1} />
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
  );
};

export default StatisticsChartCard;
