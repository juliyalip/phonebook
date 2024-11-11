import { useNavigate } from "react-router-dom";
import { useFormValue } from "../../hooks/useFormValue";
import api from "../../api-server/api";
import Form from "../../conponents/Form/Form";
import InputForm from "../../conponents/InputForm/InputForm";
import Button from "../../conponents/Button/Button";


export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useFormValue("");
  const [email, setEmail] = useFormValue("");
  const [password, setPassword] = useFormValue("");



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await api.register({ name, email, password });
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
      />
      <InputForm
        htmlFor="password"
        type="password"
        label="Password"
        value={password}
        name="password"
        onChange={setPassword}
      />
      <Button>submit</Button>
    </Form>
  );
}
