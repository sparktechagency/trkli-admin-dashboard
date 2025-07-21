import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
    const navigate = useNavigate() 

 const product = {
    productName: 'Trikli Tracker',
    brandName: 'Trikli',
    price: '$16.30 $29.30',
    colour: 'Black',
    orderId: '#145818',
    note: '#1458118',
};

const contact = {
    name: 'Asadujjaman',
    contactNo: '+963 932 509 736',
    email: 'asadujjamanmahfu@gmail.com',
    deliveryAddress: 'P. O. Box 50332, Damascus...',
    deliveryDate: '22 Oct, 2025',
    note: 'N/A',
};

const payment = {
    productQuantity: '01',
    subtotal: '$16.30',
    deliveryCharge: '$4.00',
    total: '$20.30',
};

    return (
        <div className="p-6 bg-white rounded-xl">
            <div className="flex items-center gap-4 mb-10">
                <p onClick={() => navigate(-1)} className=' bg-white p-2 shadow-md rounded-full '>  <IoMdArrowBack size={22} /> </p>

                <h2 className="text-xl font-medium">Order Details</h2>
            </div>

            {/* Device Information */}
            <div className=" flex items-start  gap-16 mb-12">
                <div className="flex items-center justify-start ">
                    <div className='  w-[280px] h-[280px]  bg-gray-100 rounded-lg flex items-center justify-center '>
                        <img src="/product.png" alt="Device" width={180} height={120} className="rounded-xl" />
                    </div>
                </div>  

                <div>
                <div className="space-y-1 mb-7">
                    <h3 className="font-medium text-lg  mb-2"> <span> Product Details </span> </h3>
                    <div className='flex flex-col gap-2'>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Product Name</span> : <span> {product.productName} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Brand Name</span> : <span> {product.brandName} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Price</span> : <span> {product.price} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Colour</span> : <span>  {product.colour} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Order Id</span> : <span>  {product.orderId} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Note</span> : <span>  {product.note} </span> </p>
                    </div>
                </div> 

                <div className="space-y-1 mb-7">
                    <h3 className="font-medium text-lg  mb-2"> <span> Contact Details </span> </h3>
                    <div className='flex flex-col gap-2'>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Name</span> : <span> {contact.name} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Contact No.</span> : <span> {contact.contactNo} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Email</span> : <span> {contact.email} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Delivery Address</span> : <span> {contact.deliveryAddress} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Delivery Date</span> : <span> {contact.deliveryDate} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'> Note</span> : <span>  {contact.note} </span> </p>
                    </div>
                </div>
                <div className="space-y-1 ">
                    <h3 className="font-medium text-lg  mb-2"> <span>Payment Summary </span> </h3>
                    <div className='flex flex-col gap-2'>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Product Quantity</span> : <span> {payment.productQuantity} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Subtotal</span> : <span> {payment.subtotal} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Delivery Charge</span> : <span> {payment.deliveryCharge} </span> </p>
                        <p className=' w-full text-[#999999] flex items-center gap-6'><span className='w-[120px] font-medium'>Total</span> : <span className=" text-[#188A50] font-medium">  {payment.total} </span> </p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default OrderDetails;