import { useForm } from "react-hook-form"
import { FormStyle } from "./styles"
import { Button } from "../Button/styles"
import { Input } from "../Input/styles"
import { ErrorMessage } from "../ErrorMessage/styles"

export const Form = () =>{
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        }
    })

    console.error(errors)

    return(
        <>
            <FormStyle onSubmit={handleSubmit((data)=>{ console.log(data) })}>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                <Input {...register('email', {required: 'Por favor preencha esse campo'})} type="email" placeholder="Coloque seu melhor email" />
                <Button type="submit" >Enviar</Button>
            </FormStyle>
        </>
    )

}