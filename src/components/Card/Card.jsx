import {Div,
Title,
Description,
BuyNow,Image} from './Card'

function Card(props){
    return(
        <Div>
            <Image src={props.image}></Image>
            <Title>{props.title}</Title>
            <Description color={props.color}>{props.desc}</Description>
            <BuyNow>{props.buy}</BuyNow>
        </Div>
    )
}

export default Card