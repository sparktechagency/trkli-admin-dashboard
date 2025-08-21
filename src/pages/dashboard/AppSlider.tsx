import { Button, DatePicker, Flex, Input, Table } from 'antd';
import { useState } from 'react';
import { IoLockClosedOutline, IoLockOpenOutline, IoTrashOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { useDeleteBannerMutation, useGetBannerQuery } from '../../redux/features/bannerApi';
import { imageUrl } from '../../redux/api/baseApi';
import { BiEdit } from 'react-icons/bi';
import DeleteModal from '../../components/modals/DeleteModal';
import toast from 'react-hot-toast';
import AppSliderModal from '../../components/modals/AppSliderModal';

type contentType = {
    id: string;
    contentTitle: string;
    contentImage: string;
    url: string;
};

const AppSlider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<contentType | null>(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string>('');

    const { data, refetch } = useGetBannerQuery({});
    const bannerData = data?.data || [];
    const [deleteBanner] = useDeleteBannerMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteBanner(id).unwrap();
            if (res?.success) {
                toast.success('Slider deleted successfully');
                setShowDelete(false);
                refetch();
            }
        } catch (error) {
            console.log('Error deleting slider:', error);
            toast.error('Failed to delete slider');
        }
    };

    const columns = [
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
            title: 'Image',
            dataIndex: 'contentImage',
            key: 'contentImage',
            render: (_: any, record: Record<string, any>) => (
                <img
                    src={
                        record?.image && record?.image.startsWith('http')
                            ? record?.image
                            : `${imageUrl}${record?.image}`
                    }
                    alt="class"
                    style={{ height: 50, objectFit: 'cover' }}
                />
            ),
            width: '300px',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '370px',
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            render: (_: any, record: Record<string, any>) => <p>{record?.product?.name}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            width: '150px',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
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
            <Flex className="my-2" vertical={false} gap={10} align="center" justify="space-between">
                <div className="w-full flex justify-between items-center mb-5">
                    <h1 className="text-2xl text-primary font-semibold">App Slider</h1>
                    <div className="flex items-center gap-2 justify-end ">
                        <div className=" flex items-center gap-2 ">
                            <p className=" cursor-pointer ">
                                {' '}
                                <IoLockOpenOutline size={24} color="#A1A1A1" />{' '}
                            </p>
                            <p className=" cursor-pointer ">
                                {' '}
                                <IoLockClosedOutline size={24} color="#A1A1A1" />{' '}
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
                                <div className="  flex items-center p-2 bg-[#F4E6FF] rounded-full">
                                    {' '}
                                    <FiSearch color="#8F00FF" size={20} />{' '}
                                </div>
                            }
                        />

                        <DatePicker
                            style={{
                                width: 160,
                                height: 46,
                                borderRadius: '50px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                            }}
                        />
                        <Button
                            onClick={() => setIsOpen(true)}
                            style={{
                                height: 45,
                                borderRadius: 50,
                            }}
                            type="primary"
                        >
                            + Add Slider
                        </Button>
                    </div>
                </div>
            </Flex>

            <div>
                <Table rowKey={'_id'} columns={columns} dataSource={bannerData} pagination={{ pageSize: 8 }} />
            </div>
            <AppSliderModal isOpen={isOpen} setIsOpen={setIsOpen} editData={editData} setEditData={setEditData} />
            <DeleteModal
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                deleteId={deleteId}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default AppSlider;
