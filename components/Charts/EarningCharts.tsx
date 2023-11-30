import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Sat',
        sales: 3000,
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Sun',
        sales: 1000,
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mon',
        uv: 2000,

        sales: 5000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Tue',
        uv: 2780,
        sales: 2000,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Wed',
        uv: 1890,
        sales: 3000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Thu',
        uv: 2390,
        sales: 2000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Fri',
        uv: 3490,
        sales: 2780,
        pv: 4300,
        amt: 2100,
    },
];

const EarningChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="rgba(59,130,246,0.8)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(59,130,246, 0)"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={5}
                    padding={{ left: 10 }}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickCount={10}
                    tickMargin={5}
                    padding={{ bottom: 10 }}
                />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="sales"
                    activeDot={{ r: 5 }}
                    stroke="rgba(59,130,246, 1)"
                    strokeWidth={2}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default EarningChart;
