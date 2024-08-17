import { AuthenticationButton } from './authentication-button/AuthenticationButton';
import { Logo } from './logo/Logo';
import Classes from './Header.module.scss';
import { ConditionalComponent } from '../../conditional-component/ConditionalComponent';
import { ThemeButton } from './theme-button/ThemeButton';
import { LanguageButton } from './language-button/LanguageButton';

export const Header: React.FC = () => {
  const isAuthenticated = true;
  return (
    <header className={Classes.Header}>
      <Logo />
      <ConditionalComponent condition={!isAuthenticated}>
        <AuthenticationButton />
      </ConditionalComponent>
      <ConditionalComponent condition={isAuthenticated}>
        <div className={Classes.ButtonWrapper}>
          <ThemeButton />
          <LanguageButton />
        </div>
      </ConditionalComponent>
    </header>
  );
};
