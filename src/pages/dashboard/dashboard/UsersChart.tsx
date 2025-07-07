import { Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const { Option } = Select;
const data = [
    { name: 'Jan', users: 8000 },
    { name: 'Feb', users: 12000 },
    { name: 'Mar', users: 10000 },
    { name: 'Apr', users: 22314 },
    { name: 'May', users: 16000 },
    { name: 'Jun', users: 15000 },
    { name: 'Jul', users: 11000 },
    { name: 'Aug', users: 17000 },
    { name: 'Sep', users: 9000 },
    { name: 'Oct', users: 15000 },
    { name: 'Nov', users: 14000 },
    { name: 'Dec', users: 17000 },
];

const UsersChart = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-lg font-medium">User Statistics</h1>
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
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[5000, 25000]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#8F00FF" 
                        // fill='#6C4A00' 
                        strokeWidth={2}
                        dot={{ fill: '#f4e6ff', stroke: '#8F00FF', strokeWidth: 2, r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UsersChart;
