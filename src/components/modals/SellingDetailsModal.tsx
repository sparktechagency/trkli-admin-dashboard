import { Modal } from 'antd';

interface SellingDetailsModalProps {
    sellingData: any;
    setSellingData: (data: any) => void;
}

const SellingDetailsModal = ({ sellingData, setSellingData }: SellingDetailsModalProps) => {
    return (
        <Modal
            open={sellingData !== null}
            onCancel={() => {
                setSellingData(null);
            }}
            footer={null}
            width="1000px"
            centered
        >
            <div className="p-6 bg-white rounded-xl">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-xl font-medium">Order Details</h2>
                </div>

                {/* Device Information */}
                <div className=" flex items-start  gap-16 mb-12">
                    <div className="flex items-center justify-start">
                        <div className="w-[280px] h-[280px] rounded-lg flex flex-col items-center gap-4">
                            {sellingData?.items?.map((item: any, idx: number) => (
                                <img
                                    key={idx}
                                    src={item?.product?.images?.[0] || '/product.png'}
                                    alt="Device"
                                    width={150}
                                    height={100}
                                    className="rounded-xl bg-gray-100 p-1"
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="space-y-1 mb-7">
                            <h3 className="font-medium text-lg  mb-2">
                                {' '}
                                <span> Product Details </span>{' '}
                            </h3>
                            {sellingData?.items?.map((item: any, idx: number) => (
                                <div className="flex flex-col gap-2" key={idx}>
                                    <p className=" w-full text-[#999999] flex items-center gap-6">
                                        <span className="w-[120px] font-medium">Product Name</span> :{' '}
                                        <span> {item?.product?.name} </span>{' '}
                                    </p>
                                    <p className=" w-full text-[#999999] flex items-center gap-6">
                                        <span className="w-[120px] font-medium">Price</span> :{' '}
                                        <span> $ {item?.product?.price} </span>{' '}
                                    </p>
                                    <p className=" w-full text-[#999999] flex items-center gap-6">
                                        <span className="w-[120px] font-medium">Color</span> :{' '}
                                        <span> {item?.product?.color} </span>{' '}
                                    </p>
                                    <p className=" w-full text-[#999999] flex items-center gap-6">
                                        <span className="w-[120px] font-medium">Status</span> :{' '}
                                        <span> {sellingData?.status} </span>{' '}
                                    </p>
                                    <p className=" w-full text-[#999999] flex items-center gap-6">
                                        <span className="w-[120px] font-medium">Order Id</span> :{' '}
                                        <span> {sellingData?._id} </span>{' '}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-1 mb-7">
                            <h3 className="font-medium text-lg  mb-2">
                                {' '}
                                <span> Contact Details </span>{' '}
                            </h3>
                            <div className="flex flex-col gap-2">
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Name</span> :{' '}
                                    <span> {sellingData?.user?.name} </span>{' '}
                                </p>
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Contact No.</span> :{' '}
                                    <span> {sellingData?.user?.contact} </span>{' '}
                                </p>
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Email</span> :{' '}
                                    <span> {sellingData?.user?.email} </span>{' '}
                                </p>
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Delivery Address</span> :{' '}
                                    <span> {sellingData?.address} </span>{' '}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1 ">
                            <h3 className="font-medium text-lg  mb-2">
                                {' '}
                                <span>Payment Summary </span>{' '}
                            </h3>
                            <div className="flex flex-col gap-2">
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Product Quantity</span> :{' '}
                                    <span> {sellingData?.items?.length} </span>{' '}
                                </p>
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Delivery Charge</span> :{' '}
                                    <span> $ {sellingData?.delivery_charge} </span>{' '}
                                </p>
                                <p className=" w-full text-[#999999] flex items-center gap-6">
                                    <span className="w-[120px] font-medium">Total</span> :{' '}
                                    <span className=" text-[#188A50] font-medium"> $ {sellingData?.price} </span>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SellingDetailsModal;
