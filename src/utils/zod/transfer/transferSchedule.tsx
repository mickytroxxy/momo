import {z} from 'zod';

export const transferScheduleNoEndSchema = z.object({
  'Start date': z.string().nonempty({message: 'This field cannot be empty'}),
  setEndDate: z.literal(false),
  Repeat: z.string().nonempty({message: 'This field cannot be empty'}),
});

export const transferScheduleEndSchema = z.object({
  'Start date': z.string().nonempty({message: 'This field cannot be empty'}),
  setEndDate: z.literal(true),
  end: z.string().nonempty({message: 'This field cannot be empty'}),
  Repeat: z.string().nonempty({message: 'This field cannot be empty'}),
});

export const transferScheduleSchema = z.discriminatedUnion('setEndDate', [
  transferScheduleNoEndSchema,
  transferScheduleEndSchema,
]);

export type TransferScheduleType = z.infer<typeof transferScheduleSchema>;
