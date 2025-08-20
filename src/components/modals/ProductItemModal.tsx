import { Button, ConfigProvider, Form, Input, InputNumber, Modal, Select, Upload } from 'antd';
import { useEffect } from 'react';
import { Option } from 'antd/es/mentions';
import { Product } from '../../pages/dashboard/ProductDetails';

// Define the Product type if not already imported
// type Product = {
//   id?: string | number;
//   productName?: string;
//   categories?: string[];
//   stock?: string | number;
//   brand?: string;
//   color?: string;
//   regularPrice?: number;
//   offerPrice?: number;
//   images?: any[];
//   description?: string;
// };

interface ProductItemModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  editData: Product | null;
  setEditData: (data: Product | null) => void; 
}

const ProductItemModal = ({
    isOpen,
    setIsOpen,
    editData,
    setEditData,
}: ProductItemModalProps) => {
    const [form] = Form.useForm();

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (values: any) => {
        console.log('Form Values:', {
            ...values,
        });
        setIsOpen(false);
        setEditData(null);
        form.resetFields();
    };

    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData);
        }
    }, [editData, form]);

    return (
        <Modal
            title={<p className="text-xl text-primary font-semibold">{editData?.id ? 'Edit Class' : 'Create Class'}</p>}
            open={isOpen}
            onCancel={() => {
                setIsOpen(false);
                setEditData(null);
                form.resetFields();
            }}
            footer={null}
            width="800px"
            centered
        >
            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 50,
                    },
                }}
            >
                <Form form={form} name="product_form" onFinish={onFinish} layout="vertical" className="w-full">
                    <div className=" grid grid-cols-2 gap-3 w-full">
                        <div className="w-full">
                            <Form.Item label="Product Name" name="productName" rules={[{ required: true }]}>
                                <Input style={{ height: 42, borderRadius: 50 }} placeholder="Enter product name" />
                            </Form.Item>

                            <Form.Item label="Categories" name="categories" rules={[{ required: true }]}>
                                <Select placeholder="Select Categories" mode="multiple" style={{ height: 42 }}>
                                    <Option value="electronics">Electronics</Option>
                                    <Option value="accessories">Accessories</Option>
                                    <Option value="gadgets">Gadgets</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Stock" name="stock" rules={[{ required: true }]}>
                                <Input
                                    style={{ height: 42, borderRadius: 50, width: '100%' }}
                                    suffix={<p className="text-green-500"> Active </p>}
                                />
                            </Form.Item>

                            <div className="flex items-center gap-2 w-full">
                                <Form.Item label="Brand" name="brand" className="w-full" rules={[{ required: true }]}>
                                    <Select placeholder="Select brand" style={{ height: 42, width: '100%' }}>
                                        <Option value="brand1">Brand1</Option>
                                        <Option value="brand2">Brand2</Option>
                                        <Option value="brand3">Brand3</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Color" name="color" className="w-full" rules={[{ required: true }]}>
                                    <Select placeholder="Select Color" style={{ height: 42, width: '100%' }}>
                                        <Option value="black">Black</Option>
                                        <Option value="white">White</Option>
                                        <Option value="blue">Blue</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <Form.Item label="Regular Price" name="regularPrice" rules={[{ required: true }]}>
                                    <InputNumber min={0} addonAfter="$" />
                                </Form.Item>

                                <Form.Item label="Offer Price" name="offerPrice" rules={[{ required: true }]}>
                                    <InputNumber min={0} addonAfter="$" />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="!w-full">
                            <Form.Item
                                className="!w-full"
                                label="Product Images"
                                name="images"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <Upload listType="picture-card" beforeUpload={() => false} className="!w-full">
                                    <div className="!w-full h-full flex flex-col items-center justify-center">
                                        <p>Drop files to upload or</p>
                                        <Button>Browse</Button>
                                    </div>
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
                                style={{
                                    backgroundColor: '#722ed1',
                                    borderColor: '#722ed1',
                                }}
                            >
                                Save & Upload
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </ConfigProvider>
        </Modal>
    );
};

export default ProductItemModal;
