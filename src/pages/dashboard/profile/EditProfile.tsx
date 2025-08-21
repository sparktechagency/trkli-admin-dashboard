import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { CiEdit } from 'react-icons/ci';
import { useProfileQuery, useUpdateProfileMutation } from '../../../redux/features/authApi';
import { imageUrl } from '../../../redux/api/baseApi';

const EditProfile: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [form] = Form.useForm();

    const { data } = useProfileQuery({});
    const [updateProfile] = useUpdateProfileMutation();

    const { email, name, profile, address, contact, occupation } = data?.data || {};

    // set values once data is fetched
    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                name: name,
                email: email,
                address: address,
                phone: contact,
                designation: occupation,
            });
            if (profile) {
                setImagePreview(profile.startsWith('http') ? profile : `${imageUrl}${profile}`);
            }
        }
    }, [data, form, name, email, profile]);

    const onFinish = async (values: any) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('occupation', values.designation);
            formData.append('contact', values.phone);
            formData.append('address', values.address);
            ``;
            if (file) {
                formData.append('image', file);
            }

            const res = await updateProfile(formData).unwrap();
            console.log('Profile updated:', res);
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
                setFile(selectedFile);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <Form form={form} name="update_profile" layout="vertical" onFinish={onFinish}>
                {/* Profile Image */}
                <div className="flex justify-center">
                    <div className="w-[150px] h-[150px] relative">
                        <img
                            src={imagePreview}
                            alt="User Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <label
                            className="absolute bottom-[10%] cursor-pointer right-[5%] bg-primary rounded-full p-1 text-white"
                            htmlFor="imageUploadBanner"
                        >
                            <CiEdit size={25} />
                        </label>

                        <input
                            id="imageUploadBanner"
                            type="file"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                    </div>
                </div>

                {/* Name */}
                <Form.Item
                    label={
                        <label htmlFor="name" className="block text-primaryText mb-1 text-lg">
                            Full Name
                        </label>
                    }
                    name="name"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input
                        className="h-12"
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        placeholder="Enter your name"
                    />
                </Form.Item>

                {/* Email */}
                <Form.Item
                    label={
                        <label htmlFor="email" className="block text-primaryText mb-1 text-lg">
                            Email
                        </label>
                    }
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        disabled
                        className="h-12"
                        placeholder="Enter your email"
                    />
                </Form.Item>

                {/* Designation */}
                <Form.Item
                    label={
                        <label htmlFor="designation" className="block text-primaryText mb-1 text-lg">
                            Designation
                        </label>
                    }
                    name="designation"
                    rules={[{ required: true, message: 'Please input your designation!' }]}
                >
                    <Input
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        disabled
                        className="h-12"
                        placeholder="Enter your designation"
                    />
                </Form.Item>

                {/* Phone Number */}
                <Form.Item
                    label={
                        <label htmlFor="phone" className="block text-primaryText mb-1 text-lg">
                            Phone Number
                        </label>
                    }
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        className="h-12"
                        placeholder="Enter your phone number"
                    />
                </Form.Item>

                {/* Address */}
                <Form.Item
                    label={
                        <label htmlFor="address" className="block text-primaryText mb-1 text-lg">
                            Address
                        </label>
                    }
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input
                        style={{
                            borderRadius: '50px',
                            paddingLeft: '16px',
                        }}
                        className="h-12"
                        placeholder="Enter your address"
                    />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                        style={{
                            height: 42,
                            borderRadius: '50px',
                        }}
                        type="primary"
                        htmlType="submit"
                    >
                        Update Profile
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProfile;
