import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.app/currencies`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [currency])
    return data
}

export default useCurrencyInfo;