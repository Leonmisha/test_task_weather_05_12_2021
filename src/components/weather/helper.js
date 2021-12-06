const hextoDecimal = (hex) => parseInt(hex, 16)
const decimalToHex = (dec) => dec.toString(16)

const hexCtoRGB = (hexC) => ({
    R: hextoDecimal(hexC.slice(1,3)),
    G: hextoDecimal(hexC.slice(3, 5)),
    B: hextoDecimal(hexC.slice(5, 7))
})
const rgbToHexC = ({R, G, B}) => {
    const RR = ('0'+decimalToHex(R)).slice(-2)
    const GG = ('0'+decimalToHex(G)).slice(-2)
    const BB = ('0'+decimalToHex(B)).slice(-2)
    return '#' + RR + GG + BB
}

export const calcColorByTemperature = (cel) => {
    const celcius = Number(cel)
    const minTemp = { celcius: -10, RGB: hexCtoRGB('#00ffff') }
    const maxTemp = { celcius: 30, RGB: hexCtoRGB('#ff8c00') }
    const middleTemp = { celcius: 10, RGB: hexCtoRGB('#fff700') }

    if (celcius <= minTemp.celcius) {
        return rgbToHexC(minTemp.RGB)
    }
    if (celcius >= maxTemp.celcius) {
        return rgbToHexC(maxTemp.RGB)
    }

    if (celcius === middleTemp.celcius) {
        return rgbToHexC(middleTemp.RGB)
    }

    let min, max
    if (celcius < middleTemp.celcius) {
        min = minTemp
        max = middleTemp
    } else {
        min = middleTemp
        max = maxTemp
    }
    const koef = (-min.celcius + celcius) / (max.celcius - min.celcius)

    const rgbResult = ['R','G','B'].reduce((res, key) => {
        res[key] = Math.round(min.RGB[key] + koef * (max.RGB[key] - min.RGB[key]))
        return res
    }, {})
    
    return rgbToHexC(rgbResult)
}
