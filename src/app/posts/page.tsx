"use client";

import Content from "@/common/components/layout/content.layout";
import HeaderContentLayout from "@/common/components/layout/header-content.layout";
import { POSTS_TABLE_COLUMNS } from "@/constants/posts.constant";
import { POST_CONFIG } from "@/config/posts.config";
import { Table } from "@/uikit";
import { Button, Col, Modal, Row } from "antd";
import { useMemo, useState } from "react";
import AddPost from "./_form";
import { connect } from "foca";
import { postsModel } from "./model";
import { IPostPageProps } from "@/interfaces";

const description = (
  <span>
    Hiển thị danh sách các bài viết (posts). Mỗi bài viết sẽ có tiêu đề, nội dung và tác giả
    <br />
    Nhấn thêm mới bên phải để thêm
  </span>
);

const PostPage = (props: IPostPageProps) => {
  const { posts } = props;
  const [openForm, setOpenForm] = useState<boolean>(false);
  const addPost = () => {
    setOpenForm(true);
  };

  const rightContent = (
    <Row align={"middle"} gutter={[10, 0]}>
      <Col>
        <Button onClick={addPost} type="primary">
          Thêm mới
        </Button>
      </Col>
    </Row>
  );

  console.log(posts);
  

  const dataSource = useMemo(() => {
    return posts;
  }, [posts]);

  return (
    <Content>
      <HeaderContentLayout title="Danh sách bài viết" rightContent={rightContent} description={description} />
      <Table columns={POSTS_TABLE_COLUMNS} dataSource={dataSource} />
      <Modal onCancel={() => setOpenForm(false)} footer={null} open={openForm}>
        <AddPost onFinishForm={() => setOpenForm(false)} />
      </Modal>
    </Content>
  );
};

const mapStateToProps = () => {
  return {
    posts: postsModel.state.posts,
  };
};

export default connect(mapStateToProps)(PostPage);
