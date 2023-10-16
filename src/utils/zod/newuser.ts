import * as z from 'zod';

// number amount reason beneficiary
export const newUserSchema = ({
  max,
  currency,
}: {
  max: number;
  currency: string;
}) =>
  z.object({
    phoneNumber: z.string().nonempty({message: 'This field cannot be empty'}),
    amount: z
      .string()
      .nonempty('This field cannot be empty')
      .refine(value => {
        const numericValue = Number(value.replace(/[ ,]/g, '')); // Convert to numeric value
        // console.log('numericValue', numericValue);
        if (numericValue <= 10) {
          return false;
        }
        return true;
      }, `Can't send below 10`)
      .refine(value => {
        const numericValue = Number(value.replace(/[ ,]/g, '')); // Convert to numeric value
        // console.log('numericValue', numericValue);
        if (numericValue > max) {
          return false;
        }
        return true;
      }, `Enter amount lower than ${max}`),
    reason: z.string().optional(),
    // beneficiary: z.boolean().refine(value => !!value, {
    //     message: "you must accept terms and condition",
    // }),
    beneficiary: z.boolean().optional(),
  });
const sop = newUserSchema({max: 111, currency: 'sjsj'});
export type newUserSchemaType = z.infer<typeof sop>;
