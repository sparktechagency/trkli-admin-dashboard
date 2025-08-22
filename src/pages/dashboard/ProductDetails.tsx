import { Button, ConfigProvider, Input, Select, Table } from 'antd';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import ProductItemModal from '../../components/modals/ProductItemModal';
import { BiEdit } from 'react-icons/bi';
import type { ColumnsType } from 'antd/es/table';
import { useDeleteProductMutation, useGetProductsQuery } from '../../redux/features/productsApi';
import { imageUrl } from '../../redux/api/baseApi';
import DeleteModal from '../../components/modals/DeleteModal';
import toast from 'react-hot-toast';
import { useGetCategoriesQuery } from '../../redux/features/categoryApi';
import { useSearchParams } from 'react-router-dom';

export interface Product {
    _id: number;
    images: string[];
    name: string;
    category: { _id: string; name: string };
    price: number;
    color: string;
    // stock: number;
    status: string;
    description: string;
}

const ProductDetails = () => {
    // const limit = 8;
    // const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<Product | null>(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string>('');
    const { data: categoryRes } = useGetCategoriesQuery({});
    const categoryData = categoryRes?.data || [];
    const categories = categoryData.map((item: any) => ({
        _id: item._id,
        name: item.name,
    }));

    const [searchParams, setSearchParams] = useSearchParams();
    // const searchTerm = searchParams.get('searchTerm') || '';
    // const category = '';
    const { data, refetch } = useGetProductsQuery({});
    const productsData = data?.data || [];
    const [deleteProduct] = useDeleteProductMutation({});

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        const newParams = new URLSearchParams(searchParams);
        if (newValue) {
            newParams.set('searchTerm', newValue);
        } else {
            newParams.delete('searchTerm');
        }
        setSearchParams(newParams);
    };

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteProduct(id).unwrap();
            if (res?.success) {
                toast.success('Product deleted successfully');
                setShowDelete(false);
                refetch();
            }
        } catch (error) {
            console.log('Error deleting product:', error);
            toast.error('Failed to delete product');
        }
    };

    const columns: ColumnsType<Product> = [
        // {
        //     title: <Checkbox />,
        //     dataIndex: 'checkbox',
        //     key: 'checkbox',
        //     render: () => <Checkbox />,
        //     width: 50,
        // },
        {
            title: 'S No',
            key: 'serial',
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (_: string, record: Record<string, any>) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}
                    >
                        <img
                            src={
                                record?.images?.[0] && record?.images?.[0].startsWith('http')
                                    ? record?.images?.[0]
                                    : record?.images?.[0]
                                    ? `${imageUrl}${record?.images?.[0]}`
                                    : '/default-avatar.jpg'
                            }
                            className="w-8 h-8 object-cover rounded-full"
                        />

                        <p
                            style={{
                                letterSpacing: 0.4,
                                fontSize: '#666666',
                                fontWeight: '400',
                            }}
                        >
                            {record?.name}
                        </p>
                    </div>
                );
            },
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (_: any, record: Record<string, any>) => {
                return <span>{record.category?.name}</span>;
            },
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     align: 'center',
        //     render: (_: String, record: Record<string, any>) => {
        //         let status = '';
        //         let statusClass = '';

        //         if (record.stock === 0) {
        //             status = 'Stock Out';
        //             statusClass = 'bg-[#FC605726] text-[#FC6057]';
        //         } else if (record.stock < 10) {
        //             status = 'Short Stock';
        //             statusClass = 'bg-[#FBC02D33] text-[#FBC02D]';
        //         } else {
        //             status = 'In Stock';
        //             statusClass = 'bg-[#00800033] text-[#2E7D32]';
        //         }

        //         return (
        //             <div className="pr-4 flex justify-center">
        //                 <p className={`w-32 rounded-md text-base py-[2px] capitalize ${statusClass}`}>{status}</p>
        //             </div>
        //         );
        //     },
        // },
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
                    <button
                        onClick={() => {
                            setShowDelete(true);
                            setDeleteId(record._id);
                        }}
                    >
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
                    {/* <div className="flex  h-[50px] bg-white rounded-full shadow p-1">
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
                    </div> */}

                    <h1 className="text-2xl text-[#080808] font-medium">Product Details</h1>
                </div>

                <div className="flex items-center gap-2  ">
                    <Input
                        onChange={handleSearchChange}
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

                    {/* <ConfigProvider
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
                    </ConfigProvider> */}

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 50,
                            },
                        }}
                    >
                        <Select placeholder="Select Category" style={{ height: 42 }}>
                            <Select.Option value="">All Categories</Select.Option>
                            {categories.map((cat: any) => (
                                <Select.Option key={cat._id} value={cat._id}>
                                    {cat.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </ConfigProvider>

                    {/* <ConfigProvider
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
                    </ConfigProvider> */}

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
                <Table rowKey="_id" columns={columns} dataSource={productsData} pagination={{ pageSize: 10 }} />
            </div>
            <ProductItemModal
                refetch={refetch}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                editData={editData}
                setEditData={setEditData}
            />
            <DeleteModal
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                deleteId={deleteId}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default ProductDetails;
