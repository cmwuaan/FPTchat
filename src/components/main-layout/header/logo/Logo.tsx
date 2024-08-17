import Classes from './Logo.module.scss';

export const Logo: React.FC = () => {
  const onClick = () => {
    window.location.href = '/';
  };

  return (
    <div className={Classes.Logo} onClick={onClick}>
      <img
        className={Classes.LogoImage}
        src="https://firebasestorage.googleapis.com/v0/b/exe-rag.appspot.com/o/fpt-chat%2Ffptlogo.png?alt=media&token=f4355cdc-02a7-4049-8bb1-2c2b7826aa00"
      />
      <h1 className={Classes.LogoTitle}>ChatFPT</h1>
    </div>
  );
};
