import styled from "styled-components";

export const PageBackground = styled.div`
  background-color: #cadeed;
`;

export const HomePageContainer = styled.div`
  text-align: center;
  padding: 0vw 14vw;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 3.5vw 0;
  font-size: 3vw;
  color: #194569;
  font-family: "Monaco", monospace;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 20vw;
  height: 30vw;
  color: #194569;
  font-family: "Monaco", monospace;
  border: 1px solid #ccc;
  background-color: #91aec4;
  border-radius: 8px;
  padding: 3.9vw;
  margin: 2vw;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const CardContent = styled.div`
  text-align: left;
  margin-left: 0.3vw;
  font-size: 1.2vw;
`;

export const CardTitle = styled.h2`
  font-size: 1.6vw;
`;

export const Button = styled.button`
  margin: 1.32vw;
  font-size: 1vw;
  border-radius: 8px;
  background-color: #dbdcdc;
  color: black;
  padding: 0.5vw 1vw;
  cursor: pointer;
  font-family: "Monaco", monospace;
`;

export const FilterText = styled.span`
  display: inline-block;
  margin-left: 1.32vw;
  font-size: 1.2vw;
  font-family: "Monaco", monospace;
`;

export const ClearFilterButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 1.2vw;
`;

export const AdoptionFormContainer = styled.div`
  text-align: center;
`;

export const AdpotionForm = styled.form`
  background-color: #f4f4f4;
  padding: 2.65vw;
  border-radius: 8px;
  margin: 0 29vw;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 1vw;
  text-align: left;
  margin-left: 2.3vw;
  font-weight: bold;
  font-family: "Monaco", monospace;
  color: ${(props) => (props.invalid ? "red" : "#194569")};
`;

export const FormInput = styled.input`
  width: 30vw;
  padding: 1vw;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1.5vw;
  font-family: "Monaco", monospace;
`;

export const FormTextarea = styled.textarea`
  width: 30vw;
  height: 10vw;
  padding: 0.9vw;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1vw;
  resize: none;
  font-family: "Monaco", monospace;
`;

export const FormButton = styled.button`
  background-color: #194569;
  color: white;
  padding: 1vw;
  margin-top: 1.32vw;
  border: none;
  border-radius: 8px;
  font-family: "Monaco", monospace;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;
