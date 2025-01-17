import { MainButton } from 'components/button/MainButton';
import { SubButton } from 'components/button/SubButton';
import Typograpy from 'components/Typograpy';
import React from 'react';
import styled from 'styled-components';
import { Box, FlexBox, MainMaxWidth } from 'theme/globalStyle';
import { PC } from 'utils/responsive';
import {useTheme as useStyledTheme} from 'styled-components';
import { useAnimation , motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    const imgVariants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        },
      };
    
      React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, inView]);

    return(
        <FlexBox
            $bgcolor={theme.MUTED}
            $py={isMobile ? 4 : 0}
            $isFullWidth
            $ai={'center'}
            height={isMobile ? ' auto' : 'calc(100vh - 8.6rem)'}
            $jc={'center'}
        >
            <FlexBox
                $maxWidth={MainMaxWidth}
                $isFullWidth
                $flexDirection={isMobile ? 'column' : 'row'}
                $jc={isMobile ? 'flex-start' : 'space-around'}
                $ai={isMobile ?  'flex-start' : 'center'}
                $px={2}
                $py={isMobile ? 0 : 4}
                height={isMobile ? 'auto' : '100%'}   
            >
                <FlexBox $gap={1}>
                    <Typograpy 
                        fontSize={isMobile ? 50 : 70}
                        color={theme.FOREGROUND}
                        fontWeight='Bold'
                        style={{whiteSpace:'nowrap'}}
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

                    

                    {/* <FlexBox
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

                    </FlexBox> */}
                    <FlexBox $gap={1.2} $mt={isMobile ? 2: 4}>
                        <Typograpy fontSize={30} fontWeight='Bold' color={theme.FOREGROUND}>
                            📚 #끊임없는 발전
                        </Typograpy>
                        <Typograpy fontSize={30} fontWeight='Bold' color={theme.FOREGROUND}>
                            🧑 #책임감
                        </Typograpy>
                        <Typograpy fontSize={30} fontWeight='Bold' color={theme.FOREGROUND}>
                            🚀 #목표를 위한 발걸음
                        </Typograpy>
                    </FlexBox>
                </FlexBox>
                <PC>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={imgVariants}
                    >
                        <ProfileImgArea $mt={4}> 
                            <ProfileImg src={require('assets/img/img_profile.jpg')} alt={'profile-img'} />
                        </ProfileImgArea>
                    </motion.div>
                </PC>
            </FlexBox>

        </FlexBox>
    )

}