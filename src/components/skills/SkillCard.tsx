import React from 'react';
import { FlexBox } from 'theme/globalStyle';
import styled, { useTheme as useStyledTheme } from 'styled-components';
import Typograpy from 'components/Typograpy';
import { useMediaQuery } from 'react-responsive';

const SkillIcon = styled.img`
    width : 5rem;
    height : 5rem;
    object-fit : contain;
`

interface SkillCardPropsType {
    iconLink : string,
    name : string,
    technic : number,
}

export const SkillCard : React.FC<SkillCardPropsType> = ({iconLink,name,technic}) => {


    const theme = useStyledTheme();

    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

    return(
        <FlexBox
            $minWidth={22}
            $br={8}
            $bgcolor={theme.BACKGROUND}
            $py={2}
            $jc={'center'}
            $ai={'center'}
            $gap={0.8}
        >
            <SkillIcon src={iconLink}/>

            <Typograpy fontWeight={'Bold'} fontSize={isMobile ? 15 : 18} color={theme.CARD_FOREGROUND}>{name}</Typograpy>
        </FlexBox>
    )

}