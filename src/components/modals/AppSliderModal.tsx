import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { useGetProductsQuery } from '../../redux/features/productsApi';
import { useCreateBannerMutation, useUpdateBannerMutation } from '../../redux/features/bannerApi';
import toast from 'react-hot-toast';
import { imageUrl } from '../../redux/api/baseApi';

type contentType = {
    id: string;
    contentTitle: string;
    contentImage: string;
    url: string;
    refetch: () => void;
};

interface AppSliderModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    editData: any;
    setEditData: (data: contentType | null) => void;
    refetch: () => void;
}

const AppSliderModal = ({ isOpen, setIsOpen, editData, setEditData, refetch }: AppSliderModalProps) => {
    const [form] = Form.useForm();
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [localImageUrl, setLocalImageUrl] = useState<string | undefined>();

    // Fetch products
    const { data: productRes } = useGetProductsQuery({});
    const productData = productRes?.data || [];
    const products = productData.map((item: any) => ({
        _id: item._id,
        name: item.name,
    }));

    const [createBanner] = useCreateBannerMutation();
    const [updateBanner] = useUpdateBannerMutation();

    // Handle image change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setLocalImageUrl(URL.createObjectURL(file));
        }
    };

    // Prefill form when editData is available
    useEffect(() => {
        if (editData) {
            form.setFieldsValue({
                contentTitle: editData?.name,
                product: editData?.product?._id,
            });
            // Set image URL for edit mode, assuming editData.image is a relative path
            setLocalImageUrl(editData?.image ? `${imageUrl}${editData.image}` : undefined);
        } else {
            // Clear form and image when not in edit mode
            form.resetFields();
            setImgFile(null);
            setLocalImageUrl(undefined);
        }
    }, [editData, form, imageUrl]);

    // Submit handler
    const onFinish = async (values: { contentTitle: string; product: string }) => {
        const formData = new FormData();
        formData.append('name', values.contentTitle);
        formData.append('product', values.product);

        if (imgFile) {
            formData.append('image', imgFile);
        }

        try {
            let res;
            if (editData) {
                // Update existing banner
                res = await updateBanner({ id: editData._id, body: formData }).unwrap();
            } else {
                // Create new banner
                res = await createBanner(formData).unwrap();
            }

            if (res?.success) {
                toast.success(`App Slider ${editData ? 'updated' : 'saved'} successfully`);
                setIsOpen(false);
                setEditData(null);
                form.resetFields();
                setImgFile(null);
                setLocalImageUrl(undefined);
                refetch();
            }
        } catch (error) {
            console.error(`Error ${editData ? 'Updating' : 'Creating'} Banner:`, error);
            toast.error(`Failed to ${editData ? 'update' : 'create'} App Slider`);
        }
    };

    return (
        <Modal
            title={<p className="text-xl text-primary font-semibold">{editData ? 'Edit Content' : 'Create Content'}</p>}
            open={isOpen}
            onCancel={() => {
                setIsOpen(false);
                form.resetFields();
                setImgFile(null);
                setLocalImageUrl(undefined);
                setEditData(null);
            }}
            footer={null}
            width="590px"
            centered
        >
            <Form layout="vertical" form={form} onFinish={onFinish}>
                {/* Image */}
                <div className="py-[4px] w-full mb-5">
                    <p className="text-[14px] font-semibold py-1 mb-2">Image</p>
                    <label
                        htmlFor="image"
                        className="p-3 border border-[#BABABA] rounded-lg bg-white cursor-pointer block"
                    >
                        <div className="flex justify-center items-center w-full h-[180px]">
                            {localImageUrl ? (
                                <img
                                    src={localImageUrl}
                                    style={{
                                        height: '170px',
                                        width: '240px',
                                        borderRadius: 10,
                                        objectFit: 'contain',
                                    }}
                                    alt="preview"
                                />
                            ) : (
                                <PiImageThin className="text-8xl text-[#666666]" />
                            )}
                        </div>
                    </label>
                    <div className="hidden">
                        <input id="image" type="file" accept="image/*" onChange={handleChange} className="hidden" />
                    </div>
                </div>

                <Form.Item
                    label="Name"
                    name="contentTitle"
                    rules={[{ required: true, message: 'Please enter content title' }]}
                >
                    <Input placeholder="Enter content title" style={{ height: 42 }} />
                </Form.Item>

                <Form.Item
                    label="Product"
                    name="product"
                    rules={[{ required: true, message: 'Please select product' }]}
                >
                    <Select placeholder="Select Product" style={{ height: 42 }}>
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