import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';
import { useFormValue } from "../../hooks/useFormValue";
import { useValidationBlur } from "../../hooks/useValidationBlur";
import { isValidatePassword, isValidateEmail, isValidateName } from "../../validate/validate";
import api from "../../api-server/api";
import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";

export default function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useFormValue("");
  const [email, setEmail] = useFormValue("");
  const [password, setPassword] = useFormValue("");
  const [errorName, setErrorName] = useValidationBlur(isValidateName)
  const [errorEmail, setErrorEmail] = useValidationBlur(isValidateEmail)
  const [errorPassword, setErrorPassword] = useValidationBlur(isValidatePassword)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("the field can't be empty")
    }
    try {
      await api.register({ name, email, password });
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) { 
      if (error instanceof AxiosError && error.response?.status === 409) {
        alert("This email is already registered"); 
        return; 
      }
    }
  };

  return (<Container>
    <Form onSubmit={handleSubmit}>
      <InputForm
        htmlFor="name"
        label="Name"
        value={name}
        name="name"
        onChange={setName}
        onBlur={setErrorName}
      />
      {errorName && <Notification message="The name has to be more 2 letters" />}
      <InputForm
        htmlFor="email"
        label="E-mail"
        value={email}
        name="email"
        onBlur={setErrorEmail}
        onChange={setEmail}
        type="email"
      />
      {errorEmail && <Notification message="The email is not valid" />}
      <InputForm
        htmlFor="password"
        type="password"
        label="Password"
        value={password}
        name="password"
        onChange={setPassword}
        onBlur={setErrorPassword}
      />
      {errorPassword && <Notification message="The password has to be > 4 letters" />}
      <Button>submit</Button>
    </Form>
    </Container>
  );
}
