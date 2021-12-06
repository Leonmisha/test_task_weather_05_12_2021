import { createActions } from 'redux-actions'

export const { setCoords, setLocationName } = createActions({
    setCoords: (position) => position,
    setLocationName: (name) => name
})
