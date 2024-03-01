import { ContentProps } from '@/interfaces';
import styles from '@/common/styles/layout.module.scss';
import { bemModule } from '@jahed/bem';

const bem = bemModule(styles);

const Content = (props: ContentProps) => {
  const { children, size } = props;
  return <div className={bem('content-page', { small: size == 'small', medium: size == 'medium', large: size == 'large' })}>{children}</div>;
};

export default Content;
