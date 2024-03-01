import classNames from 'classnames';

type Props = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  open?: boolean;
  width?: string;
  className?: string;
};

const Title = (props: Props | any) => {
  const { children, type = 'h3' } = props;

  return <div className={classNames(['title', type])}>{children}</div>;
};

export default Title;
