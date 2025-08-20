import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { useNavigate } from 'react-router';
import { useResetPasswordMutation } from '../../redux/features/authApi';
import toast from 'react-hot-toast';

type NewPasswordFormValues = {
    new_password: string;
    confirm_password: string;
};

const NewPassword = () => {
    const [resetPassword] = useResetPasswordMutation();
    const navigate = useNavigate();
    const token = new URLSearchParams(window.location.search).get('token');

    const onFinish: FormProps<NewPasswordFormValues>['onFinish'] = async (values) => {
        const payload = {
            newPassword: values.new_password,
            confirmPassword: values.confirm_password,
        };
        try {
            const res = await resetPassword({
                payload,
                token,
            }).unwrap();

            if (res?.success) {
                navigate('/login');
                toast.success(res?.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(
                (error as { data?: { message?: string } })?.data?.message || 'Reset password failed! Try Again Please.',
            );
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#8F00FF',

                    colorBgContainer: '#F1F4F9',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: 'transparent',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: 'transparent',
                        controlOutline: 'none',
                        activeBorderColor: 'transparent',
                    },
                },
            }}
        >
            <div
                className="flex items-center justify-center h-screen"
                style={{
                    backgroundImage: `url('/auth.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                }}
            >
                <div className="bg-white w-[630px] rounded-lg shadow-lg p-10 ">
                    <div className="text-primaryText max-w-md mx-auto space-y-3 text-center">
                        <h1 className="text-3xl  font-medium text-center mt-2">Set a new password</h1>
                        <p>Create a new password. Ensure it differs from previous ones for security</p>
                    </div>

                    <Form
                        name="normal_NewPassword"
                        className="NewPassword-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label={
                                <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                                    New Password
                                </label>
                            }
                            name="new_password"
                            rules={[{ required: true, message: 'Please input new password!' }]}
                        >
                            <Input.Password placeholder="KK!@#$15856" className=" h-12 px-6" />
                        </Form.Item>
                        <Form.Item
                            label={
                                <label htmlFor="password" className="block text-primaryText mb-1 text-lg">
                                    Confirm Password
                                </label>
                            }
                            name="confirm_password"
                            rules={[{ required: true, message: 'Please input confirm password!' }]}
                        >
                            <Input.Password placeholder="KK!@#$15856" className="h-12 px-6" />
                        </Form.Item>

                        <Form.Item>
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
                                Update Password
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default NewPassword;
