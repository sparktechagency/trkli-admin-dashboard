import { Table, Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import { useChangeOrderStatusMutation, useGetOrderListQuery } from '../../redux/features/orderListApi';
import { useState } from 'react';
import SellingDetailsModal from '../../components/modals/SellingDetailsModal';
import toast from 'react-hot-toast';

// Define the status type
type Status = 'pending' | 'processing' | 'OnWay' | 'cancelled' | 'completed';

const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'OnWay', label: 'OnWay' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'completed', label: 'Delivered' },
];

const SellingDetails = () => {
    const [sellingData, setSellingData] = useState(null);
    const { data: orderList, refetch } = useGetOrderListQuery({});
    const orders = orderList?.data;

    const [changeOrderStatus] = useChangeOrderStatusMutation();

    // const productOptions = [
    //     { value: 'product1', label: 'Product 1' },
    //     { value: 'product2', label: 'Product 2' },
    //     { value: 'product3', label: 'Product 3' },
    // ];

    const statusColorMap: Record<Status, { color: string; bg: string }> = {
        pending: { color: '#D48806', bg: '#F7F1CC' },
        processing: { color: '#1890FF', bg: '#D9EEFF' },
        OnWay: { color: '#13C2C2', bg: '#CCFAF9' },
        cancelled: { color: '#FF4D4F', bg: '#FFD8D7' },
        completed: { color: '#52C41A', bg: '#D9F2CD' },
    };

    const columns = [
        {
            title: 'Order Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Product Name',
            dataIndex: 'items',
            key: 'items',
            render: (items: { product: { name: string } }[]) => items?.map((item) => item.product?.name).join(', '),
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
            render: (_: any, record: any) => <p className="text-[#080808]">{record?.user?.name}</p>,
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Delivery Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'deliveryStatus',
        //     key: 'status',
        //     render: (_: any, record: any) => {
        //         const currentStyle = statusColorMap[record.status as Status] || {
        //             color: '#595959',
        //             bg: '#FAFAFA',
        //         };

        //         return (
        //             <p
        //                 style={{
        //                     backgroundColor: currentStyle.bg,
        //                     color: currentStyle.color,
        //                     fontWeight: 400,
        //                     borderRadius: 6,
        //                     fontSize: 13,
        //                     width: 120,
        //                     height: 28,
        //                     padding: '0 8px',
        //                     border: 'none',
        //                     cursor: 'default',
        //                     textAlign: 'center',
        //                     lineHeight: '28px',
        //                     margin: 0,
        //                 }}
        //             >
        //                 {statusOptions.find((option) => option.value === record?.status)?.label || record?.status}
        //             </p>
        //         );
        //     },
        // },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: Status, record: any) => {
                const currentStyle = statusColorMap[status] || {
                    color: '#595959',
                    bg: '#FAFAFA',
                };

                return (
                    <select
                        value={status}
                        onChange={async (e) => {
                            const newStatus = e.target.value;

                            const data = {
                                id: record._id,
                                status: newStatus,
                            };
                            try {
                                const res = await changeOrderStatus({ data }).unwrap();
                                if (res?.success) {
                                    refetch();
                                    toast.success(res?.message);
                                }
                            } catch (error: any) {
                                console.error('Failed to update status', error);
                                toast.error(error?.data?.message);
                            }
                        }}
                        style={{
                            backgroundColor: currentStyle.bg,
                            color: currentStyle.color,
                            fontWeight: 500,
                            borderRadius: 6,
                            fontSize: 13,
                            width: 120,
                            height: 28,
                            padding: '0 8px',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'center',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            outline: 'none',
                        }}
                    >
                        {statusOptions.map(({ value, label }) => (
                            <option key={value} value={value} style={{ textAlign: 'center' }}>
                                {label}
                            </option>
                        ))}
                    </select>
                );
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-2">
                    <p onClick={() => setSellingData(record)}>
                        <BsInfoCircle size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} />
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

                    {/* <ConfigProvider
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
                    </ConfigProvider> */}
                </div>
            </div>

            <Table
                rowKey="_id"
                columns={columns}
                dataSource={orders}
                pagination={{ pageSize: 12 }}
                rowClassName="hover:bg-gray-100"
            />
            <SellingDetailsModal sellingData={sellingData} setSellingData={setSellingData} />
        </div>
    );
};

export default SellingDetails;
