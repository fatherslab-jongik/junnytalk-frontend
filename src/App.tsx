
import React, { FormEvent, useState } from 'react'
import { Provider } from 'react-redux';

import "./App.css";
import Counter from './components/pages/Counter/counter';
import store from './store';

const App: React.FC = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">JunnyTalk WEB Front-End</header>
        <Counter props={0} />
        </Provider>
    </div>
  );
}

export default App;
