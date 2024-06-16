"use client";
import { Col, Form as FormAntd, Input, Row } from "antd";
import { useEffect, useMemo } from "react";
import { repoModel } from "./model";

const Form = ({ openId }: { onFinishForm: () => void; openId: string | null }) => {
  const [form] = FormAntd.useForm();

  const detail = useMemo(() => repoModel.state.list.find((repo: any) => repo.id == openId) || {}, [openId, repoModel.state.list]) as any;

  useEffect(() => {
    form.setFieldsValue(detail);
    return () => form.resetFields();
  }, [detail]);

  return (
    <Row gutter={[0, 20]}>
      <Col xs={24}>
        <h1 className="co-neutral-800">
          <strong>{detail.name || ""}</strong>
        </h1>
      </Col>
      <Col xs={24}>
        <FormAntd form={form} layout="vertical">
          {Object.keys(detail).map((key) => (
            <FormAntd.Item label={key} name={key}>
              <Input />
            </FormAntd.Item>
          ))}
        </FormAntd>
      </Col>
    </Row>
  );
};

export default Form;
