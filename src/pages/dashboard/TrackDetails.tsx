// TrackDetails.tsx

import { Table, Divider } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';



const TrackDetails = () => { 
    const navigate = useNavigate();
  const deviceInfo = {
    id: 'HP:0012544',
    activationDate: '22 Oct, 2020',
    status: 'Active',
    location: '4 rue Neuve Popincourt 75009 Paris',
  };

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'name',
      render: (text: string) => (
        <div className="flex items-center gap-2">
          <img src="/user.svg"  height={45} width={45} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Registration no',
      dataIndex: 'registration',
    },
    {
      title: 'User Address',
      dataIndex: 'address',
    },
    {
      title: 'Contact No',
      dataIndex: 'contact',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => {
        return <p className={`${status==="Active"? " bg-[#2E7D32]/20 text-[#2E7D32] " : status === "Shared"? "bg-[#00A6F433]/20 text-[#1E90FF]" : " bg-[#B6B6B633]/20 text-[#929292]"} flex items-center justify-center py-1 rounded`}>{status}</p>;
      },
    },
    {
      title: 'Action',
      render: () => (
   <div className=' ms-3'> <FiExternalLink color='#606060' size={22}  /></div>
      ),
    },
  ];

  const userData = [
    {
      key: '1',
      name: 'Asadujjaman',
      registration: '96459761',
      address: '3 Rue Thouin 75005 Paris',
      contact: '+099999',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Md. Shakil',
      registration: '96459761',
      address: '3 Rue Thouin 75005 Paris',
      contact: '+099999',
      status: 'Shared',
    },
    {
      key: '3',
      name: 'Zabia',
      registration: '96459761',
      address: '3 Rue Thouin 75005 Paris',
      contact: '+099999',
      status: 'Past User',
    },
    {
      key: '4',
      name: 'Kamra',
      registration: '96459761',
      address: '3 Rue Thouin 75005 Paris',
      contact: '+099999',
      status: 'Past User',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex items-center gap-4 mb-10"> 
        <p onClick={()=>navigate(-1)} className=' bg-white p-2 shadow-md rounded-full '>  <IoMdArrowBack size={22}/> </p>
       
        <h2 className="text-xl font-medium">Track Details</h2>
      </div>

      {/* Device Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-2">
          <h3 className="font-medium text-lg flex items-center gap-2 mb-5"><span> <LuLayoutDashboard size={20} color='#8F00FF' /> </span> <span> Device Information </span> </h3>  
          <div className='flex flex-col gap-3'> 
          <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Device ID</span> : <span> {deviceInfo.id } </span> </p>
          <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Activation Date</span> : <span> {deviceInfo.activationDate} </span> </p>
          <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Status</span> : <span> {deviceInfo.status} </span> </p>
          <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Tracking Location</span> : <span>  {deviceInfo.location} </span> </p>
          </div>

        </div>
        <div className="flex items-center justify-center"> 
            <div className='  w-[180px] h-[180px]  bg-gray-100 rounded-lg flex items-center justify-center '> 
          <img src="/product.png" alt="Device" width={120} height={120} className="rounded-xl" />
            </div>
        </div>
      </div>

      <Divider />

      {/* User Information */}
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"> <span> <FaRegUser color='#4F008C' /> </span> <span> User Information </span> </h3>
      <Table
        columns={columns}
        dataSource={userData}
        pagination={false}

        className="shadow-sm"
      />
    </div>
  );
};

export default TrackDetails;
