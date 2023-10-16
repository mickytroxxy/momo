import React from 'react'
import Card from './Card';
import { Box, Text } from '@atom';

type CardItemType = {
    title: string;
    value: string;
    In?: boolean;
    Out?: boolean;
};

type BalanceCardProps = {
    display?: 'hover' | 'default'
}

export default function BalanceCard({ display = 'hover' }: BalanceCardProps) {

    function CardItem({ title, value, In, Out }: CardItemType) {
        return (
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text variant={'regular12'} color={'black'}>
                    {title}
                </Text>
                <Text
                    variant={'regular12'}
                    color={In ? 'green100' : Out ? 'red100' : 'black'}>
                    {value}
                </Text>
            </Box>
        );
    }
    return (
        <Card
            py={'vs'}
            px={'hs'}
            variant="shadow"
            gap={'vsm'}
            style={[
                display == 'hover' ? {
                    // marginTop: '-60%',
                    // marginTop: '-41%',
                } : {
                    marginTop: 10,
                }]}>
            <CardItem title="Current balance" value="GHC 54 883.89" />
            <Box gap={'vxxs'}>
                <CardItem title="Money In" In value="+GHC 54 883.89" />
                <CardItem title="Money Out" Out value="-GHC 54 883.89" />
            </Box>
        </Card>
    )
}