import { renderHeader, renderLinearTabs, renderMainWalletCard } from '@/component/render';
import { Box, SafeAreaContainer } from '@atom';
import React, { useEffect, useState } from 'react';
import { DashboardCms } from '../../../fixtures/DashboardCmsData';

const initialState = {
    headerContent: null,
    MainWalletContent: null,
    LinearTabsContent: null,
};

export default function Dashboard() {
    const [content, setContent] = useState(initialState);
    const { headerContent, MainWalletContent, LinearTabsContent } = content

    const fetcCmshDasboard = () => {
        //SET ALL INITIAL DATA & Re-FETCH API and set Data Again
        setContent(initialState);

        let data = DashboardCms
        return data.map((item: { type: string, data: any }) => {
            const { type, data } = item
            switch (type) {
                case 'Header':
                    return setContent(prevState => ({
                        ...prevState,
                        headerContent: data,
                    }))
                case 'MainWalletCard':
                    return setContent(prevState => ({
                        ...prevState,
                        MainWalletContent: data,
                    }))
                case 'LinearTabButton':
                    return setContent(prevState => ({
                        ...prevState,
                        LinearTabsContent: data,
                    }))
                default:
                    return null
            }
        });
    }

    useEffect(() => {
        fetcCmshDasboard()
    }, DashboardCms)

    return (
        <SafeAreaContainer bgColor="#004f71" flex={1} flexGrow={1}>
            <Box bg={'white'} flexGrow={1}>
                {headerContent && renderHeader(headerContent)}
                <Box
                    px={'hm'}
                    style={{
                        marginTop: '-33%',
                    }}>
                    {MainWalletContent && renderMainWalletCard(MainWalletContent)}
                </Box>
                <Box flexGrow={1} mt={'vm'} width={'100%'}>
                    {
                        LinearTabsContent && renderLinearTabs(LinearTabsContent)
                    }
                </Box>
            </Box>
        </SafeAreaContainer>
    );
}