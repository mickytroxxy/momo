import * as z from 'zod';

// number amount reason beneficiary
export const payBeneficiarySchema = ({
  max,
  currency,
}: {
  max: number;
  currency: string;
}) =>
  z.object({
    name: z.string().nonempty('can not be empty'),
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
  });
const sop = payBeneficiarySchema({max: 111, currency: 'sjsj'});
export type payBeneficiarySchemaType = z.infer<typeof sop>;
