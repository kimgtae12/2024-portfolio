import React from 'react';
import { FlexBox, MainMaxWidth } from 'theme/globalStyle';
import {useTheme as useStyledTheme} from 'styled-components';
import Typograpy from 'components/Typograpy';
import { techIconList } from 'utils/list';
import { SkillCard } from 'components/skills/SkillCard';

interface SkilsListPropsType {
    isMobile? : boolean;
}

export const SkilsList : React.FC<SkilsListPropsType> = ({isMobile}) => {

    const theme = useStyledTheme();

    return(
        <FlexBox
            $isFullWidth
            $ai={'center'}
            $py={isMobile ? 4 : 10}
            $px={2}
            $bgcolor={theme.MUTED}
        >
            <FlexBox
                $isFullWidth
                $maxWidth={MainMaxWidth}
                $ai={'center'}
                $gap={1.2}
            >
                <Typograpy 
                    fontSize={isMobile ? 30 : 50}
                    fontWeight='Bold'
                    color={theme.FOREGROUND}
                >Skills</Typograpy>

                <Typograpy 
                    fontSize={isMobile ? 15 : 20}
                    fontWeight='Medium'
                    color={theme.FOREGROUND}
                >다룰줄 아는 기술들이에요.</Typograpy>

                <FlexBox
                    $flexDirection='row'
                    $ai={'stretch'}
                    $jc={'center'}
                    style={{flexWrap:'wrap'}}
                    $gap={1.6}
                    $mt={2}
                    
                >
                    {techIconList.map((item,index) => {
                        return <SkillCard iconLink={item.img} name={item.name} technic={item.technic} />
                    })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    
    )

}