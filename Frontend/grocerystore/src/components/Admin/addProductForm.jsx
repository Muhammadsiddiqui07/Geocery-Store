import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Select, Upload, Rate } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
import Swal from "sweetalert2";



const ProductForm = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            const values = await form.validateFields();

            const formData = new FormData();
            formData.append("productId", values.productId);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("category", values.category);
            formData.append("rating", values.rating);

            if (fileList.length > 0) {
                formData.append("image", fileList[0].originFileObj);
            }

            const response = await axios.post(
                "http://localhost:4000/api/user/productservices/addproduct",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            Swal.fire({
                icon: "success",
                title: "Product Added!",
                text: response.data.message,
                confirmButtonColor: "#16a34a",
            });

            form.resetFields();
            setFileList([]);
            setOpen(false);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                    error.response?.data?.message ||
                    "Something went wrong while adding product",
                confirmButtonColor: "#d33",
            });
        } finally {
            setConfirmLoading(false);
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Product
            </Button>
            <Modal
                title="Add Product"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Save"
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="productForm"
                >
                    {/* Product ID */}
                    <Form.Item
                        label="Product ID"
                        name="productId"
                        rules={[{ required: true, message: 'Please enter product ID!' }]}
                    >
                        <Input placeholder="Enter product ID" />
                    </Form.Item>

                    {/* Product Name */}
                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter product name!' }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>

                    {/* Price */}
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please enter price!' }]}
                    >
                        <InputNumber
                            min={0}
                            className="w-full"
                            placeholder="Enter price"
                        />
                    </Form.Item>

                    {/* Category */}
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please select category!' }]}
                    >
                        <Select placeholder="Select category">
                            <Select.Option value="electronics">Electronics</Select.Option>
                            <Select.Option value="clothing">Clothing</Select.Option>
                            <Select.Option value="grocery">Grocery</Select.Option>
                            <Select.Option value="furniture">Furniture</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Image Upload */}
                    <Form.Item
                        label="Product Image"
                        name="image"
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false} // prevent auto upload
                            fileList={fileList}
                            onChange={({ fileList }) => setFileList(fileList)}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    {/* Rating */}
                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please provide a rating!' }]}
                    >
                        <Rate />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ProductForm;
