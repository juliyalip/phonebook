import React , {useState}  from 'react'
import Form from '../Form/Form'
import InputForm from '../InputForm/InputForm'
import Button from '../Button/Button'

//  interface Iprop{
//      initionValue: string
//  }
//  
//  
//  const useFormValue =(initionValue:string) =>{
//      const [value, setValue]= useState(initionValue ?? '')
//      const updateValue =(e:React.ChangeEvent<HTMLInputElement> )=> {
//          setValue(e.target.value)
//      }; return [value, updateValue]
//  }

export default function FormPhonebook(){
    const [name, setName] = useState('')
    const [number, setNumber] = useState<string>('')
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement> ) => setName(e.target.value)
    const onChangeNumber = (e:React.ChangeEvent<HTMLInputElement> ) =>{setNumber(e.target.value)}
    return(
        <Form onSubmit={ () =>{}}>
           <InputForm htmlFor='name' label="name" value={name} name={name} onChange={onChangeName}/>
           <InputForm htmlFor='number' label="number" name={number} value={number} onChange={onChangeNumber}/>
           <Button >save contact</Button>
        </Form>
    )
}