import { useForm } from "react-hook-form"
import { FormStyle } from "./styles"
import { Button } from "../Button/styles"
import { Input } from "../Input/styles"
import { ErrorMessage } from "../ErrorMessage/styles"
import { getSendConfirmation } from "../../api/mail"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ModdedBars } from "../Loaders/Bars"

export const Form = () =>{

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        }
    })

    //console.error(errors)

    const handleGetEmail = async (data: {email: string})=>{
        try {
            setLoading(true)
            const result = await getSendConfirmation(data.email)
            navigate('/response', {state : {mail : result}})
        } catch (err) {
            console.error(`An error occurried: ${err}`)
        }finally{
            setLoading(false)
        }
    }

    return(
        <>
            <FormStyle onSubmit={handleSubmit((data)=>{ handleGetEmail(data) })}>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                <Input {...register('email', {required: 'Por favor preencha esse campo'})} type="email" placeholder="Coloque seu melhor email" />
                <Button type="submit" >Enviar</Button>

                {loading && (
                    <ModdedBars />
                )}

            </FormStyle>
        </>
    )

}