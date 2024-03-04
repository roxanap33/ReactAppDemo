import React from "react";
import {
  Button,
  FilterText,
  ClearFilterButton,
} from "../assets/styledComponents";

const FilterButtons = ({ onFilterChange, filter }) => {
  return (
    <div>
      <Button onClick={() => onFilterChange("dog")}>Dogs</Button>
      <Button onClick={() => onFilterChange("cat")}>Cats</Button>
      {filter && (
        <>
          <FilterText>Filter: {filter}</FilterText>
          <ClearFilterButton onClick={() => onFilterChange("")}>
            X
          </ClearFilterButton>
        </>
      )}
    </div>
  );
};

export default FilterButtons;
