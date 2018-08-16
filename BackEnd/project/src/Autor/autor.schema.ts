import * as Joi from 'joi';

export const AUTOR_SCHEMA = Joi
    .object()
    .keys({
            id: Joi
                .number()
                .integer()
                .required(),
            nombre: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            apellido: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            fechaNacimiento: Joi
                .string()
                .required()
                .regex(/^[0-9]{6,8}$/)
                .min(6)
                .max(8),
            numeroLibros: Joi
                .number()
                .integer()
                .required(),
            ecuatoriano: Joi
                .boolean()
                .required(),
        }
    )