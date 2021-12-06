import { createActions } from 'redux-actions'

export const { setCurrent, setCustomTemparature, setIsCustom } = createActions({
    setCurrent: (current) => current,
    setCustomTemparature: (temparature) => temparature,
    setIsCustom: (isCustom) => isCustom
})
