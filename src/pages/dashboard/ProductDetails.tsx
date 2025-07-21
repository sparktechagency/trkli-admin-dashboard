import { Button, Checkbox, ConfigProvider, Input, Select, Table } from 'antd';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import ProductItemModal from '../../components/modals/ProductItemModal';

type ClassData = {
    id: string;
    className: string;
    classImage: string;
    description: string;
    features: string[];
    price: number;
};
const ProductDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<ClassData | null>(null);
    const [activeTab, setActiveTab] = useState('Products');

    const brandOptions = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' },
    ];

    const categoryOption = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' },
    ]

    const statusOption = [
        { value: "active", label: "Active" },
        { value: "unavailable", label: "Unavailable" },
        { value: "short stock", label: "Short Stock" },
    ]


    const productsData = [
        {
            id: '001',
            productName: 'Luggage',
            category: 'Trikli Products',
            brand: 'Trikli',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '002',
            productName: 'Luggage',
            category: 'Luggage',
            brand: 'Gucci',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '00',
            status: 'Unavailable',
        },
        {
            id: '003',
            productName: 'Luggage',
            category: 'Bags',
            brand: 'Hermes',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '004',
            productName: 'Luggage',
            category: 'Tags',
            brand: 'YSL',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '005',
            productName: 'Luggage',
            category: 'Briefcase',
            brand: 'Chanel',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '00',
            status: 'Unavailable',
        },
        {
            id: '006',
            productName: 'Luggage',
            category: 'Baby',
            brand: 'Trikli',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '007',
            productName: 'Luggage',
            category: 'Luggage',
            brand: 'Dior',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '07',
            status: 'Short Stock',
        },
        {
            id: '008',
            productName: 'Luggage',
            category: 'Baby',
            brand: 'Prada',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '009',
            productName: 'Luggage',
            category: 'Baby',
            brand: 'Trikli',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '50',
            status: 'Active',
        },
        {
            id: '010',
            productName: 'Luggage',
            category: 'Luggage',
            brand: 'Trikli',
            regularPrice: '$20.30',
            offerPrice: '$16.30',
            stock: '00',
            status: 'Unavailable',
        },
    ];

    const columns = [
        {
            title: <Checkbox />,
            dataIndex: 'checkbox',
            key: 'checkbox',
            render: () => <Checkbox />,
            width: 50,
        },
        {
            title: 'S No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Regular Price',
            dataIndex: 'regularPrice',
            key: 'regularPrice',
        },
        {
            title: 'Offer Price',
            dataIndex: 'offerPrice',
            key: 'offerPrice',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color = '';
                switch (status) {
                    case 'Active': color = 'green'; break;
                    case 'Unavailable': color = 'red'; break;
                    case 'Short Stock': color = 'orange'; break;
                }
                return <span style={{ color }}>{status}</span>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            width: "150px",
            render: (_: any, record: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                    <button onClick={() => { setIsOpen(true); setEditData(record) }}>
                        <AiOutlineEdit className="text-xl text-primary" />
                    </button>
                    <button>
                        <IoTrashOutline className="text-xl text-red-500" />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center mb-5">

                <div className='flex items-center gap-4'>
                    <div className="flex  h-[50px] bg-white rounded-full shadow p-1">
                        <button
                            className={`px-4 py-2 text-sm   ${activeTab === 'Device' ? 'text-[#FEFEFE] bg-[#CB8AFF] rounded-full  ' : 'text-[#929292]'
                                }`}
                            onClick={() => setActiveTab('Device')}
                        >
                            Device
                        </button>
                        <button
                            className={`px-4 py-2   ${activeTab === 'Products' ? 'text-[#FEFEFE] bg-[#CB8AFF] rounded-full  ' : ''
                                }`}
                            onClick={() => setActiveTab('Products')}
                        >
                            Products
                        </button>
                    </div>

                    <h1 className="text-2xl text-[#080808] font-medium">{activeTab} Details</h1>
                </div>


                <div className="flex items-center gap-2  ">
                    <Input
                        style={{
                            width: 305,
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
                        <Select placeholder="Brand" style={{
                            width: 160,
                            height: 45,
                            borderRadius: "50px",
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: "none"
                        }} options={brandOptions} />
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select placeholder="Category" style={{
                            width: 160,
                            height: 45,
                            borderRadius: "50px",
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: "none"
                        }} options={categoryOption} />
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select placeholder="Status" style={{
                            width: 160,
                            height: 45,
                            borderRadius: "50px",
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: "none"
                        }} options={statusOption} />
                    </ConfigProvider>

                    <Button
                        onClick={() => setIsOpen(true)}
                        style={{
                            height: 45,
                            borderRadius: 50
                        }}
                        type="primary"
                    >
                        +  Add Item
                    </Button>

                </div>
            </div>

            <div>
                <Table columns={columns} dataSource={productsData} pagination={{ pageSize: 10 }} />
            </div>
            <ProductItemModal isOpen={isOpen} setIsOpen={setIsOpen} editData={editData} setEditData={setEditData} />
        </div>
    );
};

export default ProductDetails;
