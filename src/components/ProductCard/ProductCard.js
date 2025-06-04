import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ title, description, iconClass, link }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <i className={`${iconClass} me-3`} style={{ fontSize: "2rem", color: "#000" }}></i>
          <Card.Title className="mb-0">{title}</Card.Title>
        </div>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark" href={link}>
          Saiba mais
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
