// import './App.css'
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function App() {
  const retrievedColors = '["#4285F4", "#34A853", "#FBBC05", "#EA4335"]';
  const colors = JSON.parse(retrievedColors);

  return (
    <div>
      <Row style={{ margin: "0", position: "absolute", width: "100%" }}>
        {colors.map((color: string, index: number) => (
          <Col
            key={index}
            style={{ backgroundColor: color, height: "100vh" }}
          />
        ))}
      </Row>
      <Form
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputGroup className="mb-3" style={{ width: '30%'}}>
          <Form.Control
            placeholder="Color Palette Description"
          />
          <Button variant="primary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default App;
