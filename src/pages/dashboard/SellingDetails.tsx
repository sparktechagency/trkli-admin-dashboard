'use client';

import { Table, Input, DatePicker,  Select, ConfigProvider } from 'antd';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const data = [
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
        deliveryStatus: 'Pending',
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
        deliveryStatus: 'Complete',
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
        deliveryStatus: 'Shipped',
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
        deliveryStatus: 'Pending',
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
        deliveryStatus: 'Complete',
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
        deliveryStatus: 'Pending',
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
        deliveryStatus: 'Shipped',
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
        deliveryStatus: 'Pending',
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
        deliveryStatus: 'Pending',
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
        deliveryStatus: 'Shipped',
    },
];


const SellingDetails = () => {
    const navigate = useNavigate(); 

    const productOptions = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' },
    ];

const columns = [
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
        title: 'Delivery Status',
        dataIndex: 'deliveryStatus',
        key: 'deliveryStatus',
        render: (status: string) => {
            let color = '';
            switch (status) {
                case 'Pending': color = 'red'; break;
                case 'Complete': color = 'green'; break;
                case 'Shipped': color = 'orange'; break;
            }
            return <span style={{ color }}>{status}</span>;
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <div className='flex items-center gap-2'>
                <p onClick={()=>navigate("/order-details")}><BsInfoCircle size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} /></p>
                <p><IoLockClosedOutline size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} /></p>
            </div>
        ),
    },
];

    return (
        <div>
            <div className="flex justify-between items-center mb-5">

                <h1 className="text-2xl text-[#080808] font-medium">Selling Details</h1>

                <div className="flex items-center gap-2 justify-end ">
                    <div className=' flex items-center gap-2 '>
                        <p className=' cursor-pointer '> <IoLockOpenOutline size={24} color='#A1A1A1' /> </p>
                        <p className=' cursor-pointer '> <IoLockClosedOutline size={24} color='#A1A1A1' /> </p>
                    </div>
                    <Input
                        style={{
                            width: 335,
                            height: 46,
                            borderRadius: "50px",
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: "none"
                        }}
                        placeholder="Search"
                        prefix={<div className='  flex items-center p-2 bg-[#F4E6FF] rounded-full'> <FiSearch color="#8F00FF" size={20} /> </div>}
                    />

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select placeholder="Product" style={{
                            width: 160,
                            height: 46,
                            borderRadius: "50px",
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',                         
                            border: "none"
                        }} options={productOptions} />
                    </ConfigProvider>


                    <DatePicker style={{
                        width: 160,
                        height: 46,
                        borderRadius: "50px",
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        border: "none"
                    }} />

                </div>
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 12 }}
                rowClassName="hover:bg-gray-100"
            />
        </div>
    );
};

export default SellingDetails;
