import { Button, ConfigProvider, Form, Input, InputNumber, Modal, Select, Upload } from "antd";
import { useEffect } from "react";
import { Option } from "antd/es/mentions";



type ClassData = {
    id: string;
    className: string;
    classImage: string;
    description: string;
    features: string[];
    price: number;
};

const ProductItemModal = ({
    isOpen,
    setIsOpen,
    editData,
    setEditData
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    editData: ClassData | null;
    setEditData: (data: ClassData | null) => void;
}) => {
    const [form] = Form.useForm();


    const normFile = (e:any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (values: any) => {
        console.log("Form Values:", {
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
            title={<p className="text-xl text-primary font-semibold">{editData?.id ? "Edit Class" : "Create Class"}</p>}
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

                <Form
                    form={form}
                    name="product_form"
                    onFinish={onFinish}
                    layout="vertical" 
                    className="w-full" 
                >
                    <div className=" flex items-center gap-3 w-full">
                        <div>
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
                                <Input style={{ height: 42, borderRadius: 50, width: "100%" }} suffix={<p className="text-green-500"> Active </p>} />
                            </Form.Item>

                            <div className="flex items-center gap-2 w-full">
                                <Form.Item label="Brand" name="brand" className="w-full" rules={[{ required: true }]}>
                                    <Select placeholder="Select brand" style={{ height: 42, width: "100%" }}>
                                        <Option value="brand1">Brand1</Option>
                                        <Option value="brand2">Brand2</Option>
                                        <Option value="brand3">Brand3</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Color" name="color" rules={[{ required: true }]}>
                                    <Select placeholder="Select Color" style={{ height: 42, width: "100%" }}>
                                        <Option value="black">Black</Option>
                                        <Option value="white">White</Option>
                                        <Option value="blue">Blue</Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <Form.Item label="Regular Price" name="regularPrice" rules={[{ required: true }]}>
                                <InputNumber min={0} addonAfter="$" />
                            </Form.Item>

                            <Form.Item label="Offer Price" name="offerPrice" rules={[{ required: true }]}>
                                <InputNumber min={0} addonAfter="$" />
                            </Form.Item>
                        </div>

                        <div>
                            <Form.Item label="Description" name="description">
                                <Input.TextArea />
                            </Form.Item>

                            <Form.Item label="Product Images" name="images" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload listType="picture-card" beforeUpload={() => false}>
                                    <div>
                                        <p>Drop files to upload or</p>
                                        <Button>Browse</Button>
                                    </div>
                                </Upload>
                            </Form.Item>

                        </div>
                    </div>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#722ed1', borderColor: '#722ed1' }}>
                            Save & Upload
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </Modal>
    );
};

export default ProductItemModal;
