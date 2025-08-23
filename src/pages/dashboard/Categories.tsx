import { Button, Table } from 'antd';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { BiEdit } from 'react-icons/bi';
import type { ColumnsType } from 'antd/es/table';
import { imageUrl } from '../../redux/api/baseApi';
import DeleteModal from '../../components/modals/DeleteModal';
import toast from 'react-hot-toast';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../redux/features/categoryApi';
import CategoryModal from '../../components/modals/CategoryModal';

export interface category {
    _id: number;
    image: string;
    name: string;
}

const Categories = () => {
    // const limit = 8;
    // const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<category | null>(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string>('');
    const { data: categoryRes, refetch } = useGetCategoriesQuery({});
    const categoryData = categoryRes?.data || [];
    console.log(categoryData);

    const [deleteCategory] = useDeleteCategoryMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteCategory(id).unwrap();
            if (res?.success) {
                toast.success('Category deleted successfully');
                setShowDelete(false);
                refetch();
            }
        } catch (error) {
            console.log('Error deleting category:', error);
            toast.error('Failed to delete category');
        }
    };

    const columns: ColumnsType<category> = [
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
            title: 'Category Name',
            dataIndex: 'category',
            key: 'category',
            render: (_: any, record: Record<string, any>) => {
                return <span>{record?.name}</span>;
            },
        },
        {
            title: 'Category Image',
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
                                record?.image && record?.image.startsWith('http')
                                    ? record?.image
                                    : record?.image
                                    ? `${imageUrl}${record?.image}`
                                    : '/default-avatar.jpg'
                            }
                            className="w-12 h-12 object-cover"
                        />
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
                    <h1 className="text-2xl text-[#080808] font-medium">Categories</h1>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => setIsOpen(true)}
                        style={{
                            height: 45,
                            borderRadius: 50,
                        }}
                        type="primary"
                    >
                        + Add Category
                    </Button>
                </div>
            </div>

            <div>
                <Table rowKey="_id" columns={columns} dataSource={categoryData} pagination={false} />
            </div>
            <CategoryModal
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

export default Categories;
