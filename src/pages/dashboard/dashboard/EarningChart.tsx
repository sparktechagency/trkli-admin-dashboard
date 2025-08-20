import { ConfigProvider, DatePicker } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
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
                <h1 className="text-lg font-medium">Earning Statistics</h1>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#8F00FF',
                        },
                    }}
                >
                    <DatePicker
                        className="!cursor-pointer"
                        picker="year"
                        suffixIcon={<FaChevronDown className="text-gray-500 text-sm" />}
                        // onChange={(_, dateString) => {
                        //     setStudentYear(dateString);
                        // }}
                    />
                </ConfigProvider>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barSize={10}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#CB8AFF" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="profit" fill="#8F00FF" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningChart;
