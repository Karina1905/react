import {Button, Table} from 'antd'
import { useCrypto } from '../context/CryptoContext';

const CryptoTable = () => {
const {assets, removeAsset} = useCrypto();
 const columns = [
    {
      title: 'Назва',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Кількість',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
  title: 'Купівельна ціна',
  dataIndex: 'price',
  key: 'price',
  render: (price) => {
    return price.toFixed(2) + '$'}
},
    {
      title: 'Поточна ціна',
      key: 'totalAmount',
      render: (_, record) =>
        (record.totalAmount / record.amount).toFixed(2) + '$',
    },
    {
      title: 'Дата покупки',
        dataIndex: 'date',
      key: 'date',
      render: (date) => new Date(date).toLocaleString(),
    },
    {
        title: 'Дія',
        key: 'action',
        render: (_, record) =>(
            <Button danger onClick={() => removeAsset(record.id)}>
            Видалити
            </Button>
        ),
    }
  ];
    return <Table dataSource={assets} columns={columns} rowKey="id" />;
}
 
export default CryptoTable;