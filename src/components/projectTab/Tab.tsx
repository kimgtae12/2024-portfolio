import Typograpy from 'components/Typograpy';
import React from 'react';
import { FlexBox } from 'theme/globalStyle';

import {useTheme as useStyledTheme} from 'styled-components';

interface TabPropsType {
    isMobile? : boolean;
    label : string;
}

export const Tab : React.FC<TabPropsType> = ({label,isMobile}) => {

    const theme = useStyledTheme();



    return(
        <FlexBox $py={2} $flex={1} $ai={'center'} $jc={'center'}>
            <Typograpy
                color={theme.FOREGROUND}
                fontSize={isMobile ? 15 : 20}
                fontWeight='Bold'
            >
                {label}
            </Typograpy>
        </FlexBox>
    )

} 