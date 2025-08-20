// ProfileDetails.tsx
import { Table } from 'antd';
import { FiExternalLink } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const ProfileDetails = () => {
    const navigate = useNavigate();

    const userInfo = {
        name: 'Deniyal Smith',
        email: 'deniyal@gmail.com',
        regNo: '#131213542253',
        contact: '+131255',
        dob: '17 Dec, 2024',
        gender: 'Female',
        occupation: 'Operator',
        address: '76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    };

    const devices = [
        {
            key: '1',
            deviceId: 'HP:0012544',
            userName: 'Asadujjaman',
            activationDate: '8 Sep, 2020',
            deactivationDate: '8 Sep, 2020',
            trackingLocation: '4 Novella Block, Eichmannview',
            status: 'Active',
        },
        {
            key: '2',
            deviceId: 'HP:0012544',
            userName: 'Asadujjaman',
            activationDate: '8 Sep, 2020',
            deactivationDate: '8 Sep, 2020',
            trackingLocation: '4 Novella Block, Eichmannview',
            status: 'Shared',
        },
        {
            key: '3',
            deviceId: 'HP:0012544',
            userName: 'Asadujjaman',
            activationDate: '8 Sep, 2020',
            deactivationDate: '8 Sep, 2020',
            trackingLocation: '4 Novella Block, Eichmannview',
            status: 'Past User',
        },
        {
            key: '4',
            deviceId: 'HP:0012544',
            userName: 'Asadujjaman',
            activationDate: '8 Sep, 2020',
            deactivationDate: '8 Sep, 2020',
            trackingLocation: '4 Novella Block, Eichmannview',
            status: 'Shared',
        },
    ];

    const columns = [
        { title: 'Device ID', dataIndex: 'deviceId' },
        { title: 'User Name', dataIndex: 'userName' },
        { title: 'Activation Date', dataIndex: 'activationDate' },
        { title: 'Deactivation Date', dataIndex: 'deactivationDate' },
        { title: 'Tracking Location', dataIndex: 'trackingLocation' },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status: string) => (
                <span
                    className={`px-3 py-1 rounded-full text-sm ${
                        status === 'Active'
                            ? 'bg-[#2E7D32]/20 text-[#2E7D32]'
                            : status === 'Shared'
                            ? 'bg-[#00A6F433]/20 text-[#1E90FF]'
                            : 'bg-[#B6B6B633]/20 text-[#929292]'
                    }`}
                >
                    {status}
                </span>
            ),
        },
        {
            title: 'Action',
            render: () => <FiExternalLink className="text-gray-500" size={20} />,
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <p onClick={() => navigate(-1)} className="bg-white p-2 shadow-md rounded-full cursor-pointer">
                    <IoMdArrowBack size={22} />
                </p>
                <h2 className="text-xl font-medium">Profile Information</h2>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 mb-6">
                <img src={userInfo.avatar} alt="User" className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <h3 className="font-semibold text-lg">{userInfo.name}</h3>
                    <p className="text-gray-500">{userInfo.email}</p>
                </div>
            </div>

            {/* Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Name</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.name}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Reg no</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.regNo}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Contact</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.contact}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.email}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Date of Birth</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.dob}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Gender</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.gender}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Occupation</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.occupation}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Address</label>
                    <input
                        disabled
                        type="text"
                        value={userInfo.address}
                        className="border rounded-full px-3 py-2"
                        readOnly
                    />
                </div>
            </div>

            {/* Devices Table */}
            <h3 className="font-medium text-lg mb-4">Users Devices</h3>
            <Table columns={columns} dataSource={devices} pagination={{ pageSize: 3 }} className="shadow-sm" />
        </div>
    );
};

export default ProfileDetails;
