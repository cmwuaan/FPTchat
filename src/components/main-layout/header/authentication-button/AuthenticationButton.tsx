import classnames from 'classnames';
import Classes from './AuthenticationButton.module.scss';

export const AuthenticationButton: React.FC = () => {
  return (
    <div className={Classes.ButtonWrapper}>
      <button className={classnames(Classes.Button, Classes.Outline)}>Đăng ký</button>
      <button className={Classes.Button}>Đăng nhập</button>
    </div>
  );
};
