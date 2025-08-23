import { Button, Flex, Form, Input, Table } from 'antd';
import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import { imageUrl } from '../../redux/api/baseApi';
import { IoTrashOutline } from 'react-icons/io5';
import { useCreateAdminMutation, useDeleteAdminMutation, useGetAdminsQuery } from '../../redux/features/usersApi';
import DeleteModal from '../../components/modals/DeleteModal';
import toast from 'react-hot-toast';

const MakeAdmin = () => {
    const [makeAdminModal, setMakeAdminModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string>('');
    const [form] = Form.useForm();

    const { data, refetch, isLoading } = useGetAdminsQuery({});
    const adminData = data?.data;

    const [createAdmin, { isLoading: creating }] = useCreateAdminMutation();
    const [deleteAdmin] = useDeleteAdminMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteAdmin(id).unwrap();
            if (res?.success) {
                toast.success('Admin deleted successfully');
                setShowDelete(false);
                refetch();
            }
        } catch (error) {
            console.log('Error deleting admin:', error);
            toast.error('Failed to delete admin');
        }
    };

    const handleAddAdmin = async (values: any) => {
        try {
            const res = await createAdmin(values).unwrap();
            if (res?.success) {
                toast.success('Admin created successfully');
                setMakeAdminModal(false);
                form.resetFields();
                refetch();
            }
        } catch (error) {
            console.log('Error creating admin:', error);
            toast.error('Failed to create admin');
        }
    };

    const columns = [
        {
            title: 'S No',
            key: 'serial',
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: 'Admin Name',
            dataIndex: 'admin_name',
            key: 'admin_name',
            render: (_: string, record: Record<string, any>) => {
                return (
                    <div className="flex items-center gap-3">
                        <img
                            src={
                                record?.profile && record?.profile.startsWith('http')
                                    ? record?.profile
                                    : record?.profile
                                    ? `${imageUrl}${record?.profile}`
                                    : '/default-avatar.jpg'
                            }
                            className="w-8 h-8 object-cover rounded-full"
                        />
                        <p className="text-gray-600">{record?.name}</p>
                    </div>
                );
            },
        },
        {
            title: 'Admin Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_: string, record: Record<string, any>) => (
                <button
                    onClick={() => {
                        setShowDelete(true);
                        setDeleteId(record._id);
                    }}
                >
                    <IoTrashOutline className="text-2xl text-red-500" />
                </button>
            ),
        },
    ];

    const addAdminForm = (
        <Form form={form} layout="vertical" onFinish={handleAddAdmin}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
                <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}
            >
                <Input placeholder="email@gmail.com" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter a password' }]}
            >
                <Input.Password placeholder="******" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={creating} style={{ width: '100%', height: 40 }}>
                    Add Admin
                </Button>
            </Form.Item>
        </Form>
    );

    return (
        <div>
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div className="w-full flex justify-between items-center mb-5">
                    <h1 className="text-2xl text-primary font-semibold">Admin Panel</h1>
                    <Button
                        onClick={() => setMakeAdminModal(true)}
                        style={{ height: 45, borderRadius: 50 }}
                        type="primary"
                    >
                        + Add Admin
                    </Button>
                </div>
            </Flex>

            <Table rowKey="_id" columns={columns} dataSource={adminData} loading={isLoading} pagination={false} />

            <CustomModal
                open={makeAdminModal}
                setOpen={setMakeAdminModal}
                title="Make Admin"
                width={500}
                body={addAdminForm}
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

export default MakeAdmin;
