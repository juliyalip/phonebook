import { useFormValue } from "../../hooks/useFormValue";
import { useAuth } from "../../context/contextAuth";
import Form from "../../components/Form/Form";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";

export default function Login() {
    const { onLogin} = useAuth();
    const [email, setEmail] = useFormValue("");
    const [password, setPassword] = useFormValue("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(email, password)
        setEmail('')
        setPassword('')
        };

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm
        htmlFor="email"
        label="e-mail"
        value={email}
        name="email"
        onChange={setEmail}
        type="email"
      />
      <InputForm
        htmlFor="password"
        type="password"
        label="password"
        value={password}
        name="password"
        onChange={setPassword}
      />
      <Button>login</Button>
    </Form>
  );
}


