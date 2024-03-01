import { ScriptProps } from 'next/script';
import styles from '@/common/styles/layout.module.scss';
import { bemModule } from '@jahed/bem';
import { Button, Col, Popover, Row } from 'antd';
import { FaUserEdit, IoIosLogOut, RxAvatar } from '@/uikit/icon/index.icon';

const bem = bemModule(styles);

const profile = (
  <div className={bem('article-popover-profile')}>
    <ul className="p-0 m-0">
      <li>
        <Row align={'middle'}>
          <Col>
            <FaUserEdit size={20} />
          </Col>
          <Col className="ms-2">Thông tin cá nhân</Col>
        </Row>
      </li>
      <li>
        <Row align={'middle'}>
          <Col>
            <IoIosLogOut size={20} />
          </Col>
          <Col className="ms-2">Đăng xuất</Col>
        </Row>
      </li>
    </ul>
  </div>
);

const HeaderRightLayout: React.FC<ScriptProps> = (props) => {
  const { children } = props;
  return (
    <div className="row">
      <div className="col-auto">
        <div className={bem('header__item', { hover: true })}>
          <Popover overlayInnerStyle={{ padding: '0px' }} placement="bottom" title={null} content={profile}>
            <Row className="mx-2 user-select-none" gutter={[10, 0]} align={'middle'} justify={'center'}>
              <Col>
                <RxAvatar className={'color-primary'} size={24} />
              </Col>
              <Col>
                <span className="co-grey-200">Nguyễn Văn Nam</span>
              </Col>
            </Row>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightLayout;
