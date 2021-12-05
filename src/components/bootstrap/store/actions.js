import { createActions } from 'redux-actions'

export const { initializeApp, setInit } = createActions({
    initializeApp: () => void 0,
    setInit: (newInit) => newInit
})
