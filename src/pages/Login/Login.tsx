import { useFormValue } from "../../hooks/useFormValue";
import { useValidationBlur } from "../../hooks/useValidationBlur";
import { isValidateEmail, isValidatePassword } from "../../validate/validate";
import { useAuth } from "../../context/contextAuth";
import Container from '../../components/Container/Container'
import Notification from "../../components/Notification/Notification";
import Form from "../../components/Form/Form";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import Spiner from "../../components/Spiner/Spiner";

export default function Login() {
    const { onLogin, loading} = useAuth();
    const [email, setEmail] = useFormValue("");
    const [password, setPassword] = useFormValue("");

    const [errorEmail, setErrorEmail] = useValidationBlur(isValidateEmail)
    const [errorPassword, setErrorPassword] = useValidationBlur(isValidatePassword)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(email, password)
        setEmail('')
        setPassword('')
        };
   

  return (<Container>
    {loading  ? <Spiner /> : ( <Form onSubmit={handleSubmit}>
      <InputForm
        htmlFor="email"
        label="E-mail"
        value={email}
        name="email"
        onChange={setEmail}
        type="email"
        onBlur={setErrorEmail}
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
      {errorPassword && <Notification message="The password has to be more 4 letters" />}
      <Button>login</Button>
    </Form>) }
    </Container>
  );
}


