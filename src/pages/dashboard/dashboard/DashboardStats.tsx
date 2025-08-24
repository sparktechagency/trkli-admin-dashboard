
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { MdDevicesOther, MdOutlineProductionQuantityLimits } from 'react-icons/md';

const DashboardStats = () => {
    const data = [
        {
            name: 'Total User',
            icon: <HiMiniUserGroup color="#8F00FF" size={20} />,
            time: "13 dec 2023",
            total: "5",
            daily: "2",
            bgColor: '#fff',
            textColor: '#8F00FF',
        },
        {
            name: 'Total Selling Device',
            icon: <MdDevicesOther color="#8F00FF" size={20} />,
            time: "13 dec 2023",
            total: "10",
            daily: "3",
            textColor: '#3F0D47',
            bgColor: '#fff',
        },
        {
            name: 'Total Selling product',
            icon: <MdOutlineProductionQuantityLimits color="#8F00FF" size={20} />,
            time: "13 dec 2023",
            total: "5",
            daily: "1",
            textColor: '#DAA520',
            bgColor: '#fff',
        },
        {
            name: 'Total Earning',
            icon: <BsCurrencyDollar color="#8F00FF" size={20} />,
            time: "13 dec 2023",
            total: "200",
            daily: "65",
            textColor: '#3F0D47',
            bgColor: '#fff',
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-4 gap-8 items-center">
                {data.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2">
                        <div className='flex items-center gap-3'>
                            <div className={`rounded-full flex items-center justify-center bg-[#F4E6FF] p-1.5`}>
                                {item?.icon}
                            </div>
                            <div className="">
                                <p className="flex items-center justify-center text-lg text-[#242424] font-medium">
                                    {item.name}
                                </p>
                            </div>
                        </div> 

                        {/* <p className=' text-[#999999] text-[14px]  '>{item?.time} </p>  */}

                        <div className=' flex items-center justify-between'>
                            <p className="text-base font-medium flex items-center gap-2" >
                                <span> Total: </span> <span style={{ color: item.textColor }} className='font-semibold' >  {item.total}  </span>
                            </p>

                            <p className="text-base font-medium flex items-center gap-1" >
                                <span> Daily: </span> <span style={{ color: item.textColor }} className='font-semibold' >  {item.daily}  </span>
                            </p>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;
