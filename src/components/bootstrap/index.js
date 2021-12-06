import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { isInitializedApp } from './store/selectors';
import { initializeApp } from './store/actions';

const Bootstrap = ({ children }) => {
    const isInitialized = useSelector(isInitializedApp);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    return isInitialized && children
}

export default Bootstrap;
