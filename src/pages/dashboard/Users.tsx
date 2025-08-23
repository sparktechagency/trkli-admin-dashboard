import { Button, Checkbox, ConfigProvider, DatePicker, Flex, Form, Input, Popconfirm, Table } from 'antd';
import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import { imageUrl } from '../../redux/api/baseApi';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const dummyData = [
    {
        key: 1,
        admin_name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        regNo: 'REG001',
        regDate: '2025-01-10',
        email: 'john.doe@example.com',
        address: '123 Main St, New York, NY',
        status: 'active',
    },
    {
        key: 2,
        admin_name: 'Jane Smith',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        regNo: 'REG002',
        regDate: '2025-02-15',
        email: 'jane.smith@example.com',
        address: '456 Oak Ave, Los Angeles, CA',
        status: 'inactive',
    },
    {
        key: 3,
        admin_name: 'Michael Johnson',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        regNo: 'REG003',
        regDate: '2025-03-12',
        email: 'michael.johnson@example.com',
        address: '789 Pine Rd, Chicago, IL',
        status: 'active',
    },
    {
        key: 4,
        admin_name: 'Emily Davis',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        regNo: 'REG004',
        regDate: '2025-01-20',
        email: 'emily.davis@example.com',
        address: '321 Elm St, Houston, TX',
        status: 'inactive',
    },
    {
        key: 5,
        admin_name: 'Robert Wilson',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        regNo: 'REG005',
        regDate: '2025-02-05',
        email: 'robert.wilson@example.com',
        address: '654 Maple Ave, Phoenix, AZ',
        status: 'active',
    },
    {
        key: 6,
        admin_name: 'Sophia Martinez',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        regNo: 'REG006',
        regDate: '2025-03-01',
        email: 'sophia.martinez@example.com',
        address: '987 Cedar Rd, Philadelphia, PA',
        status: 'inactive',
    },
    {
        key: 7,
        admin_name: 'David Anderson',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        regNo: 'REG007',
        regDate: '2025-01-25',
        email: 'david.anderson@example.com',
        address: '123 Birch Ln, San Antonio, TX',
        status: 'active',
    },
    {
        key: 8,
        admin_name: 'Olivia Taylor',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        regNo: 'REG008',
        regDate: '2025-02-18',
        email: 'olivia.taylor@example.com',
        address: '456 Spruce St, San Diego, CA',
        status: 'inactive',
    },
    {
        key: 9,
        admin_name: 'James Thomas',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        regNo: 'REG009',
        regDate: '2025-03-10',
        email: 'james.thomas@example.com',
        address: '789 Walnut Ave, Dallas, TX',
        status: 'active',
    },
    {
        key: 10,
        admin_name: 'Ava White',
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        regNo: 'REG010',
        regDate: '2025-01-15',
        email: 'ava.white@example.com',
        address: '321 Poplar Rd, San Jose, CA',
        status: 'inactive',
    },
    {
        key: 11,
        admin_name: 'William Harris',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        regNo: 'REG011',
        regDate: '2025-02-22',
        email: 'william.harris@example.com',
        address: '654 Chestnut St, Austin, TX',
        status: 'active',
    },
    {
        key: 12,
        admin_name: 'Isabella Martin',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        regNo: 'REG012',
        regDate: '2025-03-08',
        email: 'isabella.martin@example.com',
        address: '987 Pinecrest Ave, Jacksonville, FL',
        status: 'inactive',
    },
    {
        key: 13,
        admin_name: 'Ethan Garcia',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        regNo: 'REG013',
        regDate: '2025-01-30',
        email: 'ethan.garcia@example.com',
        address: '123 Willow St, Fort Worth, TX',
        status: 'active',
    },
    {
        key: 14,
        admin_name: 'Mia Clark',
        image: 'https://randomuser.me/api/portraits/women/14.jpg',
        regNo: 'REG014',
        regDate: '2025-02-10',
        email: 'mia.clark@example.com',
        address: '456 Magnolia Rd, Columbus, OH',
        status: 'inactive',
    },
    {
        key: 15,
        admin_name: 'Alexander Lewis',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        regNo: 'REG015',
        regDate: '2025-03-05',
        email: 'alexander.lewis@example.com',
        address: '789 Cypress Ln, Charlotte, NC',
        status: 'active',
    },
    {
        key: 16,
        admin_name: 'Charlotte Lee',
        image: 'https://randomuser.me/api/portraits/women/16.jpg',
        regNo: 'REG016',
        regDate: '2025-01-12',
        email: 'charlotte.lee@example.com',
        address: '321 Redwood St, San Francisco, CA',
        status: 'inactive',
    },
    {
        key: 17,
        admin_name: 'Benjamin Walker',
        image: 'https://randomuser.me/api/portraits/men/17.jpg',
        regNo: 'REG017',
        regDate: '2025-02-28',
        email: 'benjamin.walker@example.com',
        address: '654 Aspen Ave, Indianapolis, IN',
        status: 'active',
    },
    {
        key: 18,
        admin_name: 'Amelia Hall',
        image: 'https://randomuser.me/api/portraits/women/18.jpg',
        regNo: 'REG018',
        regDate: '2025-03-02',
        email: 'amelia.hall@example.com',
        address: '987 Fir Rd, Seattle, WA',
        status: 'inactive',
    },
    {
        key: 19,
        admin_name: 'Daniel Allen',
        image: 'https://randomuser.me/api/portraits/men/19.jpg',
        regNo: 'REG019',
        regDate: '2025-01-18',
        email: 'daniel.allen@example.com',
        address: '123 Hemlock St, Denver, CO',
        status: 'active',
    },
    {
        key: 20,
        admin_name: 'Harper Young',
        image: 'https://randomuser.me/api/portraits/women/20.jpg',
        regNo: 'REG020',
        regDate: '2025-02-25',
        email: 'harper.young@example.com',
        address: '456 Sycamore Ave, Boston, MA',
        status: 'inactive',
    },
];

