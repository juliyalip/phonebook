import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormValue } from "../../hooks/useFormValue";
import { validatePassword, validateEmail } from "../../validate/validate";
import api from "../../api-server/api";
import Form from "../../components/Form/Form";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useFormValue("");
  const [email, setEmail] = useFormValue("");
  const [password, setPassword] = useFormValue("");
  const [error, setErrorPassword] = useState<boolean>(false)

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (!!validatePassword(value)) {
      setErrorPassword(true)
      setTimeout(() => {
        setErrorPassword(false)
      }, 3000)
      setErrorPassword(true)
    }
  }
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
    } catch (error) { }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm
        htmlFor="name"
        label="Name"
        value={name}
        name="name"
        onChange={setName}
      />
      <InputForm
        htmlFor="email"
        label="Email"
        value={email}
        name="email"
        onChange={setEmail}
        type="email"
      />

      <InputForm
        htmlFor="password"
        type="password"
        label="Password"
        value={password}
        name="password"
        onChange={setPassword}
        onBlur={onBlur}
      />
      {error && <Notification message="The password has to be > 4 letters" />}
      <Button>submit</Button>
    </Form>
  );
}
