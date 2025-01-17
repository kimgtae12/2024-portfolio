import styled, { css } from "styled-components";
import {
  BoarderViewType,
  BoxShadowType,
  CustomDivType,
  CustomFlexType,
  CustomTextInputType,
  CustomTextType,
  MarginPaddingMixinType,
  PositionType,
} from "./styled.type";

export const MainMaxWidth = 106;
export const UserMaxWidth = 59.6;

//margin & padding style
const marginPaddingMixin = css<MarginPaddingMixinType>`
  margin-top: ${({ $mt }) => $mt && `${$mt}rem`};
  margin-bottom: ${({ $mb }) => $mb && `${$mb}rem`};
  margin-left: ${({ $ml }) => $ml && `${$ml}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  padding-left: ${({ $pl }) => $pl && `${$pl}rem`};
  padding-right: ${({ $pr }) => $pr && `${$pr}rem`};
  padding-top: ${({ pt }) => pt && `${pt}rem`};
  padding-bottom: ${({ $pb }) => $pb && `${$pb}rem`};

  ${({ mx }) =>
    mx &&
    `
    margin-left : ${mx + "rem"};
    margin-right : ${mx + "rem"};
  `}
  ${({ $my }) =>
    $my &&
    `
    margin-top : ${$my + "rem"};
    margin-bottom : ${$my + "rem"};
  `}
  ${({ $px }) =>
    $px &&
    `
    padding-left : ${$px + "rem"};
    padding-right : ${$px + "rem"};
  `}
  ${({ $py }) =>
    $py &&
    `
    padding-top : ${$py + "rem"};
    padding-bottom : ${$py + "rem"};
  `}
  ${({ ma }) =>
    ma &&
    `
        margin-top : ${ma + "rem"};
        margin-bottom : ${ma + "rem"};
        margin-left : ${ma + "rem"};
        margin-right : ${ma + "rem"};
    `}
  ${({ $pa }) =>
    $pa &&
    `
        padding-top : ${$pa + "rem"};
        padding-bottom : ${$pa + "rem"};
        padding-left : ${$pa + "rem"};
        padding-right : ${$pa + "rem"};
    `}
`;

//border style
const borderMixin = css<BoarderViewType>`
  border-style: solid;
  border-width: ${({ $bw }) => ($bw ? `${$bw}px` : 0)};
  border-top-width: ${({ $btw }) => $btw && `${$btw}px`};
  border-bottom-width: ${({ $bbw }) => $bbw && `${$bbw}px`};
  border-left-width: ${({ $blw }) => $blw && `${$blw}px`};
  border-right-width: ${({ $brw }) => $brw && `${$brw}px`};

  border-color: ${({ $bc }) => $bc};
  border-top-color: ${({ $btc }) => $btc};
  border-bottom-color: ${({ $bbc }) => $bbc};
  border-left-color: ${({ $blc }) => $blc};
  border-right-color: ${({ $brc }) => $brc};

  border-radius: ${({ $br }) => $br && `${$br}px`};
  border-top-left-radius: ${({ $btlr }) => $btlr && `${$btlr}px`};
  border-top-right-radius: ${({ $btrr }) => $btrr && `${$btrr}px`};
  border-bottom-left-radius: ${({ $bblr }) => $bblr && `${$bblr}px`};
  border-bottom-right-radius: ${({ $bbrr }) => $bbrr && `${$bbrr}px`};
`;

//position이 absolute일때 사용 - 경태
const PositionMixin = css<PositionType>`
  top: ${({ $top }) => $top && typeof $top === 'string' ? $top : `${$top}px`};
  left: ${({ $left }) => $left && typeof $left === 'string' ? $left : `${$left}px`};
  right: ${({ $right }) => $right && typeof $right === 'string' ? $right : `${$right}px`};
  bottom: ${({ $bottom }) => $bottom && typeof $bottom === 'string' ? $bottom : `${$bottom}px`};
