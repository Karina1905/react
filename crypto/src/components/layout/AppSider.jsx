import { Layout, Card, Statistic, List, Typography, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils';
import { useContext } from 'react';
import CryptoContext from '../../context/CryptoContext';

const siderStyle = {
  padding: '15px',
  backgroundColor: '#1677ff',
};
const AppSider = () => {
    const {assets} = useContext(CryptoContext)

    return ( 
         <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
          <Card key={asset.id} style={{marginBottom: '15px'}}>
        <Statistic
          title={capitalize(asset.id)}
          value={asset.totalAmount}
          precision={2}
          valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322'}}
          prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          suffix="%"
        />
        <List
        size='small'
      dataSource={[
        {title: 'Total Profit', value: asset.totalProfit, widthTag: true},
        {title: 'Asset Amount', value: asset.amount},
        // {title: 'Difference', value: asset.growPercent},
      ]}
      renderItem={(item) => (
        <List.Item>
          <span>{item.title}</span>
          <span>
            {item.widthTag && (
                <Tag color={asset.grow ? 'green' : 'red'}>
                    {asset.growPercent}%
                </Tag>
            )}
             <Typography.Text type={asset.grow ? 'success' : 'danger'}>
             <span>{item.value.toFixed(2)}</span>
          </Typography.Text>
          </span>
         
         
        </List.Item>
      )}
    />
    </Card>
            ))}

       {/* <Card>
         <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
    </Card> */}
        </Layout.Sider>
        );
}
 
export default AppSider;