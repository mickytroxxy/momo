import { DashBoardDataType } from "@/component/ComponentTypings";

export const DashboardCms: DashBoardDataType = [
    {
        type: 'Header',
        data: {
            type: 'CurvedHeader',
            data: {
                left: {
                    type: 'Icon',
                    data: {
                        id: 'AccountsBtn',
                        Icon: 'PersonroundIcon',
                        onPress: 'openDrawer',
                    }
                },
                center: {
                    type: 'Icon',
                    data: {
                        id: 'MomoLogoBtn',
                        Icon: 'MomoIcon',
                        size: 40
                    }
                },
                right: {
                    type: 'Icon',
                    data: {
                        id: 'NotificationsBtn',
                        Icon: 'NotifoutlineIcon',
                    }
                },
            },
            background: 'DashboardHeaderBg',
            height: 180
        },
    },
    {
        type: 'MainWalletCard',
        data: {
            WalletHeader: {
                activeIcon: {
                    id: 'EyeOpenBtn',
                    Icon: 'EyeIcon',
                    onPress: 'FunctionName',
                },
                inactiveIcon: {
                    id: 'EyeSlashBtn',
                    Icon: 'EyeslashIcon',
                    onPress: 'FunctionName',
                }
            },
            WalletFooter: [
                {
                    type: 'Icon',
                    data: {
                        id: 'AllowCashoutBtn',
                        label: 'Allow Cashout',
                        Icon: 'CashoutIcon',
                        route: undefined,
                    }
                },
                {
                    type: 'Icon',
                    data: {
                        id: 'StatementsBtn',
                        label: 'Statements',
                        Icon: 'StatementsIcon',
                        route: 'transactionscreen',
                    }
                },
            ],
            display: 'hover'
        }
    },
    {
        type: 'LinearTabButton',
        data: [
            {
                title: 'For You',
                data: [
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'BillsBtn',
                                icon: 'BillsIcon',
                                label: 'Bills',
                                screen: undefined
                            },
                            {
                                id: 'SendMoneyBtn',
                                icon: 'MomotransferIcon',
                                label: 'SendMoney',
                                screen: 'Transfer'
                            },
                        ]
                    },
                    {
                        type: 'Banner',
                        data: [
                            {
                                id: 'BannerImage1Btn',
                                image: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg',
                                route: 'offers',
                            },
                            {
                                id: 'BannerImage2Btn',
                                image: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg',
                                route: 'offers',
                            },
                        ]
                    },
                ]
            },
            {
                title: 'Pay',
                data: [
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'BankServicesBtn',
                                icon: 'Banktransfer',
                                label: 'Bank Services',
                                screen: undefined
                            },
                            {
                                id: 'SendMoneyBtn',
                                icon: 'SendIcon',
                                label: 'Send Money',
                                onPress: 'DoSomethingFN'
                            },
                        ]
                    },
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'BillsBtn',
                                icon: 'BillsIcon',
                                label: 'Bills',
                                screen: undefined
                            },
                        ]
                    },
                ]
            },
            {
                title: 'TopUp',
                data: [
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'AirtimeBtn',
                                icon: 'AirtimeIcon',
                                label: 'Airtime',
                                screen: undefined
                            },
                            {
                                id: 'BundlesBtn',
                                icon: 'DatabundlesIcon',
                                label: 'Bundles',
                                screen: undefined
                            },
                        ]
                    },
                ]
            },
            {
                title: 'services',
                data: [
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'InvestBtn',
                                icon: 'InvestIcon',
                                label: 'Invest',
                                screen: undefined
                            },
                            {
                                id: 'SaveBtn',
                                icon: 'SaveIcon',
                                label: 'Save',
                                screen: undefined
                            },
                        ]
                    },
                    {
                        type: 'MenuButton',
                        data: [
                            {
                                id: 'PesionBtn',
                                icon: 'PensionIcon',
                                label: 'Pesion',
                                screen: undefined
                            },
                            {
                                id: 'InsureBtn',
                                icon: 'InsureIcon',
                                label: 'Insure',
                                screen: undefined
                            },
                        ]
                    },
                ]
            },
            
        ]
    }
]