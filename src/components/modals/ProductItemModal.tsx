import { Button, ConfigProvider, Form, Input, InputNumber, Modal, Select, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../redux/features/categoryApi';
import { useCreateProductMutation } from '../../redux/features/productsApi';
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

  const [createProduct] = useCreateProductMutation();
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
            uid: `-${idx}`,
            name: imgUrl.split('/').pop() || `image-${idx}`,
            status: 'done',
            url: fullUrl,
          };
        });
        console.log('fileList:', files);
        setFileList(files);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [editData, form]);

  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('color', values.color);
      formData.append('price', values.price);
      formData.append('category', values.category);

      const existingImages = fileList
        .filter((file) => !file.originFileObj)
        .map((file) => file.url);
      const newImages = fileList.filter((file) => file.originFileObj);

      newImages.forEach((file) => {
        formData.append('image', file.originFileObj);
      });

      if (existingImages.length > 0) {
        formData.append('existingImages', JSON.stringify(existingImages));
      }

      if (values.description) {
        formData.append('description', values.description);
      }

      const res = await createProduct(formData).unwrap();
      if (res?.success) {
        toast.success('Product saved successfully!');
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

  const handleCancel = () => {
    setIsOpen(false);
    setEditData(null);
    form.resetFields();
    setFileList([]);
  };

  return (
    <Modal
      title={<p className="text-xl text-primary font-semibold">{editData?._id ? 'Edit Product' : 'Create Product'}</p>}
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
              <Form.Item
                label="Product Images"
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  beforeUpload={() => false}
                  onChange={({ fileList: newFileList }) => setFileList(newFileList)}
                  onPreview={(file) => {
                    window.open(
                      file.url ||
                        (file.originFileObj ? URL.createObjectURL(file.originFileObj) : undefined),
                      '_blank'
                    );
                  }}
                  multiple
                  showUploadList={{
                    showRemoveIcon: true,
                    showPreviewIcon: true,
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
    </Modal>
  );
};

export default ProductItemModal;