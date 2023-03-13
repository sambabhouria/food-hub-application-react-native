import inAppMessaging from '@react-native-firebase/in-app-messaging';
import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/context/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const perStore = persistStore(store);

  async function bootstrap() {
    await inAppMessaging()
      .setMessagesDisplaySuppressed(true)
      .then(response => {
        console.log('@@@@@=>', response);
      });
  }

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={perStore}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
