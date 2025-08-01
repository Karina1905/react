import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/CryptoContext';
const AppLayout = () => {
    const {loading} = useContext(CryptoContext);
        if(loading){
        return <Spin fullscreen/>
    }
    return ( 
        <Layout>
              <AppHeader/>
              <Layout>
               <AppSider/>
                <AppContent/>
              </Layout>
            </Layout>
     );
}
 
export default AppLayout;

