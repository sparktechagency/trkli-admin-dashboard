import { Select } from 'antd';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
const { Option } = Select;
const EarningChart = () => {
    interface UserData {
        month: string;
        income: number;
        profit: number;
    }

    const data: UserData[] = [
        { month: 'February', income: 120, profit: 30 },
        { month: 'March', income: 200, profit: 45 },
        { month: 'April', income: 150, profit: 40 },
        { month: 'May', income: 220, profit: 50 },
        { month: 'June', income: 180, profit: 35 },
        { month: 'July', income: 300, profit: 70 },
        { month: 'August', income: 250, profit: 60 },
        { month: 'September', income: 270, profit: 80 },
        { month: 'October', income: 320, profit: 90 },
        { month: 'November', income: 280, profit: 75 },
        { month: 'December', income: 350, profit: 100 },
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-lg font-medium">Earning  Statistics</h1>
                <Select defaultValue="2024" className="w-32 h-[35px]">
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#CB8AFF" />
                    <Bar dataKey="profit" fill="#8F00FF" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningChart;
