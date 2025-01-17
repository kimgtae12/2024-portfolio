import Typograpy from 'components/Typograpy';
import React from 'react';
import { FlexBox, MainMaxWidth } from 'theme/globalStyle';
import {useTheme as useStyledTheme} from 'styled-components';
import { ProjectList, ProjectListEl, TechList } from 'utils/list';
import { Tab } from 'components/projectTab/Tab';
import { Card } from 'components/project/Card';
import { useAnimation , motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface ProjectPropsType {
    isMobile? : boolean;
}

export const Project : React.FC<ProjectPropsType> = ({isMobile}) => {

    const theme = useStyledTheme();

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    //motion 컨테이너 셋팅
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        //보여질때 설정
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // 각 자식 요소 사이의 지연 시간
        },
        },
    };

    const itemVariants = {
        //각 이미지 motion 설정
        hidden: { opacity: 0, y: 50 }, //초기엔 y위치가 50
        visible: {
          opacity: 1,
          y: 0, //보여지면 정위치로 이동
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
                <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            style={{ width: "100%" }}
                >
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
                                <motion.div key={'project'+index} style={{flex:1,display:'flex'}} variants={itemVariants}>
                                    <Card projectInfo={item} />
                                </motion.div>
                            )
                        })}
                    </FlexBox>
                </motion.div>
            </FlexBox>
        </FlexBox>
    )

}