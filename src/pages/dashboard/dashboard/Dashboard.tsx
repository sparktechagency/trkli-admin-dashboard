import DashboardStats from './DashboardStats';
import EarningChart from './EarningChart';
import SellingChart from './SellingChart';
import UsersChart from './UsersChart';

const Dashboard = () => {
    return (
        <div className=" ">
            <DashboardStats />

            <div className="grid grid-cols-12  gap-2 items-center mt-5">
                <div className="col-span-12 bg-white drop-shadow-md  p-4 mx-2 rounded-2xl mb-3">
                    {/* total services */}

                    <UsersChart />
                </div>
                <div className="col-span-12  drop-shadow-md  pb-0 mx-2 "> 
                    <div className='grid grid-cols-12 gap-4 items-center'> 
                    <div className='col-span-6 bg-white p-4 rounded-2xl'>
                        <SellingChart />
                    </div>  

                    <div className='col-span-6 bg-white p-4 rounded-2xl'> 
                    <EarningChart />
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
