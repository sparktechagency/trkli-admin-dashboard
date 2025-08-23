import { ConfigProvider, DatePicker } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useSellingStatisticsQuery } from '../../../redux/features/statisticsApi';

const SellingChart = () => {
    const { data } = useSellingStatisticsQuery({});
    const chartData = data?.data || [];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-lg font-medium">Selling Statistics</h1>
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
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="sell"
                        stroke="#8F00FF"
                        // fill='#6C4A00'
                        strokeWidth={2}
                        dot={{ fill: '#8F00FF', stroke: '#8F00FF', strokeWidth: 2, r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SellingChart;
