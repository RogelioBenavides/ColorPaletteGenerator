// import './App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const retrievedColors = "[\"#4285F4\", \"#34A853\", \"#FBBC05\", \"#EA4335\"]";
  const colors = JSON.parse(retrievedColors);

  return (
    <Row style={{margin: '0'}}>
      {colors.map((color: string, index: number) => (
        <Col key={index} style={{ backgroundColor: color, height: '100vh' }}/>
      ))}
    </Row>
  )
}

export default App
