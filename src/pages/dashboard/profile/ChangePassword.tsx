import { Button, Form, Input } from 'antd';
import { useChangePasswordMutation } from '../../../redux/features/authApi';
import toast from 'react-hot-toast';

const ChangePassword = () => {
    const [form] = Form.useForm();
    const [changePassword] = useChangePasswordMutation();

    const onFinish = async (values: any) => {
        const payload = {
            currentPassword: values.current_password,
            newPassword: values.new_password,
            confirmPassword: values.confirm_password,
        };
        try {
            const res = await changePassword(payload).unwrap();
            if (res?.success) {
                toast.success('Password changed successfully!');
                form.resetFields();
            }
        } catch (error) {
            console.error('Change password failed:', error);
            toast.error('Failed to change password.');
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <Form form={form} layout="vertical" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            Current Password
                        </label>
                    }
                    name="current_password"
                    rules={[{ required: true, message: 'Please input current password!' }]}
                >
                    <Input.Password
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        placeholder="••••••••"
                        className="h-12 px-6"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            New Password
                        </label>
                    }
                    name="new_password"
                    rules={[{ required: true, message: 'Please input new password!' }]}
                >
                    <Input.Password
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        placeholder="••••••••"
                        className="h-12 px-6"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                            Confirm Password
                        </label>
                    }
                    name="confirm_password"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input.Password
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        placeholder="••••••••"
                        className="h-12 px-6"
                    />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                        shape="round"
                        type="primary"
                        htmlType="submit"
                        style={{
                            height: 45,
                            width: '100%',
                            fontWeight: 500,
                        }}
                    >
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangePassword;
