import React, { useState } from 'react';
import { Box, FlexBox } from '../theme/globalStyle';
import { Header } from 'components/Header';
import { Profile } from 'section/Profile';
import styled from 'styled-components';
import { Project } from 'section/Projects';
import { LightIcon } from 'components/icon/icon';
import { useMediaQuery } from 'react-responsive';
import { useThemeStore } from 'store/useThemeStore';
import { useTheme as useStyledTheme } from 'styled-components';
import { SkilsList } from 'section/SkilsList';
const DarkModeIcon = styled.img`
    width:3rem;
    height:3rem;
    object-fit: cover;
    border:none;
    overflow: hidden;
`


export const MainPage = () => {

    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

    const {theme : mode ,  toggleTheme } = useThemeStore();
    const theme = useStyledTheme();
    const isDarkMode = mode === 'dark';

    return(
        <FlexBox $isFullWidth>


            <Header isMobile={isMobile} />
            <Profile isMobile={isMobile}/>
            <Project isMobile={isMobile}/>
            <SkilsList isMobile={isMobile} />


            <Box
                $position='fixed'
                $right={20}
                $bottom={20}
                $isPointer
                $br={100}
                $bc={theme.BORDER}
                $bw={1}
                $pa={1}
                onClick={()=>{
                    toggleTheme();
                }}
                $bgcolor={theme.BACKGROUND}
            >
                {isDarkMode ?
                    <DarkModeIcon src={require('assets/img/ic_dark.png')} alt={'darkmode-dark'}/>
                :
                    <DarkModeIcon src={require('assets/img/ic_light.png')} alt={'darkmode-light'} />
                }
            </Box>
        </FlexBox>
    )

}