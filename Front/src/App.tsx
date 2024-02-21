import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { sendRequest } from "./Services/sendRequest";
import { useEffect, useState } from "react";

function App() {
  const [retrievedColors, setReceivedColors] = useState(
    '["#4285F4", "#34A853", "#FBBC05", "#EA4335"]'
  );
  const [colors, setColors] = useState(JSON.parse(retrievedColors));

  const formHandler = async (event: any) => {
    event.preventDefault();
    const response = await sendRequest(event.target[0].value);
    setReceivedColors(response.colors);
  };

  useEffect(() => {
    setColors(JSON.parse(retrievedColors));
  }, [retrievedColors]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row style={{ margin: "0", width: "100%" }}>
        {colors.map((color: string, index: number) => (
          <Col
            key={index}
            style={{
              backgroundColor: color,
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
            onClick={() => {
              navigator.clipboard.writeText(color);
              alert(`Copied to clipboard: , ${color}`);
            }}
          >
            <h1>{color}</h1>
          </Col>
        ))}
      </Row>
      <Form
        onSubmit={formHandler}
        style={{
          position: "fixed",
          height: "50px",
        }}
      >
        <InputGroup className="mb-3">
          <Form.Control placeholder="Color Palette Description" />
          <Button variant="primary" id="button-addon2" type="submit">
            Generate
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default App;
