import React from 'react';
import { Box, FlexBox } from 'theme/globalStyle';
import Typograpy, { Text } from './Typograpy';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Mobile, PC } from 'utils/responsive';
import {useTheme as useStyledTheme} from 'styled-components';

const HeaderWrapper = styled(FlexBox)`
 -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);

`

const MenuListEl = styled(Text)`
    font-size : 2.2rem;
    color : ${(props)=>props.theme.MUTED_FOREGROUND};
    font-family: 'Regular';
    cursor: pointer;

    
    &:hover{
        color : ${(props) => props.theme.FOREGROUND};
    }

    transition : color 0.3s ease-in-out;
`

interface HeaderPropsType {
    isMobile? : boolean;
}


export const Header : React.FC<HeaderPropsType> = ({isMobile}) => {

    const theme = useStyledTheme();

    return (
        <HeaderWrapper
            $bgcolor={theme.BACKGROUND}
            $position={'sticky'}
            $top={0}
            $left={0}
            $isFullWidth
            $py={3}
            $flexDirection={'row'}
            $jc={'flex-end'}
            $ai={'center'}
            $px={2}
            $gap={2.4}
            style={{zIndex:3}}
        >
            <PC>
                <MenuListEl>Projects</MenuListEl>
                <MenuListEl>Skils</MenuListEl>
                <MenuListEl>Contact</MenuListEl>
            </PC>
            <Mobile>
                <FlexBox
                    $jc={'center'}
                    $ai={'center'}
                    $pa={1}
                    $bc={theme.INPUT}
                    $br={8}
                    $bw={1}
                >
                    <FlexBox $gap={0.5}>
                        <Box width={2} height={0.2} $br={4} $bgcolor={theme.HAMBERGER_MENU}   />
                        <Box width={2} height={0.2} $br={4} $bgcolor={theme.HAMBERGER_MENU}   />
                        <Box width={2} height={0.2} $br={4} $bgcolor={theme.HAMBERGER_MENU}   />
                    </FlexBox>
                </FlexBox>
            </Mobile>
            {/* <Typograpy color={colors.FOREGROUND} fontWeight='Bold' fontSize={30}>KimKyoungTae</Typograpy>    */}
        </HeaderWrapper>
    )

}