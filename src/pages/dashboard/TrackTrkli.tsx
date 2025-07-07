'use client';

import { Table, Input, DatePicker, Button, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { Checkbox } from 'antd';
import { BsInfoCircle } from 'react-icons/bs';

const data = [
  {
    key: '1',
    deviceId: 'HP:0012544',
    activationDate: '22 Oct, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    address: '3 Rue Thouin 75005 Paris',
  },
  {
    key: '2',
    deviceId: 'HP:0012543',
    activationDate: '1 Feb, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '3',
    deviceId: 'HP:0012610',
    activationDate: '8 Sep, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '4',
    deviceId: 'HP:0012544',
    activationDate: '22 Oct, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    address: '3 Rue Thouin 75005 Paris',
  },
  {
    key: '5',
    deviceId: 'HP:0012543',
    activationDate: '1 Feb, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '6',
    deviceId: 'HP:0012610',
    activationDate: '8 Sep, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '7',
    deviceId: 'HP:0012544',
    activationDate: '22 Oct, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    address: '3 Rue Thouin 75005 Paris',
  },
  {
    key: '8',
    deviceId: 'HP:0012543',
    activationDate: '1 Feb, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '9',
    deviceId: 'HP:0012610',
    activationDate: '8 Sep, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },
  {
    key: '10',
    deviceId: 'HP:0012544',
    activationDate: '22 Oct, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    address: '3 Rue Thouin 75005 Paris',
  },
  {
    key: '11',
    deviceId: 'HP:0012543',
    activationDate: '1 Feb, 2020',
    userReg: '96459761',
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    address: '4 rue Neuve Popincourt 75009 Paris',
  },


];

const columns: ColumnsType<any> = [
  {
    title: <Checkbox />,
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => <Checkbox />,
    width: 50,
  },
  {
    title: 'Device ID.',
    dataIndex: 'deviceId',
    key: 'deviceId',
  },
  {
    title: 'Activation Date',
    dataIndex: 'activationDate',
    key: 'activationDate',
  },
  {
    title: 'User Reg. no',
    dataIndex: 'userReg',
    key: 'userReg',
  },
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: any, record: any) => (
      <div className="flex items-center gap-2">
        <Avatar src={record.avatar} size="small" />
        <span>{record.name}</span>
      </div>
    ),
  },
  {
    title: 'User Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <div className=' flex items-center gap-2'>
        <p> <BsInfoCircle size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} /></p>
        <p>  <IoLockClosedOutline size={22} color="#A1A1A1" style={{ cursor: 'pointer' }} /> </p>
      </div>
    ),
    // align: 'center', 
  },
];

const TrackTrkli = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">

        <h1 className="text-2xl text-[#080808] font-semibold">Track Trkli</h1>

        <div className="flex items-center gap-2 justify-end ">
          <div className=' flex items-center gap-2 '>
            <p className=' cursor-pointer '> <IoLockOpenOutline size={24} color='#A1A1A1' /> </p>
            <p className=' cursor-pointer '> <IoLockClosedOutline size={24} color='#A1A1A1' /> </p>
          </div>
          <Input
            style={{
              width: 335,
              height: 46,
              borderRadius: "50px",
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              border: "none"
            }}
            placeholder="Search"
            prefix={<div className='  flex items-center p-2 bg-[#F4E6FF] rounded-full'> <FiSearch color="#8F00FF" size={20} /> </div>}
          />

          <DatePicker style={{
            width: 160,
            height: 46,
            borderRadius: "50px",
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: "none"
          }} />

        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
pagination={{ pageSize:12}}
        rowClassName="hover:bg-gray-100"
      /> 
    </div>
  );
};

export default TrackTrkli;
