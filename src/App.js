import { Provider } from 'react-redux';

import store from './init/store.js';
import Main from './components/Main';
import Bootstrap from './components/bootstrap/index.js';

const App = () => {
    return (
        <Provider store = { store }>
            <Bootstrap>
                <Main />
            </Bootstrap>
        </Provider>
    );
}

export default App;
