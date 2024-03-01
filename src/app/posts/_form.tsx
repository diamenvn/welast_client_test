"use client";
import { Button, Form, Input, Typography } from "antd";
import { useEffect } from "react";
import { postsModel } from "./model";

const AddPost = ({ onFinishForm }: { onFinishForm: () => void }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    return () => form.resetFields()
  }, [])

  const onFinish = async (values: {postTitle: string, postContent: string, author?: string}) => {
    postsModel.updateState({
        ...postsModel.state,
        posts: [...postsModel.state.posts, values]
    })
    onFinishForm?.();
    form.resetFields()
  }
  return (
    <>
      <Typography.Title>
        <strong>Thêm mới bài viết</strong>
      </Typography.Title>
      <Form onFinish={onFinish} form={form} layout="vertical">
        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]} label="Tiêu đề" name="postTitle">
          <Input></Input>
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]} label="Nội dung" name="postContent">
          <Input.TextArea placeholder="Nội dung..."></Input.TextArea>
        </Form.Item>
        <Form.Item label="Tác giả" name="author">
          <Input></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm mới
        </Button>
      </Form>
    </>
  );
};

export default AddPost;
