import { TitleS, Div, DivGreen } from "./title"

function Title(props){
    return(
        <Div>
            <TitleS>{props.title}</TitleS>
            <DivGreen></DivGreen>
        </Div>
    );

}

export default Title