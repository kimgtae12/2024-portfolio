import React, { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { FlexBox, marginPaddingMixin } from "theme/globalStyle";
import { CustomTextType } from "theme/styled.type";

export const Text = styled.span<CustomTextType>`
  font-size: ${({ $fs }) => $fs && `${$fs / 10}rem`};
  color: ${(props) => props.$fc || props.theme.BLACK};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  text-align: ${({ text_align }) => text_align || "left"};
  word-break: break-word;
  ${marginPaddingMixin}
  ${({ background }) => background && `background : ${background};`}
    ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
  ${({ fontStyle }) => fontStyle && `${fontStyle}`};

  transition : all 0.3s ease-in-out;
`;


interface TypograpyType {
  fontSize?: number;
  fontWeight?:
    | "Thin"
    | "Light"
    | "Regular"
    | "Medium"
    | "SemiBold"
    | "Bold"
    | "ExtraBold";
  style?: CSSProperties;
  color?: string;
  children: ReactNode;
  type?: "default" | "pri" | "assis";
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  fontStyle?: string;

  className?: string;
}

const Typograpy = React.memo(
  ({
    fontSize,
    fontWeight,
    style,
    color,
    children,
    type = "default",
    leftIcon,
    rightIcon,
    iconSize,
    fontStyle,
    className,
  }: TypograpyType) => {
    if (leftIcon || rightIcon) {
      return (
        <FlexBox $flexDirection="row" $jc="center" $ai="center" $gap={0.4}>
          {leftIcon && (
            <img
              src={leftIcon}
              width={iconSize || 20}
              height={iconSize || 20}
            />
          )}
          <Text
            $fs={fontSize}
            $fc={color}
            $fw={fontWeight}
            fontStyle={fontStyle}
            className={className}
            style={{ ...style }}
          >
            {children}
          </Text>
          {rightIcon && (
            <img
              src={rightIcon}
              width={iconSize || 20}
              height={iconSize || 20}
            />
          )}
        </FlexBox>
      );
    } else {
      return (
        <Text
          style={{ ...style }}
          $fs={fontSize}
          $fc={color}
          $fw={fontWeight}
          fontStyle={fontStyle}
          className={className}
        >
          {children}
        </Text>
      );
    }
  }
);

export default Typograpy;
