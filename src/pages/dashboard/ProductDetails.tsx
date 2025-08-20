import { Button, Checkbox, ConfigProvider, Input, Select, Table } from 'antd';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import ProductItemModal from '../../components/modals/ProductItemModal';
import { BiEdit } from 'react-icons/bi';
import type { ColumnsType } from 'antd/es/table';

export interface Product {
    id: number;
    productName: string;
    category: string;
    brand: string;
    regularPrice: number;
    offerPrice: number;
    stock: number;
    status: string;
}

const ProductDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<Product | null>(null);
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
    ];

    const statusOption = [
        { value: 'active', label: 'Active' },
        { value: 'unavailable', label: 'Unavailable' },
        { value: 'short stock', label: 'Short Stock' },
    ];

    const productsData = [
        {
            id: 1,
            productName: 'Wireless Mouse',
            category: 'Electronics',
            brand: 'Logitech',
            regularPrice: 25,
            offerPrice: 20,
            stock: 15,
            status: 'active',
        },
        {
            id: 2,
            productName: 'Gaming Keyboard',
            category: 'Electronics',
            brand: 'Razer',
            regularPrice: 120,
            offerPrice: 100,
            stock: 8,
            status: 'active',
        },
        {
            id: 3,
            productName: 'Bluetooth Speaker',
            category: 'Electronics',
            brand: 'JBL',
            regularPrice: 60,
            offerPrice: 50,
            stock: 0,
            status: 'inactive',
        },
        {
            id: 4,
            productName: 'Running Shoes',
            category: 'Footwear',
            brand: 'Nike',
            regularPrice: 80,
            offerPrice: 70,
            stock: 25,
            status: 'active',
        },
        {
            id: 5,
            productName: 'Leather Wallet',
            category: 'Accessories',
            brand: 'Fossil',
            regularPrice: 45,
            offerPrice: 35,
            stock: 5,
            status: 'active',
        },
        {
            id: 6,
            productName: 'Smart Watch',
            category: 'Electronics',
            brand: 'Apple',
            regularPrice: 300,
            offerPrice: 280,
            stock: 12,
            status: 'active',
        },
        {
            id: 7,
            productName: 'Sunglasses',
            category: 'Accessories',
            brand: 'Ray-Ban',
            regularPrice: 150,
            offerPrice: 130,
            stock: 2,
            status: 'active',
        },
        {
            id: 8,
            productName: 'Denim Jacket',
            category: 'Clothing',
            brand: "Levi's",
            regularPrice: 90,
            offerPrice: 75,
            stock: 20,
            status: 'active',
        },
        {
            id: 9,
            productName: 'Laptop Backpack',
            category: 'Accessories',
            brand: 'HP',
            regularPrice: 50,
            offerPrice: 40,
            stock: 0,
            status: 'inactive',
        },
        {
            id: 10,
            productName: 'Action Camera',
            category: 'Electronics',
            brand: 'GoPro',
            regularPrice: 250,
            offerPrice: 220,
            stock: 7,
            status: 'active',
        },
        {
            id: 11,
            productName: 'Office Chair',
            category: 'Furniture',
            brand: 'Ikea',
            regularPrice: 200,
            offerPrice: 180,
            stock: 10,
            status: 'active',
        },
        {
            id: 12,
            productName: 'Electric Kettle',
            category: 'Home Appliances',
            brand: 'Philips',
            regularPrice: 40,
            offerPrice: 35,
            stock: 18,
            status: 'active',
        },
        {
            id: 13,
            productName: 'Yoga Mat',
            category: 'Fitness',
            brand: 'Reebok',
            regularPrice: 25,
            offerPrice: 20,
            stock: 0,
            status: 'inactive',
        },
        {
            id: 14,
            productName: 'Coffee Maker',
            category: 'Home Appliances',
            brand: 'Breville',
            regularPrice: 120,
            offerPrice: 100,
            stock: 3,
            status: 'active',
        },
        {
            id: 15,
            productName: 'Tablet',
            category: 'Electronics',
            brand: 'Samsung',
            regularPrice: 220,
            offerPrice: 200,
            stock: 14,
            status: 'active',
        },
        {
            id: 16,
            productName: 'Fitness Tracker',
            category: 'Electronics',
            brand: 'Fitbit',
            regularPrice: 100,
            offerPrice: 85,
            stock: 6,
            status: 'active',
        },
        {
            id: 17,
            productName: 'Gaming Chair',
            category: 'Furniture',
            brand: 'DXRacer',
            regularPrice: 350,
            offerPrice: 300,
            stock: 0,
            status: 'inactive',
        },
        {
            id: 18,
            productName: 'Winter Coat',
            category: 'Clothing',
            brand: 'North Face',
            regularPrice: 180,
            offerPrice: 150,
            stock: 22,
            status: 'active',
        },
        {
            id: 19,
            productName: 'Wireless Earbuds',
            category: 'Electronics',
            brand: 'Sony',
            regularPrice: 120,
            offerPrice: 100,
            stock: 9,
            status: 'active',
        },
        {
            id: 20,
            productName: 'Desk Lamp',
            category: 'Home Appliances',
            brand: 'Philips',
            regularPrice: 30,
            offerPrice: 25,
            stock: 11,
            status: 'active',
        },
    ];

    const columns: ColumnsType<Product> = [
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
            align: 'center',
            render: (_: String, record: Record<string, any>) => {
                let status = '';
                let statusClass = '';

                if (record.stock === 0) {
                    status = 'Stock Out';
                    statusClass = 'bg-[#FC605726] text-[#FC6057]';
                } else if (record.stock < 10) {
                    status = 'Short Stock';
                    statusClass = 'bg-[#FBC02D33] text-[#FBC02D]';
                } else {
                    status = 'In Stock';
                    statusClass = 'bg-[#00800033] text-[#2E7D32]';
                }

                return (
                    <div className="pr-4 flex justify-center">
                        <p className={`w-32 rounded-md text-base py-[2px] capitalize ${statusClass}`}>{status}</p>
                    </div>
                );
            },
        },
        {
            title: 'Action',
            key: 'action',
            width: '150px',
            render: (_: any, record: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            setIsOpen(true);
                            setEditData(record);
                        }}
                    >
                        <BiEdit className="text-2xl text-primary" />
                    </button>
                    <button>
                        <IoTrashOutline className="text-2xl text-red-500" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-4">
                    <div className="flex  h-[50px] bg-white rounded-full shadow p-1">
                        <button
                            className={`px-4 py-2 text-sm   ${
                                activeTab === 'Device' ? 'text-[#FEFEFE] bg-[#CB8AFF] rounded-full  ' : 'text-[#929292]'
                            }`}
                            onClick={() => setActiveTab('Device')}
                        >
                            Device
                        </button>
                        <button
                            className={`px-4 py-2   ${
                                activeTab === 'Products' ? 'text-[#FEFEFE] bg-[#CB8AFF] rounded-full  ' : ''
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
                            borderRadius: '50px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                        }}
                        placeholder="Search"
                        prefix={
                            <div className="  flex items-center p-2 bg-[#F4E6FF] rounded-full">
                                {' '}
                                <FiSearch color="#8F00FF" size={20} />{' '}
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
                            placeholder="Brand"
                            style={{
                                width: 160,
                                height: 45,
                                borderRadius: '50px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                            }}
                            options={brandOptions}
                        />
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select
                            placeholder="Category"
                            style={{
                                width: 160,
                                height: 45,
                                borderRadius: '50px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                            }}
                            options={categoryOption}
                        />
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select
                            placeholder="Status"
                            style={{
                                width: 160,
                                height: 45,
                                borderRadius: '50px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                            }}
                            options={statusOption}
                        />
                    </ConfigProvider>

                    <Button
                        onClick={() => setIsOpen(true)}
                        style={{
                            height: 45,
                            borderRadius: 50,
                        }}
                        type="primary"
                    >
                        + Add Item
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
