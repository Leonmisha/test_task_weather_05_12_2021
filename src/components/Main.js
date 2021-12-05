import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { initializeApp } from '../init/rootReducer.js';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    return (
        <div>Init</div>
    );
}

export default Main;
