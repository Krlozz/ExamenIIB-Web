import * as Joi from 'joi';

export const AUTOR_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        nombres: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        apellidos: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        fechaNacimiento: Joi
            .string()
            .required()
            .regex(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/),
        numeroLibros: Joi
            .number()
            .required()
            .integer()
            .greater(0)
            .less(200),
        ecuatoriano: Joi
            .boolean(),
            //.required(),

    })
