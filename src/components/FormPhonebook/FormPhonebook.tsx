import { useFormValue } from "../../hooks/useFormValue";
import Form from "../Form/Form";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";
import {AddContact } from "../../interfaces/contact";

type TSubmit ={
    addContact:({name ,number}: AddContact)=> void
}

export default function FormPhonebook({addContact}: TSubmit) {
    const [name, setName] = useFormValue("");
    const [number, setNumber] = useFormValue("");

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        const newContact = {name, number: Number(number)}
        addContact(newContact);
        setName('');
        setNumber('')
    }
  
    return (
        <Form onSubmit={handleSubmit}>
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
