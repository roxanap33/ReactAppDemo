import React from "react";
import {
  Card,
  Button,
  CardContent,
  CardTitle,
} from "../assets/styledComponents";
import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
  return (
    <Card>
      <img
        src={animal.photoUrl}
        alt={animal.name}
        style={{
          width: "20vw",
          height: "14vw",
          //objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <CardTitle>{animal.name}</CardTitle>
      <CardContent>
        <p>Breed: {animal.breed}</p>
        <p>Age: {animal.age}</p>
      </CardContent>
      <Link to={`/adopt/${animal.name}`} style={{ textDecoration: "none" }}>
        <Button>Adopt</Button>
      </Link>
    </Card>
  );
}

export default AnimalCard;
