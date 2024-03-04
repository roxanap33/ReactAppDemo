import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FormButton,
  AdpotionForm,
  FormInput,
  FormLabel,
  FormTextarea,
  Header,
  PageBackground,
  AdoptionFormContainer,
} from "../assets/styledComponents";

function AdoptionForm() {
  const { animalName } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(validEmail)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
      setIsValid(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }
  };

  const firstNameEntered = (e) => {
    setFirstName(e.target.value);
    buttonEnabled(firstName, lastName, phoneNumber, email);
  };

  const lastNameEntered = (e) => {
    setLastName(e.target.value);
    buttonEnabled(firstName, lastName, phoneNumber, email);
  };

  const emailEntered = (e) => {
    setEmail(e.target.value);
    buttonEnabled(firstName, lastName, phoneNumber, email);
  };

  const phoneNumberEntered = (e) => {
    setPhoneNumber(e.target.value);
    buttonEnabled(firstName, lastName, phoneNumber, email);
  };

  const messageEntered = (e) => {
    setMessage(e.target.value);
    buttonEnabled(firstName, lastName, phoneNumber, email);
  };

  const buttonEnabled = (firstName, lastName, phoneNumber, email) => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      phoneNumber.length > 0 &&
      email.length > 0
    ) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  return (
    <PageBackground>
      <AdoptionFormContainer>
        <Header>{animalName} - Adoption form</Header>
        <AdpotionForm onSubmit={handleSubmit}>
          <FormLabel>First Name*</FormLabel>
          <FormInput
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => firstNameEntered(e)}
          />
          <FormLabel>Last Name*</FormLabel>
          <FormInput
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => lastNameEntered(e)}
          />
          <FormLabel invalid={!isValidEmail}>E-mail*</FormLabel>
          <FormInput
            type="e-mail"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => emailEntered(e)}
          />
          <FormLabel>Phone Number*</FormLabel>
          <FormInput
            type="tel"
            placeholder="0712345678"
            pattern="[0-9]{10}"
            required
            value={phoneNumber}
            onChange={(e) => phoneNumberEntered(e)}
          />
          <FormLabel>Message</FormLabel>
          <FormTextarea
            placeholder="Message"
            value={message}
            onChange={(e) => messageEntered(e)}
          />
          {isValid && (
            <p>Your adoption request has been successfully submitted!</p>
          )}
          <FormButton
            type="submit"
            disabled={!lastName || !lastName || !email || !phoneNumber}
          >
            Submit
          </FormButton>
        </AdpotionForm>
      </AdoptionFormContainer>
    </PageBackground>
  );
}

export default AdoptionForm;
