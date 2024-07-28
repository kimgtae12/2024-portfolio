import Typograpy from 'components/Typograpy';
import React from 'react';
import { FlexBox, MainMaxWidth } from 'theme/globalStyle';
import {useTheme as useStyledTheme} from 'styled-components';
import { ProjectList, ProjectListEl, TechList } from 'utils/list';
import { Tab } from 'components/projectTab/Tab';
import { Card } from 'components/project/Card';


interface ProjectPropsType {
    isMobile? : boolean;
}

export const Project : React.FC<ProjectPropsType> = ({isMobile}) => {

    const theme = useStyledTheme();

    return(
        <FlexBox
            $isFullWidth
            $ai={'center'}
            $py={isMobile ? 4 : 10}
            $px={2}
            $bgcolor={theme.BACKGROUND}
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
                >Featured Projects</Typograpy>

                <Typograpy 
                    fontSize={isMobile ? 15 : 20}
                    fontWeight='Medium'
                    color={theme.FOREGROUND}
                >제가 지금까지 작업한 프로젝트들이에요</Typograpy>

                <FlexBox
                    $flexDirection='row'
                    $ai={'stretch'}
                    $isFullWidth
                    $mt={2}
                    style={{flexWrap:'wrap'}}
                    $gap={1.6}
                >
                    {ProjectList.map((item : ProjectListEl,index : number) => {
                        return(
                            <Card key={'project'+index} projectInfo={item} />
                        )
                    })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )

}