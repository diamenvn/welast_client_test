"use client";

import Content from "@/common/components/layout/content.layout";
import HeaderContentLayout from "@/common/components/layout/header-content.layout";
import { POSTS_TABLE_COLUMNS } from "@/constants/posts.constant";
import { POST_CONFIG } from "@/config/posts.config";
import { Table } from "@/uikit";
import { Button, Col, Modal, Row } from "antd";
import { useMemo, useState } from "react";

const description = (
  <span>
    Hiển thị danh sách các bài viết (posts). Mỗi bài viết sẽ có tiêu đề, nội dung và tác giả
    <br />
    Nhấn thêm mới bên phải để thêm
  </span>
);

const PostPage = () => {
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

  const dataSource = useMemo(() => {
    return POST_CONFIG;
  }, [POST_CONFIG]);

  return (
    <Content>
      <HeaderContentLayout title="Danh sách bài viết" rightContent={rightContent} description={description} />
      <Table columns={POSTS_TABLE_COLUMNS} dataSource={dataSource} />
      <Modal onCancel={() => setOpenForm(false)} open={openForm}>
        <span>Không viết kịp ạ, hết giờ mất rồi :(</span>
      </Modal>
    </Content>
  );
};

export default PostPage;
