import { ScriptProps } from "next/script";
import styles from "@/common/styles/layout.module.scss";
import classNames from "classnames";
import { bemModule } from "@jahed/bem";
import { Image } from "antd";
import Logo from "@/assets/svg/logo.svg";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const bem = bemModule(styles);

const HeaderLeftLayout: React.FC<ScriptProps> = () => {
  return (
    <div className="row">
      <div className="col-auto">
        <div className={bem("header__item")}>
          <Link href={"/"}>
            <div className="d-flex align-items-center h-100">
              <span className="uni-brand-text ms-1">Block</span>
              <span className="uni-brand-text uni-brand-text--domain">odyssey</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className={bem("header__item")}>
          <div className="d-flex align-items-center">
            <div className="position-relative">
              <span className={bem("header__search-icon")}>
                <SearchOutlined sizes={"20px"} />
              </span>
              <input
                className={classNames([
                  bem("header__input-search"),
                  "form-control",
                ])}
                placeholder="Tìm kiếm trên ứng dụng"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeftLayout;
