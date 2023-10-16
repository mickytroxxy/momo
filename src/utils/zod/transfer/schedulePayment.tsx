import * as z from 'zod';

// number amount reason beneficiary
export const SchedulePaymentSchema = ({
  max,
  currency,
}: {
  max: number;
  currency: string;
}) =>
  z.object({
    Number: z.string().nonempty({message: 'This field cannot be empty'}),
    'Receipient name': z
    .string()
    .nonempty({message: 'This field cannot be empty'}),
    Amount: z
      .string()
      .nonempty('This field cannot be empty')
      .refine(value => {
        const numericValue = Number(value.replace(/[ ,]/g, '')); // Convert to numeric value
        if (numericValue <= 10) {
          return false;
        }
        return true;
      }, `Can't send below 10`)
      .refine(value => {
        const numericValue = Number(value.replace(/[ ,]/g, '')); // Convert to numeric value
        if (numericValue > max) {
          return false;
        }
        return true;
      }, `Enter amount lower than ${max}`),
    Reference: z.string().optional(),
  });
const sop = SchedulePaymentSchema({max: 111, currency: 'sjsj'});
export type SchedulePaymentSchemaType = z.infer<typeof sop>;
