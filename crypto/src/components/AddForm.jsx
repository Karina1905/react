import { Select, Space, Typography, Flex, Form, Button, DatePicker, Result, InputNumber} from 'antd'
import {useState, useRef} from 'react'
import { useCrypto } from '../context/CryptoContext'

const validateMessages = {
  required: "${label} is Required!",
  types: {
    number: '${label} not valid number'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};


const AddForm = ({onClose}) => {
    const {crypto, addAsset} = useCrypto()
    const [coin, setCoin] = useState(null)
    const [form] = Form.useForm();
    const [submit, setSubmit] = useState(false)
    const assetRef = useRef(null)

    if(submit){
      return(
          <Result
    status="success"
    title="New Asset"
    subTitle={`Add ${assetRef.current.amount} of ${coin.name} price ${assetRef.current.price}`}
    extra={[
      <Button type="primary" key="console" onClick={onClose}>
        Close
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
      )
    }

    if(!coin){
        return (
            <Select
    style={{ width: '100%' }}
   onSelect={(v) => setCoin(crypto.find((c) => c.id == v))}
    placeholder='Select coin'
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
        )
    }

   function onFinish(values){
    const newAsset={
      id:coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date
    }
    assetRef.current = newAsset
  setSubmit(true)
  addAsset(newAsset)
}

function handleAmountChange(value){
  const price = form.getFieldValue('price')
  form.setFieldsValue({
    total: +(value * price).toFixed(2),
    })
}


function handlePriceChange(value){
  const amount = form.getFieldValue('amount')
  form.setFieldsValue({
    total: +(amount * value).toFixed(2),
    })
}

   return (
  <Form
  form = {form}
    name="basic"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 10 }}
    style={{ maxWidth: 600 }}
    initialValues={{ price: +coin.price.toFixed(2) }}
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
           <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 45, marginRight: 15}}/>
            <Typography.Title level={2} style={{margin: 0}}>({coin.symbol}) {coin.name}</Typography.Title>
            </Flex> 
          
    <Form.Item
      label="Amount"
      name="amount"
      rules={[{ required: true, message: 'Please input your amount!', type: 'number', min: 0 }]}
    >
      <InputNumber style={{width:'100%'}} onChange={handleAmountChange}/>
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
    >
      <InputNumber onChange={handlePriceChange} style={{width:'100%'}}/>
    </Form.Item>

    
    <Form.Item
      label="Total"
      name="total"
    >
      <InputNumber disabled style={{width:'100%'}}/>
    </Form.Item>

     <Form.Item
      label="Date"
      name="date"
    >
      <DatePicker showTime />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
     );
}
 
export default AddForm;