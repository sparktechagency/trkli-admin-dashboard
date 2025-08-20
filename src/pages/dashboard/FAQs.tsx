import { Button, Flex, Form } from 'antd';
import { useState } from 'react';
import CustomModal from '../../components/shared/CustomModal';
import AddFaqForm from '../../components/modals/AddFaqForm';
import EditFaqForm from '../../components/modals/EditFaqForm';

import { GoQuestion } from 'react-icons/go';
import { CiEdit } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlinePlus } from 'react-icons/ai';
import {
    useCreateFAQMutation,
    useDeleteFAQMutation,
    useGetFAQQuery,
    useUpdateFAQMutation,
} from '../../redux/features/faqApi';
import toast from 'react-hot-toast';
import DeleteModal from '../../components/modals/DeleteModal';

const FAQs = () => {
    const [form] = Form.useForm();
    const { data, refetch } = useGetFAQQuery({});
    const faqData = data?.data || [];
    const [createFAQ] = useCreateFAQMutation();
    const [updateFAQ] = useUpdateFAQMutation();
    const [deleteFAQ] = useDeleteFAQMutation();

    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setEditModal] = useState(false);
    const [editData, setEditData] = useState<any>(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const handleAddFaq = async (values: any) => {
        const payload = {
            question: values.productName,
            answer: values.answer,
        };

        try {
            const res = await createFAQ(payload).unwrap();
            if (res?.success) {
                toast.success(res?.message || 'FAQ created successfully');
                refetch();
                form.resetFields();
                setOpenModal(false);
            }
        } catch (error: any) {
            console.log('Error Creating FAQ:', error);
            toast.error(error?.data?.message || 'Failed to create FAQ');
        }
    };

    const handleEdit = async (faqObject: { id: string; question: string; answer: string }) => {
        const id = faqObject?.id;
        const payload = {
            question: faqObject?.question,
            answer: faqObject?.answer,
        };
        
        try {
            const res = await updateFAQ({ id, payload }).unwrap();
            if (res?.success) {
                toast.success(res?.message || 'FAQ updated successfully');
                refetch();
                setEditModal(false);
            }
        } catch (error: any) {
            console.log('Error updating FAQ:', error);
            toast.error(error?.data?.message || 'Failed to update FAQ');
        }
    };

    const handleDelete = async (id: string) => {
        console.log(`Delete FAQ with ID: ${id}`);
        try {
            const res = await deleteFAQ(id).unwrap();
            if (res?.success) {
                toast.success(res?.message || 'FAQ deleted successfully');
                refetch();
                setShowDelete(false);
            }
        } catch (error: any) {
            console.error('Error deleting FAQ:', error);
            toast.error(error?.data?.message || 'Failed to delete FAQ');
        }
    };

    return (
        <div className=" pt-5 px-3 h-full">
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div>
                    <h1 className="text-2xl text-primary font-semibold">FAQs</h1>
                </div>

                <div
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Button
                        icon={<AiOutlinePlus />}
                        onClick={() => setOpenModal(true)}
                        htmlType="submit"
                        style={{
                            height: 40,
                            borderRadius: 50,
                        }}
                        type="primary"
                    >
                        Add FAQ
                    </Button>
                </div>
            </Flex>

            <div className="space-y-6 my-5 h-full">
                <div className="bg-white py-6 px-4 rounded-md h-full">
                    {faqData.map((item: { _id: string; question: string; answer: string }, index: number) => (
                        <div key={index} className="flex justify-between items-start gap-4">
                            <div className="mt-3">
                                <GoQuestion color="#8F00FF" size={25} />
                            </div>
                            <div className="w-full ">
                                <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 bg-slate-50">
                                    <span className=" flex-1 "> {item?.question}</span>
                                </p>
                                <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 bg-slate-50">
                                    <p className="text-[#919191] leading-[24px] mb-6 ">{item?.answer}</p>
                                </div>
                            </div>
                            <div className="w-[5%] flex justify-start flex-col items-start gap-2">
                                <CiEdit
                                    size={24}
                                    onClick={() => {
                                        setEditModal(true);
                                        setEditData(item);
                                    }}
                                    className="text-2xl cursor-pointer text-[#8F00FF]"
                                />
                                <RxCross2
                                    size={24}
                                    onClick={() => {
                                        setDeleteId(item?._id);
                                        setShowDelete(true);
                                    }}
                                    className="text-2xl cursor-pointer text-red-600"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CustomModal
                open={openModal}
                setOpen={setOpenModal}
                title={<p className="font-semibold text-xl  text-primary">Add FAQ </p>}
                width={500}
                body={<AddFaqForm onFinish={handleAddFaq} form={form} />}
            />
            <CustomModal
                open={openEditModal}
                setOpen={setEditModal}
                title={<p className="font-semibold text-xl  text-primary">Edit FAQ </p>}
                width={500}
                body={<EditFaqForm onFinish={handleEdit} editData={editData} />}
            />

            <DeleteModal
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                deleteId={deleteId}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default FAQs;
