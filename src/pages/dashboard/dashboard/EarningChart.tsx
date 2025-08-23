import { ConfigProvider, DatePicker } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useSubscriptionStatisticsQuery } from '../../../redux/features/statisticsApi';
const EarningChart = () => {
    const { data } = useSubscriptionStatisticsQuery({});
    const chartData = data?.data || [];
    console.log(chartData);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-lg font-medium">Subscription Statistics</h1>
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
                <BarChart data={chartData} barSize={10}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#8F00FF" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningChart;
