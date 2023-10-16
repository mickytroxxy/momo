import { StatementsLandingScreenDataType } from "@/component/ComponentTypings";

export const StatementsCms: StatementsLandingScreenDataType = [
    {
        type: 'Header',
        data: {
            type: 'CurvedHeader',
            data: {
                left: {
                    type: 'Icon',
                    data: {
                        id: 'backButton',
                        Icon: 'BackIcon',
                        onPress: 'goBack',
                    }
                },
                center: {
                    type: 'Title',
                    data: {
                        id: 'TransactionsTitle',
                        label: 'Statements',
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
            background: 'StatementBg',
            height: 211
        }
    },
    {
        type: 'BalanceCard',
        data: {
            display: 'hover'
        }
    },
    {
        type: 'MenuButton',
        data: [
            {
                id: 'StatementsBtn',
                icon: 'StatementsIcon',
                label: 'Statements',
                screen: 'statementscreen',
            },
        ]
    },
    {
        type: 'TransactionHistory',
        data: {
            headerLeft: {
                id: 'recentTransaction',
                label: 'RECENT TRANSACTIONS',
            },
            headerRight: {
                id: 'SeeMoreBtn',
                label: 'See more',
                route: 'recenttransactionscreen'
            }
        }
    },
]