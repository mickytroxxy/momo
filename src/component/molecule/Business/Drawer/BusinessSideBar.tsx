import { menuDrawerBg, menuDrawerHeight, menuDrawerWidth } from '@/style-dictionary-dist/momoStyle';
import { Theme } from '@/typings/globalTheme';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { Box, Icon, Text, TouchableOpacity } from '@atom';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '@shopify/restyle';
import { StyleSheet, View } from 'react-native';
import HorizontalCardSeparator from '../../Card/HorizontalCardSeparator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function BusinessSideBar(props: any) {
    const { colors } = useTheme<Theme>();
    const { navigation } = props
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation()


    const drawerItems = [
        {
            displayName: 'Contact Customer  Care',
            icon: () => <Icon name='SupportIcon' fill={colors.momoBlue} size={24} />,
            route: 'EmptyScreen',
        },
        {
            displayName: 'Share this app',
            icon: () => <Icon name='Share1Icon' fill={colors.momoBlue} size={24} />,
            route: 'EmptyScreen',
        },
        {
            displayName: 'Terms & Conditions',
            icon: () => (
                <Icon name='InformationIcon' fill={colors.momoBlue} size={24} />
            ),
            route: 'EmptyScreen',
        },
        {
            displayName: 'Privacy Policy',
            icon: () => (
                <Icon name='PrivacyPolicyIcon' fill={colors.momoBlue} size={24} />
            ),
            route: 'EmptyScreen',
        },
        {
            displayName: 'Logout',
            icon: () => <Icon name='LogoutIcon' fill={colors.momoBlue} size={24} />,
            route: 'EmptyScreen',
        },
    ];
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
                paddingTop: insets.top,
            }}
        >
            <Box style={styles.container}>
                <TouchableOpacity onPress={() => navigation?.closeDrawer()} style={{ position: 'absolute', right: gpsw('12'), top: gpsh('12') }}>
                    <Icon name='CloseCircleIcon' size={16} />
                </TouchableOpacity>
                <Box style={{ gap: gpsh('12') }} >
                    <Text
                        fontFamily={'MTNBrighterSans-Bold'}
                        color={'momoBlue'}
                        fontSize={gpsw('18')}>
                        Michael’s Food Store (PTY) LTD
                    </Text>
                    <Text
                        fontFamily={'MTNBrighterSans-Regular'}
                        color={'black'}
                        fontSize={gpsw('14')}
                    >
                        +23 33 589 5011
                    </Text>
                </Box>

                <Box>
                    <HorizontalCardSeparator w={gpsh('1')} />
                </Box>

                <Box style={{ gap: gpsh('24') }} >
                    {drawerItems.map(item => (
                        <TouchableOpacity
                            onPress={() => navigate('EmptyScreen')}
                            key={item.displayName}
                            style={{ flexDirection: 'row', }}>
                            <Box>
                                <item.icon />
                            </Box>
                            <Box style={{ flex: 1, marginLeft: gpsw('12'), justifyContent: 'center' }}>
                                <Text
                                    fontFamily={'MTNBrighterSans-Bold'}
                                    color={'momoBlue'}
                                    fontSize={gpsw('14')}>
                                    {item.displayName}
                                </Text>
                            </Box>
                        </TouchableOpacity>
                    ))}
                </Box>
            </Box>
        </DrawerContentScrollView>
    );
}

export default BusinessSideBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: menuDrawerBg,
        width: gpsw(menuDrawerWidth),
        height: gpsh(menuDrawerHeight),
        padding: gpsh('24'),
        borderTopRightRadius: gpsh('20'),
        borderBottomRightRadius: gpsh('20'),
        gap: gpsh('24'),
    },
    title: {
        fontSize: gpsw('24'),
        fontWeight: 'bold',
        marginBottom: gpsh('20'),
        color: '#fff',
    },
    item: {
        fontSize: gpsw('18'),
        marginBottom: gpsh('10'),
        color: 'blue',
        backgroundColor: '#888',
    },
});
