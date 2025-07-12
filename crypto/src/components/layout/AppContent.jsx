import { Layout, Typography } from 'antd';
import { useCrypto} from '../../context/CryptoContext'
import CryptoChart from '../layout/CryptoChart';
import CryptoTable from '../CryptoTable';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const AppContent = () => {
  const { totalEarned } = useCrypto();
    return ( <Layout.Content style={contentStyle}>
       <Typography.Title level={3}>
        Загальний прибуток: {totalEarned.toFixed(2)}$</Typography.Title>
      <CryptoChart/>
      <CryptoTable />
    </Layout.Content> );
}
 
export default AppContent;