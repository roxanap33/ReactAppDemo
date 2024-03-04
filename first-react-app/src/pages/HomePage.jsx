import React, { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard";
import FilterButtons from "../components/FilterButtons";
import {
  HomePageContainer,
  Header,
  CardContainer,
  PageBackground,
} from "../assets/styledComponents";

function HomePage() {
  const [animals, setAnimals] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("animals.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
      })
      .catch((error) => console.error("Error fetching animals:", error));
  }, []);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredAnimals = animals.filter(
    (animal) => !filter || animal.type === filter
  );

  return (
    <PageBackground>
      <HomePageContainer>
        <Header>Virtual Shelter</Header>
        <FilterButtons onFilterChange={handleFilterChange} filter={filter} />
        <CardContainer>
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </CardContainer>
      </HomePageContainer>
    </PageBackground>
  );
}

export default HomePage;
