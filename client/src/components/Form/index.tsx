import { useForm } from "react-hook-form"
import { FormStyle } from "./styles"
import { Button } from "../Button/styles"
import { Input } from "../Input/styles"
import { ErrorMessage } from "../ErrorMessage/styles"
import { getSendConfirmation } from "../../api/mail"

export const Form = () =>{
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        }
    })

    //console.error(errors)

    const handleGetEmail = async (data: {email: string})=>{
        try {
            const result = await getSendConfirmation(data.email)
            console.log(result)                    
        } catch (err) {
            console.error(`An error occurried: ${err}`)
        }
    }

    return(
        <>
            <FormStyle onSubmit={handleSubmit((data)=>{ handleGetEmail(data) })}>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                <Input {...register('email', {required: 'Por favor preencha esse campo'})} type="email" placeholder="Coloque seu melhor email" />
                <Button type="submit" >Enviar</Button>
            </FormStyle>
        </>
    )

}