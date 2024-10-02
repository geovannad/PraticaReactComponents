import { Wrapper } from './Section'
import Title from '../title/title.jsx'
import Card from '../Card/Card.jsx'
import foto from '../../assets/dog.png'

function Section(props){
    return(
        <>       
            <Title title={props.title}></Title>
            <Wrapper >
            <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color={props.color}></Card>
            <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color={props.color}></Card>
            <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color={props.color}></Card>
            <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color={props.color}></Card>
                {/* {props.cardS.map(
                    card => <Card title={card[0]}
                    desc={card[1]}buy={card[2]} image={card[3]} color={card[4]}></Card>
                )} */}
            </Wrapper>
        </>
    )
}

export default Section