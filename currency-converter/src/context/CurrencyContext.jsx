import {createContext, useState, useEffect} from 'react'
const CurrencyContext = createContext({
    currData: null,
    fetchCurrency:()=>{}
})

function CurrencyContextProvider({children}){
    const [currData, setCurrData] = useState(null);
    const [selectedCurr, setSelectedCurr] = useState(localStorage.getItem('currency') || '');

const fetchCurrency = async(curr) =>{
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCurrData(data);
    setSelectedCurr(curr)
    localStorage.setItem('currency', curr)
}

  
    useEffect(() => {
        const savedCurr = localStorage.getItem('currency')

         if(savedCurr){
        fetchCurrency(savedCurr)
    }
    }, [])

return(<CurrencyContext.Provider value={({currData, selectedCurr, fetchCurrency})}>{children}</CurrencyContext.Provider>)
} 



