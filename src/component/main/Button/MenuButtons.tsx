import { MenuButtonsType } from '@/component/ComponentTypings'
import { Box } from '@atom'
import { Menu } from '@molecule'
import React from 'react'

export default function MenuButtons(data: MenuButtonsType, index: number) {
    return (
        <Box gap={'vsm'}>
            {data.map((item) => {
                return <Menu content={data} key={index} />
            })}
        </Box>
    )
}