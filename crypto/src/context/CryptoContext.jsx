import { createContext, useState, useEffect, useContext } from "react";
import { fetchCrypto } from '../api';
import { percentDifference } from '../utils';
const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
     addAsset: () => {},
      removeAsset: () => {},
    totalEarned: 0
})

export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  function mapAssets(assets, result){
  return assets.map(asset => {
    const coin = result.find((c) => c.id == asset.id)
    return{
      
      grow: asset.price < coin.price,
      growPercent: percentDifference(asset.price, coin.price),
      totalAmount: asset.amount * coin.price,
      totalProfit: asset.amount * coin.price - asset.amount * asset.price,
      name: coin.name,
      ...asset
    }
  })
}

useEffect(() => {
  async function preload(){
    setLoading(true)
    const { result } = await fetchCrypto()
     const assetsFromLS = JSON.parse(localStorage.getItem('assets') || '[]');
    setAssets(mapAssets(assetsFromLS, result))
    setCrypto(result)
    setLoading(false)
  }
  preload()
}, [])

    function addAsset(newAsset){
        const updated = [...assets, newAsset];
    setAssets(mapAssets(updated, crypto));
    localStorage.setItem('assets', JSON.stringify(updated));
    }

    function removeAsset(id){
      const updated = assets.filter((a)=>a.id !== id);
      setAssets(mapAssets(updated, crypto));
      localStorage.setItem('assets', JSON.stringify(updated));
    }


   const totalEarned = assets.reduce(
        (sum, a) => sum + (a.totalProfit || 0),
        0
    );

return (
    <CryptoContext.Provider value={{loading, crypto, assets, addAsset,removeAsset, totalEarned}}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoContext;
export function useCrypto(){
    return useContext(CryptoContext)
}
