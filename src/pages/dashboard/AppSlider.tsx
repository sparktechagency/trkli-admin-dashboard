import { Button, Checkbox, DatePicker, Flex, Input, Table } from 'antd';
import { useState } from 'react';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import CreateWhyChooseModal from '../../components/modals/CreateWhyChooseModal';
import { BsInfoCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

type contentType = {
    id: string;
    contentTitle: string;
    contentImage: string;
    url: string;
};

const contentData: contentType[] = [
    {
        id: '1',
        contentImage: 'https://picsum.photos/200/120?random=1',
        contentTitle: 'Introduction to JavaScript',
        url: 'https://example.com/javascript-introduction',
    },
    {
        id: '2',
        contentImage: 'https://picsum.photos/200/120?random=2',
        contentTitle: 'Mastering React Basics',
        url: 'https://example.com/react-basics',
    },
    {
        id: '3',
        contentImage: 'https://picsum.photos/200/120?random=3',
        contentTitle: 'Advanced Node.js Guide',
        url: 'https://example.com/nodejs-advanced',
    },
    {
        id: '4',
        contentImage: 'https://picsum.photos/200/120?random=4',
        contentTitle: 'Getting Started with Next.js',
        url: 'https://example.com/nextjs-start',
    },
    {
        id: '5',
        contentImage: 'https://picsum.photos/200/120?random=5',
        contentTitle: 'UI/UX Design Principles',
        url: 'https://example.com/ui-ux-design',
    },
    {
        id: '6',
        contentImage: 'https://picsum.photos/200/120?random=6',
        contentTitle: 'Understanding MongoDB',
        url: 'https://example.com/mongodb-guide',
    },
    {
        id: '7',
        contentImage: 'https://picsum.photos/200/120?random=7',
        contentTitle: 'Docker for Beginners',
        url: 'https://example.com/docker-beginners',
    },
    {
        id: '8',
        contentImage: 'https://picsum.photos/200/120?random=8',
        contentTitle: 'Kubernetes Crash Course',
        url: 'https://example.com/kubernetes-course',
    },
    {
        id: '9',
        contentImage: 'https://picsum.photos/200/120?random=9',
        contentTitle: 'Git & GitHub Essentials',
        url: 'https://example.com/git-github',
    },
    {
        id: '10',
        contentImage: 'https://picsum.photos/200/120?random=10',
        contentTitle: 'Mastering Tailwind CSS',
        url: 'https://example.com/tailwind-css',
    },
    {
        id: '11',
        contentImage: 'https://picsum.photos/200/120?random=11',
        contentTitle: 'REST API Best Practices',
        url: 'https://example.com/rest-api-practices',
    },
    {
        id: '12',
        contentImage: 'https://picsum.photos/200/120?random=12',
        contentTitle: 'GraphQL Basics',
        url: 'https://example.com/graphql-basics',
    },
    {
        id: '13',
        contentImage: 'https://picsum.photos/200/120?random=13',
        contentTitle: 'Building with Express.js',
        url: 'https://example.com/expressjs-guide',
    },
    {
        id: '14',
        contentImage: 'https://picsum.photos/200/120?random=14',
        contentTitle: 'Cloud Computing 101',
        url: 'https://example.com/cloud-computing',
    },
    {
        id: '15',
        contentImage: 'https://picsum.photos/200/120?random=15',
        contentTitle: 'Python for Data Science',
        url: 'https://example.com/python-data-science',
    },
    {
        id: '16',
        contentImage: 'https://picsum.photos/200/120?random=16',
        contentTitle: 'Machine Learning Basics',
        url: 'https://example.com/machine-learning',
    },
    {
        id: '17',
        contentImage: 'https://picsum.photos/200/120?random=17',
        contentTitle: 'AI & Deep Learning',
        url: 'https://example.com/ai-deep-learning',
    },
    {
        id: '18',
        contentImage: 'https://picsum.photos/200/120?random=18',
        contentTitle: 'Cybersecurity Fundamentals',
        url: 'https://example.com/cybersecurity-basics',
    },
    {
        id: '19',
        contentImage: 'https://picsum.photos/200/120?random=19',
        contentTitle: 'DevOps Culture & Tools',
        url: 'https://example.com/devops-tools',
    },
    {
        id: '20',
        contentImage: 'https://picsum.photos/200/120?random=20',
        contentTitle: 'Agile & Scrum Guide',
        url: 'https://example.com/agile-scrum',
    },
];

const AppSlider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState<contentType | null>(null);

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
            dataIndex: 'id',
            key: 'id',
            width: '100px',
        },
        {
            title: 'Image',
            dataIndex: 'contentImage',
            key: 'contentImage',
            render: (text: string) => <img src={text} alt="class" style={{ height: 50, objectFit: 'cover' }} />,
            width: '300px',
        },
        {
            title: 'Name',
            dataIndex: 'contentTitle',
            key: 'contentTitle',
            width: '370px',
        },
        {
            title: 'URL Link',
            dataIndex: 'url',
            key: 'url',
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center' as const,
            render: () => (
                <div className="flex justify-center items-center gap-2">
                    <p>
                        <BsInfoCircle size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} />
                    </p>
                    <p>
                        <IoLockClosedOutline size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} />
                    </p>
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
                            + Add Link
                        </Button>
                    </div>
                </div>
            </Flex>

            <div>
                <Table columns={columns} dataSource={contentData} pagination={{ pageSize: 8 }} />
            </div>
            <CreateWhyChooseModal isOpen={isOpen} setIsOpen={setIsOpen} editData={editData} setEditData={setEditData} />
        </div>
    );
};

export default AppSlider;
