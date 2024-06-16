"use client";

import Content from "@/common/components/layout/content.layout";
import HeaderContentLayout from "@/common/components/layout/header-content.layout";
import { POSTS_TABLE_COLUMNS } from "@/constants/posts.constant";
import { Table } from "@/uikit";
import { Button, Col, Drawer, Dropdown, MenuProps, Row, Space, message } from "antd";
import { useEffect, useMemo, useState } from "react";
import { DownOutlined, EyeOutlined } from "@ant-design/icons";
import { connect } from "foca";
import { repoModel } from "./model";
import Form from "./_form";

const description = (
  <span>
    Fetch repository data from the Express API created in (A).
    <br />
    Display a list of repositories. Include the repository name, description, language, and forks count in the list.
  </span>
);

const initLanguageObj = [
  {
    label: "All",
    key: "all",
  },
];

const PostPage = (props: any) => {
  const { listRepositories } = props;
  const [openId, setOpenId] = useState<string | null>(null);
  const [repos, setRepos] = useState([]) as any;

  const languageItem: MenuProps["items"] = useMemo(() => {
    return listRepositories
      .filter((repo: any) => !!repo.language)
      .reduce((obj: any, repo: any) => {
        if (obj.findIndex((o: any) => o.key == repo.language) == -1) {
          obj.push({
            label: repo.language,
            key: repo.language,
          });
          return obj;
        }
        return obj;
      }, initLanguageObj);
  }, [listRepositories]);

  useEffect(() => {
    setRepos(listRepositories);

    return () => {};
  }, [listRepositories]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info(`Filter language ${e.key}`);
    const cloneListRepo = [...listRepositories];
    setRepos(e.key != "all" ? cloneListRepo.filter((repo: any) => repo.language == e.key) : cloneListRepo);
  };

  const menuProps = {
    items: languageItem,
    onClick: handleMenuClick,
  };
  useEffect(() => {
    const sto = setTimeout(() => {
      repoModel.getListRepositories();
    });
    return () => clearTimeout(sto);
  }, []);

  const rightContent = (
    <Row align={"middle"} gutter={[10, 0]}>
      <Col>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Language
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );

  const dataSource = useMemo(() => {
    return repos;
  }, [repos]);

  const columns = useMemo(() => {
    return [
      ...POSTS_TABLE_COLUMNS,
      {
        title: "Detail",
        dataIndex: "detail",
        key: "detail",
        align: "center" as const,
        width: 70,
        render: (_: any, record: any) => {
          return (
            <span onClick={() => setOpenId(record.id)} className="icon-hover">
              <EyeOutlined size={30} />
            </span>
          );
        },
      },
    ];
  }, [POSTS_TABLE_COLUMNS]);

  return (
    <Content>
      <HeaderContentLayout title="List repositories" rightContent={rightContent} description={description} />
      <Table columns={columns} dataSource={dataSource} />
      <Drawer width={"700px"} destroyOnClose onClose={() => setOpenId(null)} footer={null} open={!!openId}>
        <Form openId={openId} onFinishForm={() => setOpenId(null)} />
      </Drawer>
    </Content>
  );
};

const mapStateToProps = () => {
  return {
    listRepositories: repoModel.state.list as any,
  };
};

export default connect(mapStateToProps)(PostPage as any) as any;
