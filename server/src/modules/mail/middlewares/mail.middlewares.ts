import { celebrate, Segments, Joi } from "celebrate";

export const verifyEmailData = ()=>{
    return celebrate({
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        }
    })        
}

//console.log(verifyEmailData)