import * as z from 'zod';

// number amount reason beneficiary
export const createPINSchema = () =>
  z
    .object({
      'Create PIN': z
        .string()
        .nonempty({message: 'This field cannot be empty'}),
      'Confirm PIN': z
        .string()
        .nonempty({message: 'This field cannot be empty'}),
    })
    .refine(schema => schema['Create PIN'] === schema['Confirm PIN'], {
      message: 'Paswords does not match',
      //   path: [''],
    })
    .refine(
      schema => {
        const create = schema['Create PIN'];
        const isSequence = /1234|2345|3456|4567|5678|6789|7890/.test(create);
        return !isSequence;
      },
      {
        message: 'Don’t use numbers in sequence, e.g 1234',
        //   path: [''],
      },
    );
const sop = createPINSchema();
export type createPINSchemaType = z.infer<typeof sop>;
