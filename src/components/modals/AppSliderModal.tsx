import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { useGetProductsQuery } from '../../redux/features/productsApi';

type contentType = {
    id: string;
    contentTitle: string;
    contentImage: string;
    url: string;
};

const AppSliderModal = ({
    isOpen,
    setIsOpen,
    editData,
    setEditData,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    editData: contentType | null;
    setEditData: (data: contentType | null) => void;
}) => {
    const [form] = Form.useForm();
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const { data: productRes } = useGetProductsQuery({});
    const productData = productRes?.data || [];
    const products = productData.map((item: any) => ({
        _id: item._id,
        name: item.name,
    }));

    console.log(products);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData);
            setImageUrl(editData.contentImage);
        }
    }, [editData, form, setImageUrl]);

    const OnFinish = (values: { contentTitle: string; description: string }) => {
        console.log('Form Values:', {
            ...values,
            image: imgFile,
        });
        setIsOpen(false);
        setEditData(null);
        form.resetFields();
        setImgFile(null);
        setImageUrl(undefined);
    };

    return (
        <Modal
            title={
                <p className="text-xl text-primary font-semibold">
                    {editData?.id ? 'Edit Content' : 'Create Content'}{' '}
                </p>
            }
            open={isOpen}
            onCancel={() => {
                setIsOpen(false);
                form.resetFields();
                setImgFile(null);
                setImageUrl(undefined);
                setEditData(null);
            }}
            footer={null}
            width="590px"
            centered
        >
            <Form layout="vertical" form={form} onFinish={OnFinish}>
                {/* image */}
                <div className="py-[4px] w-full mb-5">
                    <p className="text-[14px] font-semibold py-1 mb-2">Image</p>
                    <label
                        htmlFor="image"
                        className="p-3 border border-[#BABABA] rounded-lg bg-white cursor-pointer block"
                    >
                        <div className="flex justify-center items-center w-full h-[180px] ">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    style={{ height: '170px', width: '240px', borderRadius: 10, objectFit: 'contain' }}
                                    alt="class"
                                />
                            ) : (
                                <PiImageThin className="text-8xl text-[#666666]" />
                            )}
                        </div>
                    </label>
                    <div className="hidden">
                        <input id="image" type="file" accept="image/*" onChange={handleChange} className=" hidden" />
                    </div>
                </div>

                <Form.Item label="Name" name="contentTitle" rules={[{ required: true }]}>
                    <Input placeholder="Enter content title" style={{ height: 42 }} />
                </Form.Item>

                <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                    <Select placeholder="Select Category" style={{ height: 42 }}>
                        {products?.map((cat: any) => (
                            <Select.Option key={cat._id} value={cat._id}>
                                {cat.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <div className="flex justify-center w-full mt-5">
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ height: 40, width: '200px', borderRadius: '50px' }}
                        >
                            Save
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AppSliderModal;
