import { z } from 'zod';

export enum transactionType {
    'MoMo User' = 'MoMo User',
    'Bank transfer' = 'Bank transfer',
}

export const addBeneficiaryMoMoUserSchema = z.object({
    transactionType: z.literal(transactionType['MoMo User']),
    beneficiaryName: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
    ,
    mobileNumber: z
        .string()
        .min(10, { message: 'Enter a valid 10 digit mobile number' })
        .nonempty({ message: 'This field cannot be empty' })
    ,
    reason: z
        .string()
        .min(3, { message: 'Enter minimum 3 characters' })
        .nonempty({ message: 'This field cannot be empty' })
});

export const addBeneficiaryBankTransferSchema = z.object({
    transactionType: z.literal(transactionType['Bank transfer']),
    beneficiaryName: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
    ,
    searchBank: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
    ,
    accountNumber: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
        .min(10, { message: 'Enter a valid 10 digit account number' })
    ,
    reason: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
        .min(3, { message: 'Enter minimum 3 characters' })
});


export const addBeneficiarySchema = z.discriminatedUnion("transactionType", [
    addBeneficiaryMoMoUserSchema,
    addBeneficiaryBankTransferSchema,
])


export type addBeneficiaryType = z.infer<typeof addBeneficiarySchema>;