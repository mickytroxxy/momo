import { IconType } from '@/component/ComponentTypings';
import { Theme } from '@/typings/globalTheme';
import { HomeScreenProps } from '@/typings/navigation';
import { logClickEvent } from '@/utils/analytics';
import { Box, Icon } from '@atom';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import React, { Fragment, useState } from 'react';
import BalanceFooter from '../../molecule/Card/BalanceFooter';
import BalanceHeader from '../../molecule/Card/BalanceHeader';
import Card from '../../molecule/Card/Card';
import HorizontalCardSeparator from '../../molecule/Card/HorizontalCardSeparator';
import { VerticalSeparator } from '@molecule';
import { getFontSizeByWindowHeight as gsh } from '@/style/theme';

type MainWalletCardProps = {
    WalletHeader: {
        activeIcon: IconType,
        inactiveIcon: IconType
    },
    WalletFooter:
    {
        type: 'Icon',
        data: IconType
    }[],
    display?: 'hover' | 'default',
}

export default function MainWalletCard({ display = 'hover', WalletHeader, WalletFooter }: MainWalletCardProps) {
    const { colors } = useTheme<Theme>();
    const { navigate } = useNavigation<HomeScreenProps['navigation']>();

    const [showBalance1, setshowBalance1] = useState(false);
    const toggleBalance1 = () => {
        setshowBalance1(v => !v);
    };

    const fetchBalance = () => {

    }

    return (
        <Box>
            <Card variant={'shadow'}>
                <Box borderRadius={10} overflow={'hidden'}>
                    {/* TOP */}
                    <BalanceHeader
                        showBalance={showBalance1}
                        toggleBalance={toggleBalance1}
                        phoneNumber="097 123 4567"
                        balnce="FCFA 150 000 000 000"
                        activeIcon={WalletHeader.activeIcon.Icon}
                        inactiveIcon={WalletHeader.inactiveIcon.Icon}
                    />
                    <HorizontalCardSeparator w={0.5} />
                    {/* BOTTOM */}
                    <Box flexDirection={'row'}>
                        {
                            WalletFooter.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <BalanceFooter
                                            label={item.data.label || ''}
                                            onPress={() => {
                                                item.data.route && navigate(item.data.route)
                                                // logEvent('transactions', 'clicked', {});
                                                logClickEvent(item.data.id);
                                            }}
                                            icon={
                                                <Icon
                                                    onPress={() => {
                                                        if (item.data.route) {
                                                            //@ts-ignore
                                                            navigate(item.data.route)
                                                        }
                                                    }}
                                                    color={colors.momoBlue}
                                                    // name={item.data.Icon}
                                                    name={item.data.Icon}
                                                    size={18}
                                                />
                                            }
                                        />
                                        {(WalletFooter.length > 1 && index < WalletFooter.length - 1) && <VerticalSeparator mv={gsh(5)} />}
                                    </Fragment>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}