import { Button, ConfigProvider, Form, Input, InputNumber, Modal, Select, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../redux/features/categoryApi';
import { useCreateProductMutation, useUpdateProductMutation } from '../../redux/features/productsApi';
import toast from 'react-hot-toast';
import { Product } from '../../pages/dashboard/ProductDetails';
import { imageUrl } from '../../redux/api/baseApi';

interface ProductItemModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    editData: Product | null;
    setEditData: (data: Product | null) => void;
    refetch: () => void;
}

const ProductItemModal = ({ isOpen, setIsOpen, editData, setEditData, refetch }: ProductItemModalProps) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const { data: categoryRes } = useGetCategoriesQuery({});
    const categoryData = categoryRes?.data || [];
    const categories = categoryData.map((item: any) => ({
        _id: item._id,
        name: item.name,
    }));

    useEffect(() => {
        if (editData) {
            form.setFieldsValue({
                name: editData.name,
                color: editData.color,
                price: editData.price,
                category: editData.category?._id,
                description: editData.description,
            });

            if (editData.images && editData.images.length > 0) {
                const files = editData.images.map((imgUrl: string, idx: number) => {
                    const fullUrl = imgUrl.startsWith('http') ? imgUrl : `${imageUrl}${imgUrl}`;
                    return {
                        uid: `existing-${idx}-${imgUrl}`,
                        name: `image-${idx}.${imgUrl.split('.').pop() || 'png'}`,
                        status: 'done',
                        url: fullUrl,
                        thumbUrl: fullUrl,
                        originalUrl: imgUrl,
                    };
                });
                setFileList(files);
            }
        } else {
            form.resetFields();
            setFileList([]);
        }
    }, [editData, form]);

    const handleCancel = () => {
        setIsOpen(false);
        setEditData(null);
        form.resetFields();
        setFileList([]);
    };

    const handlePreview = async (file: any) => {
        setPreviewImage(file.url || file.thumbUrl);
        setPreviewVisible(true);
        setPreviewTitle(file.name || 'Image preview');
    };

    const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
        setFileList(newFileList);
    };

    const handleBeforeUpload = (file: File) => {
        const isImage = file.type.includes('image');
        if (!isImage) {
            toast.error('You can only upload image files!');
            return Upload.LIST_IGNORE;
        }
        return true;
    };

    const onFinish = async (values: any) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('color', values.color);
            formData.append('price', values.price);
            formData.append('category', values.category);

            // Only append new images
            fileList.forEach((file) => {
                if (file.originFileObj) {
                    formData.append('image', file.originFileObj);
                }
            });

            // For editing, send information about which existing images to keep
            if (editData) {
                // Get the original image URLs that are still in the fileList
                const keptExistingImages = fileList.filter((file) => file.originalUrl).map((file) => file.originalUrl);

                // Send the list of existing images that should be kept
                // The backend will remove any images not in this list
                formData.append('image', JSON.stringify(keptExistingImages));
            }

            if (values.description) {
                formData.append('description', values.description);
            }

            let res;
            if (editData) {
                // Update existing product
                res = await updateProduct({ id: editData._id, body: formData }).unwrap();
            } else {
                // Create new product
                res = await createProduct(formData).unwrap();
            }

            if (res?.success) {
                toast.success(`Product ${editData ? 'updated' : 'saved'} successfully!`);
                setIsOpen(false);
                setEditData(null);
                form.resetFields();
                setFileList([]);
                refetch();
            }
        } catch (error) {
            console.error('Error saving product:', error);
            toast.error('Failed to save product. Please try again.');
        }
    };

    return (
        <Modal
            title={
                <p className="text-xl text-primary font-semibold">
                    {editData?._id ? 'Edit Product' : 'Create Product'}
                </p>
            }
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
            width="800px"
            centered
        >
            <ConfigProvider theme={{ token: { borderRadius: 50 } }}>
                <Form form={form} name="product_form" onFinish={onFinish} layout="vertical" className="w-full">
                    <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="w-full">
                            <Form.Item label="Product Name" name="name" rules={[{ required: true }]}>
                                <Input style={{ height: 42, borderRadius: 50 }} placeholder="Enter product name" />
                            </Form.Item>

                            <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                                <Select placeholder="Select Category" style={{ height: 42 }}>
                                    {categories.map((cat: any) => (
                                        <Select.Option key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item label="Color" name="color" rules={[{ required: true }]}>
                                <Input style={{ height: 42, borderRadius: 50 }} placeholder="Enter product color" />
                            </Form.Item>

                            <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                                <InputNumber style={{ width: '100%', borderRadius: 50 }} min={0} addonAfter="$" />
                            </Form.Item>
                        </div>

                        <div className="!w-full">
                            <Form.Item label="Product Images">
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    beforeUpload={handleBeforeUpload}
                                    customRequest={({ file, onSuccess }) => {
                                        // Simulate upload success
                                        setTimeout(() => {
                                            onSuccess?.({
                                                url: URL.createObjectURL(file as Blob),
                                                name: (file as File).name,
                                            });
                                        }, 1000);
                                    }}
                                    multiple
                                    showUploadList={{
                                        showRemoveIcon: true,
                                        showPreviewIcon: true,
                                        showDownloadIcon: false,
                                    }}
                                >
                                    {fileList.length < 5 && (
                                        <div className="!w-full h-full flex flex-col items-center justify-center">
                                            <p>Drop files to upload or</p>
                                            <Button>Browse</Button>
                                        </div>
                                    )}
                                </Upload>
                            </Form.Item>
                        </div>

                        <Form.Item label="Description" name="description" className="col-span-2">
                            <Input.TextArea className="!h-40 rounded-3xl" />
                        </Form.Item>
                    </div>

                    <div className="flex justify-center items-center">
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className="!w-[360px] !h-[48px]"
                                style={{ backgroundColor: '#722ed1', borderColor: '#722ed1' }}
                            >
                                Save & Upload
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </ConfigProvider>

            <Modal open={previewVisible} title={previewTitle} footer={null} onCancel={() => setPreviewVisible(false)}>
                <img alt="preview" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </Modal>
    );
};

export default ProductItemModal;
