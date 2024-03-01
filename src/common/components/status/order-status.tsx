import styles from '@/common/styles/status.module.scss';
import { bemModule } from '@jahed/bem';
type Props = {
  type: 0 | 1 | 2 | 3;
};

const EnumToString = {
  0: 'Chờ xử lý',
  1: 'Đang xử lý',
  2: 'Đang vận chuyển',
  3: 'Hoàn thành',
};

const EnumToClassName = {
  0: 'waiting',
  1: 'processing',
  2: 'shipping',
  3: 'finish',
};

const bem = bemModule(styles);

export const RenderOrderStatus = (props: Props) => {
  const { type } = props;
  return <div className={bem('order__status', { [EnumToClassName[type]]: true })}>{EnumToString[type]}</div>;
};
