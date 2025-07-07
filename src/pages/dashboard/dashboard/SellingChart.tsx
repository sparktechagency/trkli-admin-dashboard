import { Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const { Option } = Select;
const data = [
    { name: 'Jan', device: 5000, product: 3000},
    { name: 'Feb', products: 12000, device: 13000  },
    { name: 'Mar', products: 10000, device: 12000  },
    { name: 'Apr', products: 22314, device: 22300  },
    { name: 'May', products: 16000, device: 16000  },
    { name: 'Jun', products: 15000, device: 12000  },
    { name: 'Jul', products: 11000, device: 11000  },
    { name: 'Aug', products: 17000, device: 13000  },
    { name: 'Sep', products: 9000, device: 9040  },
    { name: 'Oct', products: 15000, device: 13000  },
    { name: 'Nov', products: 14000, device: 14400  },
    { name: 'Dec', products: 17000, device: 17400  },
];

const SellingChart = () => {
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
                        dataKey="device"
                        stroke="#f4e6ff" 
                        // fill='#6C4A00' 
                        strokeWidth={2}
                        dot={{ fill: '#8F00FF', stroke: '#8F00FF', strokeWidth: 2, r: 4 }}
                    /> 

                    <Line
                        type="monotone"
                        dataKey="products"
                        stroke="#CB8AFF" 
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
