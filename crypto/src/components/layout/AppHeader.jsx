import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/CryptoContext';
import { useEffect, useState } from 'react';
import CoinInfo from '../CoinInfo';
import AddForm from '../AddForm';

const headerStyle = {
  textAlign: 'center',
  width: '100%',
  color: '#fff',
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#4096ff',
};

const AppHeader = () => {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [coin, setCoin] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const {crypto} = useCrypto();
  useEffect(() => {
    const keypress = (e) => {
      if(e.key == '/'){
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return() => document.removeEventListener('keypress', keypress)
  },[])

const handleChange = value => {
  // console.log(value);
  setCoin(crypto.find((c) => c.id == value))
  setModal(true)
};

    return ( 
        <Layout.Header style={headerStyle}>
<Select
    style={{ width: '300px' }}
    open={select}  
    value='enter / to open'
   onSelect={handleChange}
    onClick={() => setSelect((prev) => !prev)}
    options={crypto.map((coin) => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon
    }))}
    optionRender={option => (
      <Space>
        <img style={{width: 20}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
      </Space>
    )}
  />
  <Button type="primary" onClick={() => setDrawer(true)}>Add asset</Button>

  <Modal
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <CoinInfo coin={coin}/>
      </Modal>

  <Drawer
        width={500}
        title="Add Asset"
        onClose={() => setDrawer(false)}
        open={drawer}
        destroyOnHidden 
      >
         <AddForm onClose={() => setDrawer(false)}/>
      </Drawer>
     
        </Layout.Header>
     );
}
 
export default AppHeader;