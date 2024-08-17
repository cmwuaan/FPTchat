import '@fortawesome/fontawesome-free/css/all.min.css';
import { MainLayout } from './components/main-layout/MainLayout';
import { Chat } from './modules/chat/Chat';

import Classes from './App.module.scss';
import { ChatInput } from './components/chat-input/ChatInput';
import { useHandleChat } from './hooks/useHandleChat';

const App: React.FC = () => {
  const { searchValue, conversionList, isSendingQuestion, onChangeInput, onKeyDownEnter, onUpdateConversionList } =
    useHandleChat();

  return (
    <MainLayout>
      <main className={Classes.Container}>
        <Chat conversionList={conversionList} />
        <ChatInput
          searchValue={searchValue}
          isLoading={isSendingQuestion}
          onChangeInput={onChangeInput}
          onKeyDownEnter={onKeyDownEnter}
          onUpdateConversionList={onUpdateConversionList}
        />
      </main>
    </MainLayout>
  );
};

export default App;
