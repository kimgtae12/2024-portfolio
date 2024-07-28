import styled from "styled-components";
import { borderMixin, marginPaddingMixin } from "theme/globalStyle";
import { BoarderViewType, MarginPaddingMixinType } from "theme/styled.type";

interface ButtonType {
  width?: string | number;
  height?: string | number;
  $bgc?: string; //백그라운드 색상
}

export const Button = styled.button<
  ButtonType & MarginPaddingMixinType & BoarderViewType
>`
  cursor: pointer;
  ${({ width }) =>
    width && `width: ${typeof width === "string" ? width : `${width}rem`};`}
  ${({ height }) =>
    height &&
    `height: ${typeof height === "string" ? height : `${height}rem`};`}
    background-color : ${(props) => props.$bgc || props.theme.PRIMARY};
  ${marginPaddingMixin}
  ${borderMixin}
`;
