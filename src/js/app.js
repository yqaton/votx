import { h, render } from 'preact'

import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

const Hello = () => (
  <div style={{'width': '50%'}}>
    <Card>
      <Card.Primary>
        <Card.Title>Hi</Card.Title>
        <Card.Subtitle>Let me subtitle</Card.Subtitle>
      </Card.Primary>
      <Card.Media className='card-media'></Card.Media>
      <Card.Actions>
        <Card.Action>OKAY</Card.Action>
      </Card.Actions>
    </Card>
  </div>
)

render(<Hello />, document.getElementById('app'));