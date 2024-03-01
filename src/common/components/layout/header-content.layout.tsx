import { HeaderContentProps } from '@/interfaces';
import { Col, Row } from 'antd';
import { memo } from 'react';
import styles from '@/common/styles/layout.module.scss';
import { bemModule } from '@jahed/bem';
const bem = bemModule(styles);

const HeaderContent = (props: HeaderContentProps) => {
  const { title, description, leftContent, rightContent } = props;
  return (
    <div className={bem('header-content')}>
      <Row align={'middle'}>
        {!!title && (
          <Col>
            <h1 className="co-neutral-800">
              <strong>{title}</strong>
            </h1>
          </Col>
        )}
        {!!rightContent && (
          <Col flex={1}>
            <Row justify={'end'}>
              <Col>{rightContent}</Col>
            </Row>
          </Col>
        )}
      </Row>
      <Row>
        <Col span={24}>
          <span className={bem('description-text')}>{description}</span>
        </Col>
      </Row>
    </div>
  );
};

export default memo(HeaderContent);
