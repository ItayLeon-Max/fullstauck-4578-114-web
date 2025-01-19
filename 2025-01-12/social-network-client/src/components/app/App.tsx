import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout/Layout';

export default function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </BrowserRouter>
        </div>
    );
}