`;

const BoxShadowMixin = css<BoxShadowType>`
  ${({ $shadowType }) =>
    $shadowType &&
    ($shadowType === "heavy"
      ? "box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08) ,0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 16px 20px 0px rgba(0, 0, 0, 0.12);"
      : $shadowType === "strong"
      ? "box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 6px 12px 0px rgba(0, 0, 0, 0.12);"
      : $shadowType === "emphasize"
      ? "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08) , 0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12);"
      : "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12);")}
`;

//div style - 경태
const Box = styled.div<CustomDivType>`
  /* overflow-y:auto; */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  ${marginPaddingMixin}
  ${borderMixin}
    ${PositionMixin}
    ${BoxShadowMixin}
    position : ${({ $position }) => $position || "relative"};
  display: ${({ display }) => display || "block"};
  ${({ $flex }) => $flex && `flex:${$flex};`}

  ${({ background }) => background && `background : ${background};`}
    ${({ $bgcolor }) => $bgcolor && `background-color: ${$bgcolor};`}
    ${({ width }) =>
    width && `width: ${typeof width === "string" ? width : `${width}rem`};`}
    ${({ $isFullWidth }) => $isFullWidth && `width : 100%;`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === "string" ? height : `${height}rem`};`}

    ${({ $minWidth }) =>
    $minWidth &&
    `min-width: ${
      typeof $minWidth === "string" ? $minWidth : `${$minWidth}rem`
    };`}
    ${({ $minHeight }) =>
    $minHeight &&
    `min-height: ${
      typeof $minHeight === "string" ? $minHeight : `${$minHeight}rem`
    };`}

    ${({ $maxWidth }) =>
    $maxWidth &&
    `max-width: ${
      typeof $maxWidth === "string" ? $maxWidth : `${$maxWidth}rem`
    };`}
    ${({ maxHeight }) =>
    maxHeight &&
    `max-height: ${
      typeof maxHeight === "string" ? maxHeight : `${maxHeight}rem`
    };`}


    ${({ backdropFilter }) =>
    backdropFilter &&
    `
        backdrop-filter : ${backdropFilter};
        -webkit-backdrop-filter : ${backdropFilter};
    `}
    ${({ $isPointer }) => $isPointer && `cursor:pointer;`}

    transition : all 0.3s ease-in-out;
`;

//$flex style - 경태
const FlexBox = styled(Box)<CustomFlexType>`
  display: flex;
  ${({ $gap }) => $gap && `gap : ${$gap}rem;`}
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  justify-content: ${({ $jc }) => $jc || "flex-start"};
  align-items: ${({ $ai }) => $ai || "flex-start"};

  transition : all 0.3s ease-in-out;
`;

//P태그 커스텀 - 경태
const CustomPText = styled.p<CustomTextType>`
  font-size: ${({ $fs }) => $fs && `${$fs}rem`};
  color: ${(props) => props.$fc || props.theme.DEFAULT_FONT_COLOR};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};

  text-align: ${({ text_align }) => text_align || "left"};
  overflow-y: hidden;
  ${marginPaddingMixin}
  line-height:140%;
  letter-spacing: -0.1rem;
  ${({ background }) => background && `background : ${background};`}
  ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
`;

//text-input 커스텀 - 경태
const CustomTextInput = styled.input<CustomTextInputType>`
  font-size: ${({ $fs }) => $fs && `${$fs}rem`};
  color: ${(props) => props.$fc || props.theme.BLACK};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  word-break: "break-word";
  ${marginPaddingMixin}
  ${borderMixin}
    ${({ $bgcolor }) => $bgcolor && `background-color: ${$bgcolor};`}
    ${({ width }) =>
    width && `width: ${typeof width === "string" ? width : `${width}rem`};`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === "string" ? height : `${height}rem`};`}

    ${({ ph_color }) =>
    ph_color &&
    `
        ::placeholder : {
            color: ${ph_color}
        }
    `}
`;

export {
  Box,
  FlexBox,
  CustomPText,
  CustomTextInput,
  marginPaddingMixin,
  borderMixin,
};