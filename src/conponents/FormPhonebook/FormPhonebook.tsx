import { useFormValue } from "../../hooks/useFormValue";
import Form from "../Form/Form";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";

export default function FormPhonebook() {
    const [name, setName] = useFormValue("");
    const [number, setNumber] = useFormValue("");

    return (
        <Form onSubmit={() => { }}>
            <InputForm
                htmlFor="name"
                label="Name"
                value={name}
                name={name}
                onChange={setName}
            />
            <InputForm
                htmlFor="namber"
                name="number"
                label="Number"
                value={number}
                onChange={setNumber}
            />
            <Button>save contact</Button>
        </Form>
    );
}
