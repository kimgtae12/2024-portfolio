import { MainButton } from 'components/button/MainButton';
import { SubButton } from 'components/button/SubButton';
import Typograpy from 'components/Typograpy';
import React from 'react';
import styled from 'styled-components';
import { Box, FlexBox, MainMaxWidth } from 'theme/globalStyle';
import { PC } from 'utils/responsive';
import {useTheme as useStyledTheme} from 'styled-components';

const ProfileImgArea = styled(FlexBox)`
    border-radius: 100rem;
    overflow: hidden;
`

const ProfileImg = styled.img`
    width : 40rem;
    height : 40rem;
`

interface ProfilePropsType {
    isMobile? : boolean;
}

export const Profile : React.FC<ProfilePropsType> = ({isMobile}) => {

    const theme = useStyledTheme();

    return(
        <FlexBox
            $bgcolor={theme.MUTED}
            $py={isMobile ? 4 : 10}
            $isFullWidth
            $ai={'center'}
        >
            <FlexBox
                $maxWidth={MainMaxWidth}
                $isFullWidth
                $flexDirection='row'
                $jc={'space-between'}
                $ai={'center'}
                $px={2}
            >
                <FlexBox $gap={1}>
                    <Typograpy 
                        fontSize={isMobile ? 50 : 70}
                        color={theme.FOREGROUND}
                        fontWeight='Bold'
                    >
                        김경태
                    </Typograpy>
                    <Typograpy
                        fontSize={isMobile ? 15 : 20}
                        color={theme.MUTED_FOREGROUND}
                        fontWeight={'Regular'}
                    >
                        Passionate Front-End Developer
                    </Typograpy>

                    <FlexBox
                        $flexDirection='row'
                        $ai={'center'}
                        $gap={1.2}
                        $mt={0.8}
                    >
                        <MainButton 
                            buttonLabel='View Projects'
                        />
                        <SubButton 
                            buttonLabel='Contact'                            
                        />

                    </FlexBox>
                </FlexBox>
                <PC>
                <ProfileImgArea
                >
                    <ProfileImg src={require('assets/img/img_profile.jpg')} alt={'profile-img'} />
                </ProfileImgArea>
                </PC>
            </FlexBox>

        </FlexBox>
    )

}