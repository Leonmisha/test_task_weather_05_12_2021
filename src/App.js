import { Provider } from 'react-redux';

import store from './init/store.js';
import Main from './components/Main.js';

const App = () => {
    return (
        <Provider store = { store }>
            <Main />
        </Provider>
    );
}

export default App;
