'use client';

import { Table, Input, DatePicker, Select, ConfigProvider, Checkbox } from 'antd';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// Define the status type
type Status = 'pending' | 'packing' | 'shipping' | 'cancelled' | 'delivered';

// Define the data type for clarity
interface Order {
    key: string;
    orderId: string;
    productName: string;
    userName: string;
    contact: string;
    deliveryAddress: string;
    deliveryDate: string;
    price: string;
    quantity: string;
    deliveryStatus: Status; // Use Status type here
}

const data: Order[] = [
    {
        key: '1',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Mr. Spatch',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'pending', // Lowercase to match Status type
    },
    {
        key: '2',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Zoya Rahman',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'delivered', // Changed to match Status type
    },
    {
        key: '3',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Aya Sadman',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'shipping',
    },
    {
        key: '4',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Mr. Spatch',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'pending',
    },
    {
        key: '5',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Mr. Spatch',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'delivered',
    },
    {
        key: '6',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Fahad Osman',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'pending',
    },
    {
        key: '7',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Mr. Spatch',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'shipping',
    },
    {
        key: '8',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Zaima Ahsan',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'pending',
    },
    {
        key: '9',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Mr. Spatch',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'pending',
    },
    {
        key: '10',
        orderId: '145818',
        productName: 'Luggage',
        userName: 'Saber Bhuyan',
        contact: '+61 2569 2569',
        deliveryAddress: '29 rue des Laitieres',
        deliveryDate: '24 May, 2020',
        price: '$09.30',
        quantity: '06',
        deliveryStatus: 'shipping',
    },
];

const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'packing', label: 'Packing' },
    { value: 'shipping', label: 'Shipping' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'delivered', label: 'Delivered' },
];

const SellingDetails = () => {
    const navigate = useNavigate();

    const productOptions = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' },
    ];

    const statusColorMap: Record<Status, { color: string; bg: string }> = {
        pending: { color: '#D48806', bg: '#F7F1CC' },
        packing: { color: '#1890FF', bg: '#D9EEFF' },
        shipping: { color: '#13C2C2', bg: '#CCFAF9' },
        cancelled: { color: '#FF4D4F', bg: '#FFD8D7' },
        delivered: { color: '#52C41A', bg: '#D9F2CD' },
    };

    const columns = [
        {
            title: <Checkbox />,
            dataIndex: 'checkbox',
            key: 'checkbox',
            render: () => <Checkbox />,
            width: 50,
        },
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress',
        },
        {
            title: 'Delivery Date',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Status',
            dataIndex: 'deliveryStatus',
            key: 'status',
            render: (status: Status) => {
                const currentStyle = statusColorMap[status] || {
                    color: '#595959',
                    bg: '#FAFAFA',
                };

                return (
                    <p
                        style={{
                            backgroundColor: currentStyle.bg,
                            color: currentStyle.color,
                            fontWeight: 400,
                            borderRadius: 6,
                            fontSize: 13,
                            width: 120,
                            height: 28,
                            padding: '0 8px',
                            border: 'none',
                            cursor: 'default',
                            textAlign: 'center',
                            lineHeight: '28px',
                            margin: 0,
                        }}
                    >
                        {statusOptions.find((option) => option.value === status)?.label || status}
                    </p>
                );
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <div className="flex items-center gap-2">
                    <p onClick={() => navigate('/order-details')}>
                        <BsInfoCircle size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} />
                    </p>
                    <p>
                        <IoLockClosedOutline size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} />
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl text-[#080808] font-medium">Selling Details</h1>

                <div className="flex items-center gap-2 justify-end">
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer">
                            <IoLockOpenOutline size={24} color="#A1A1A1" />
                        </p>
                        <p className="cursor-pointer">
                            <IoLockClosedOutline size={24} color="#A1A1A1" />
                        </p>
                    </div>
                    <Input
                        style={{
                            width: 335,
                            height: 46,
                            borderRadius: '50px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                        }}
                        placeholder="Search"
                        prefix={
                            <div className="flex items-center p-2 bg-[#F4E6FF] rounded-full">
                                <FiSearch color="#8F00FF" size={20} />
                            </div>
                        }
                    />

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select
                            placeholder="Product"
                            style={{
                                width: 160,
                                height: 46,
                                borderRadius: '50px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                            }}
                            options={productOptions}
                        />
                    </ConfigProvider>

                    <DatePicker
                        style={{
                            width: 160,
                            height: 46,
                            borderRadius: '50px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                        }}
                    />
                </div>
            </div>

            <Table columns={columns} dataSource={data} pagination={{ pageSize: 12 }} rowClassName="hover:bg-gray-100" />
        </div>
    );
};

export default SellingDetails;
