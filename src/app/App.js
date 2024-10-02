import './App.css';
import Title from '../components/title/title.jsx'
import Card from '../components/Card/Card.jsx'
import foto from '../assets/dog.png'
import Section from '../components/Section/Section.jsx';


function App() {
  return (
    <>
    <Section title="Dogs" color="red">
      {/* <Title title="dogs"></Title>
      <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
      <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
      <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
      <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card> */}
    </Section>
     <Section title="Nutrients" color="yellow">
     {/* <Title title="dogs"></Title>
     <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
     <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
     <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card>
     <Card title="Drools | 3kg" desc="msdkfjgaiufhadflk" buy="Buy Now" image={foto} color="red"></Card> */}
   </Section>
   </>
  );
}

export default App;
