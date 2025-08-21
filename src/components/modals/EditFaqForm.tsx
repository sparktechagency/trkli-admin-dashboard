import { Form, Input, Button } from 'antd';
import { AiOutlineEdit } from 'react-icons/ai';

const { TextArea } = Input;

const EditFaqForm = ({ onFinish, editData }: { onFinish: (values: any) => void; editData: any }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        const faqObject = {
            id: editData?._id,
            question: values.productName,
            answer: values.answer,
        };
        onFinish(faqObject);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
                productName: editData?.question,
                answer: editData?.answer,
            }}
        >
            {/* Question */}
            <Form.Item
                label="Question"
                name="productName"
                rules={[{ required: true, message: 'Please enter a question' }]}
            >
                <Input style={{ height: 42 }} placeholder="Your faq question" />
            </Form.Item>

            {/* Answer */}
            <Form.Item label="Answer" name="answer" rules={[{ required: true, message: 'Please enter an answer' }]}>
                <TextArea
                    style={{
                        width: '100%',
                        resize: 'none',
                        borderRadius: 6,
                        backgroundColor: '#F9F9F9',
                    }}
                    rows={3}
                    placeholder="Your faq answer"
                />
            </Form.Item>

            {/* Submit */}
            <Form.Item
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    icon={<AiOutlineEdit />}
                    htmlType="submit"
                    style={{ height: 40, borderRadius: 50 }}
                    type="primary"
                >
                    Edit FAQ
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditFaqForm;
