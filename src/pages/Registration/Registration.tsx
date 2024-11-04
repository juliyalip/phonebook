import {useState} from 'react'
import Form from '../../conponents/Form/Form'
import InputForm from '../../conponents/InputForm/InputForm'
import Button from '../../conponents/Button/Button'

export default function Registration(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement> ) =>{setName(e.target.value)}
    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement> ) =>{setEmail(e.target.value)}
    const onChangePassword =  (e:React.ChangeEvent<HTMLInputElement> ) =>{setPassword(e.target.value)}
    return(
        <Form onSubmit={()=>{}}>
<InputForm htmlFor='name' label="Name" value={name} name="name" onChange={onChangeName} />
<InputForm htmlFor='email' label="Email" value={email} name="email" onChange={onChangeEmail} />
<InputForm htmlFor='password' type="password" label="Password" value={password} name="password" onChange={onChangePassword} />
<Button>submit</Button>
        </Form>
    )
}