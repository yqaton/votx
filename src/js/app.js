import { h, render } from 'preact'

const Hello = () => (
  <div>
    Hello from react
  </div>
)

export default Hello

render(<Hello />, document.getElementById('app'));