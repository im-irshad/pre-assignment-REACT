import React from "react";
import { useParams } from "react-router";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import useFetch from "./useFetch";

export default function Detail() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          {error && <div>{error}</div>}
          {isLoading && <div>Loading.......</div>}
          {data && (
            <Card style={{ width: "24rem" }}>
              <Card.Img
                variant="top"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22226%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20226%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e4aa8aef5%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e4aa8aef5%22%3E%3Crect%20width%3D%22226%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2285.8790283203125%22%20y%3D%2286%22%3E226x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text> @{data.username} </Card.Text>
                <Card.Text> Email: {data.email} </Card.Text>
                <Card.Text> Phone: {data.phone} </Card.Text>
                <Card.Text> website: {data.website} </Card.Text>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
