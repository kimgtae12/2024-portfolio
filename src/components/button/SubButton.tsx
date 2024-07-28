import React from "react";
import Typograpy from "../Typograpy";
import { FlexBox } from "theme/globalStyle";
import styled, { CSSProperties } from "styled-components";
import { Button } from "./button";
import {useTheme as useStyledTheme} from 'styled-components';
import { useThemeStore } from "store/useThemeStore";

interface MainButtonType {
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  disable?: boolean;
  buttonLabel: string;
  fontStyle?: string;
  onClick?: () => void;
  style?: CSSProperties;
  $br?: number;
  bgcolor?: string;
}

const SubButtonStyle = styled(Button)<{$isDarkMode : boolean}>`
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);

    &:hover{
        background-color: ${(props) => props.theme.ACCENT};
    }
    ${(props) => !props.$isDarkMode && `
      border : 1px solid ${props.theme.BORDER};
    `}

    transition: background-color 0.3s ease-out;
`

export const SubButton = React.memo(
  ({
    leftIcon,
    rightIcon,
    iconSize,
    disable,
    buttonLabel,
    fontStyle,
    onClick,
    style,
    $br,
    bgcolor,
  }: MainButtonType) => {

    const theme = useStyledTheme();
    const {theme : mode} = useThemeStore(state => state);
    const isDarkMode = mode === 'dark';

    return (
      <SubButtonStyle
        $bgc={theme.BACKGROUND}
        $br={$br ? $br : 0}
        $px={2}
        $py={1}
        disabled={disable}
        onClick={onClick}
        style={{
          whiteSpace: "nowrap",
          ...style,
        }}
        $isDarkMode={isDarkMode}
      >
        <Typograpy
          fontSize={13}
          color={theme.ACCENT_FOREGROUND}
          fontWeight="Regular"
          fontStyle={fontStyle}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          iconSize={iconSize}
        >
          {buttonLabel}
        </Typograpy>
      </SubButtonStyle>
    );
  }
);