const Users = () => {
    const [makeAdminModal, setMakeAdminModal] = useState(false);
    // const [value, setValue] = useState<Record<string, any> | null>(null);
    const navigate = useNavigate();

    const columns = [
        {
            title: <Checkbox />,
            dataIndex: 'checkbox',
            key: 'checkbox',
            render: () => <Checkbox />,
            width: 50,
        },
        {
            title: 'S.No',
            dataIndex: 'key',
            key: 'key',
            width: 150,
        },
        {
            title: 'Admin Name',
            dataIndex: 'admin_name',
            key: 'admin_name',
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
                            className="w-8 h-8 object-cover rounded-full"
                        />

                        <p
                            style={{
                                letterSpacing: 0.4,
                                fontSize: '#666666',
                                fontWeight: '400',
                            }}
                        >
                            {record?.admin_name}
                        </p>
                    </div>
                );
            },
        },

        // {
        //     title: 'Reg.No',
        //     dataIndex: 'regNo',
        //     key: 'regNo',
        // },
        // {
        //     title: 'Reg.Date',
        //     dataIndex: 'regDate',
        //     key: 'regDate',
        // },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 150,
            textAlign: 'center',
            render: (_: String, record: Record<string, any>) => (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',

                        paddingRight: 10,
                    }}
                >
                    <button
                        className="flex justify-center items-center rounded-md"
                        onClick={() => navigate('/user-details')}
                        style={{
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            width: '40px',
                            height: '32px',
                        }}
                    >
                        <IoIosInformationCircleOutline size={26} className="text-[#A1A1A1]" />
                    </button>
                    <Popconfirm title="Delete Admin" description="Are you sure to delete this Admin?">
                        <div>
                            <button
                                className="flex justify-center items-center rounded-md"
                                onClick={() => setMakeAdminModal(record?._id)}
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    outline: 'none',
                                    width: '40px',
                                    height: '32px',
                                }}
                            >
                                {record?.status === 'active' ? (
                                    <IoLockOpenOutline size={24} className="text-[#A1A1A1]" />
                                ) : (
                                    <IoLockClosedOutline size={24} className="text-[#FF0000]" />
                                )}
                            </button>
                        </div>
                    </Popconfirm>
                </div>
            ),
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
                    </div>
                </div>
            </Flex>

            <ConfigProvider
            // theme={{
            //     components: {
            //         Table: {
            //             headerBg: '#E9EFFA',
            //             headerBorderRadius: 0,
            //             rowHoverBg: '#F5F5F5',
            //         },
            //     },
            // }}
            >
                <Table columns={columns} dataSource={dummyData} />
            </ConfigProvider>

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
