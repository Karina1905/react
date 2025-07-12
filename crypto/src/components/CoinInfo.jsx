import { Tag, Typography, Flex } from "antd";
const CoinInfo = ({coin}) => {
    return ( 
        <>
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 45, marginRight: 15}}/>
            <Typography.Title level={2} style={{margin: 0}}>({coin.symbol}) {coin.name}</Typography.Title>
            </Flex>
            <Flex>
            <Typography.Paragraph>
            <Typography.Text>1 hour: </Typography.Text>
            <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>   
            </Typography.Paragraph>

            <Typography.Paragraph>
            <Typography.Text>1 day: </Typography.Text>
            <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>   
            </Typography.Paragraph>  

            <Typography.Paragraph>
            <Typography.Text>1 week: </Typography.Text>
            <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>   
            </Typography.Paragraph>
            </Flex>

            <Typography.Paragraph>
            <Typography.Text>Price: </Typography.Text>
            {coin.price.toFixed(4)}$          
            </Typography.Paragraph>

            <Typography.Paragraph>
            <Typography.Text>Price BTC: </Typography.Text>
            {coin.priceBtc.toFixed(4)}$          
            </Typography.Paragraph> 

            <Typography.Paragraph>
            <Typography.Text>Market Cap: </Typography.Text>
            {coin.marketCap.toFixed(4)}$          
            </Typography.Paragraph>         
        </>
        
     );
}
 
export default CoinInfo;