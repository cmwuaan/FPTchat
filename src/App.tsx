import '@fortawesome/fontawesome-free/css/all.min.css';
import { MainLayout } from './components/main-layout/MainLayout';
import { Chat } from './modules/chat/Chat';

import Classes from './App.module.scss';
import { ChatInput } from './components/chat-input/ChatInput';
import { useHandleChat } from './hooks/useHandleChat';

const App: React.FC = () => {
  const {
    searchValue,
    conversionList,
    isSendingQuestion,
    setSearchValue,
    setConversionList,
    onChangeInput,
    onKeyDownEnter,
    onUpdateConversionList,
  } = useHandleChat();

  return (
    <MainLayout>
      <main className={Classes.Container}>
        <Chat conversionList={conversionList} />
        <ChatInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          conversionList={conversionList}
          isLoading={isSendingQuestion}
          onChangeInput={onChangeInput}
          onKeyDownEnter={onKeyDownEnter}
          onUpdateConversionList={onUpdateConversionList}
          setConversionList={setConversionList}
        />
      </main>
    </MainLayout>
  );
};

export default App;
