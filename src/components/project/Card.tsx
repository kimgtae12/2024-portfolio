import React from 'react';
import { Box, FlexBox } from 'theme/globalStyle';
import styled, { useTheme as useStyledTheme } from 'styled-components';
import Typograpy from 'components/Typograpy';
import { ProjectListEl } from 'utils/list';
import { useMediaQuery } from 'react-responsive';
import { MainButton } from 'components/button/MainButton';
import { SubButton } from 'components/button/SubButton';


interface CardPropsType{
    projectInfo : ProjectListEl;
}

const CardWrapper = styled(FlexBox)`
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);

`

const StoreImg = styled.img`
    width : 3.5rem;
    height : 3.5rem;
`

const LogoImg = styled.img<{$isApp? : boolean}>`
    border-radius:20%;
    width : 15rem;
    height : 15rem;
    object-fit: contain;
    ${(props) => props.$isApp && `
        border: 1px solid ${props.theme.BORDER};
    `}
`

export const Card : React.FC<CardPropsType> = ({projectInfo}) => {

    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

    const theme = useStyledTheme();

    const moveLink = (link : string) => {
        window.open(link);
    }

    return(
        <FlexBox
            $br={8}
            $bw={1}
            $bc={theme.BORDER}
            $pa={2}
            $bgcolor={theme.CARD}
            $flex={1}
            $minWidth={30}
            $gap={2}
            $jc={'space-between'}
            >
            <FlexBox $gap={1.2} $isFullWidth>
                <FlexBox
                    $minHeight={21}
                    $maxWidth={'100%'}
                    $isFullWidth
                    $jc={'center'}
                    $ai={'center'}
                >
                    <LogoImg $isApp={projectInfo.androidLink !== '' || projectInfo.iosLink !== ''} src={projectInfo.img} />
                </FlexBox>
                <Typograpy
                    fontSize={isMobile ? 15 : 18}
                    color={theme.CARD_FOREGROUND}
                    fontWeight='Bold'
                >{projectInfo.title}</Typograpy>
                {/* <FlexBox
                    $flexDirection='row'
                    $ai={'center'}
                    $gap={0.8}
                    style={{flexWrap:'wrap'}}
                >
                    {projectInfo.env.map(((envItem,envIndex) => {
                        return(
                            <FlexBox $ai={'center'} key={'envItem'+envIndex}>
                                {envItem.icon !== '' ? 
                                    <img key={envIndex} src={`https://img.shields.io/badge/${envItem.name}-${envItem.color}?style=for-the-badge&logo=${envItem.icon}&logoColor=white`}></img>
                                    :
                                    <Box $px={1.2} $py={0.7} $bgcolor={theme.BLACK}>
                                        <Typograpy fontSize={12} fontWeight='Bold' color={theme.WHITE}>{envItem.name}</Typograpy>
                                    </Box>
                                }
                            </FlexBox>
                        )
                    }))}
                </FlexBox> */}
            </FlexBox>
            <FlexBox
                $flexDirection={'row'}
                $ai={'center'}
                $jc={'flex-end'}
                $isFullWidth
                $gap={1.2}
            >
                {(projectInfo.isLink && projectInfo.link !== '') &&
                    <SubButton 
                        buttonLabel='보기'
                        onClick={()=>{
                            moveLink(projectInfo.link)
                        }}
                    />
                }
                {projectInfo.androidLink !== '' &&
                <Box
                    $isPointer
                    onClick={()=>{
                        moveLink(projectInfo.androidLink);
                    }}
                    $pa={0.5}
                    $br={8}
                    $bc={theme.BORDER}
                    $bw={1}
                >
                    <StoreImg src={require('assets/img/playstore_ic.png')} />
                </Box>
                }
                {projectInfo.iosLink !== '' &&
                <Box
                    $isPointer
                    onClick={()=>{
                        moveLink(projectInfo.iosLink);
                    }}
                    $pa={0.5}
                    $br={8}
                    $bc={theme.BORDER}
                    $bw={1}
                >
                    <StoreImg src={require('assets/img/appstore_ic.png')} />
                </Box>
                }
            </FlexBox>
        </FlexBox>
    )

}