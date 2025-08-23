import { Button, Flex, Form, Input, Table } from 'antd';
import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import { imageUrl } from '../../redux/api/baseApi';
import { FiSearch } from 'react-icons/fi';
import { useGetUsersQuery } from '../../redux/features/usersApi';
import dayjs from 'dayjs';

const Users = () => {
    const [makeAdminModal, setMakeAdminModal] = useState(false);
    const { data, isLoading } = useGetUsersQuery({});
    const users = data?.data?.users;
    console.log(users);

    const columns = [
        {
            title: 'S No',
            key: 'serial',
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: 'Name',
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
                                record?.profile && record?.profile.startsWith('http')
                                    ? record?.profile
                                    : record?.profile
                                    ? `${imageUrl}${record?.profile}`
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact No.',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'User Type',
            dataIndex: 'user_type',
            key: 'user_type',
            render: (_: any, record: Record<string, any>) => {
                return <span>{record?.isSubscribed ? 'Subscribed User' : 'Normal User'}</span>;
            },
        },
        {
            title: 'Start Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text: string) => {
                return <span>{dayjs(text).format('DD-MM-YYYY')}</span>;
            },
        },
    ];

    const addAdminForm = (
        <Form
            style={{
                color: '#767676',
            }}
            layout="vertical"
        >
            <Form.Item label="Name" name="name">
                <Input
                    style={{
                        height: '40px',
                    }}
                    placeholder="John Doe"
                />
            </Form.Item>
            <Form.Item label="Email">
                <Input
                    style={{
                        height: '40px',
                    }}
                    type="email"
                    placeholder="email@gmail.com"
                />
            </Form.Item>
            <Form.Item label="Password">
                <Input
                    style={{
                        height: '40px',
                    }}
                    type="password"
                    placeholder="******"
                />
            </Form.Item>
            <Form.Item>
                <div className="flex justify-center w-full">
                    <Button
                        type="primary"
                        style={{
                            height: 40,
                            width: '100%',
                        }}
                    >
                        Add Admin
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );

    return (
        <div>
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div className="w-full flex justify-between items-center mb-5">
                    <h1 className="text-2xl text-primary font-semibold">App Users</h1>
                    <div className="flex items-center gap-2 justify-end ">
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
                    </div>
                </div>
            </Flex>

            <Table loading={isLoading} rowKey="_id" columns={columns} dataSource={users} />

            <CustomModal
                open={makeAdminModal}
                setOpen={setMakeAdminModal}
                title="Make Admin"
                width={500}
                body={addAdminForm}
            />
        </div>
    );
};

export default Users;
