import {
  Button,
  useColorModeValue,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import React, { memo } from "react";
import Loading from "./Loading";
import dot from "dot-object";
import { hexToRgb } from "../utils/common";
// import Loading from "../Loading";

interface IButtonComponent {
  variant: "contained" | "outlined";
  size?: "button1" | "button2" | "button3";
  color?: string;
  startIcon?: any;
  endIcon?: any;
  isLoading?: boolean;

  [key: string]: any;
}

const ButtonComponent: React.FC<IButtonComponent> = memo(
  ({
    children,
    isLoading,
    color = "teal.150",
    size = "button2",
    variant = "contained",
    startIcon,
    endIcon,
    ...rest
  }) => {
    let styleButton = {};
    const { colors } = useTheme();
    const [isSmallThan480] = useMediaQuery(
      "(max-width: 480px ) and (min-width: 0px )"
    );
    const [isBetween1024And481] = useMediaQuery(
      "(max-width: 1024px ) and (min-width: 481px )"
    );

    const getValue = (button1: string, button2: string, button3: string) => {
      if (isSmallThan480) return button3;
      if (isBetween1024And481) return button2;
      return button1;
    };

    const gray700ToGray300 = useColorModeValue("gray.300", "gray.700");
    const gray500ToGrayWhite = useColorModeValue("white", "gray.500");

    const getStyle = (typeOfStyle: string) => {
      switch (typeOfStyle) {
        case "button1":
          return {
            fontWeight: getValue("medium", "medium", "medium"),
            fontSize: getValue("16px", "16px", "16px"),
            px: getValue("14px", "16px", "20px"),
            py: getValue("10px", "12px", "12px"),
            borderRadius: "12px",
          };
        case "button2":
          return {
            fontWeight: getValue("medium", "medium", "medium"),
            fontSize: getValue("14px", "14px", "14px"),
            px: getValue("12px", "14px", "16px"),
            py: getValue("8px", "10px", "10px"),
            borderRadius: "10px",
          };
        case "button3":
          return {
            fontWeight: getValue("medium", "medium", "medium"),
            fontSize: getValue("14px", "14px", "14px"),
            px: getValue("10px", "12px", "12px"),
            py: getValue("4px", "6px", "6px"),
            borderRadius: "8px",
          };
        default:
          return {
            fontWeight: getValue("medium", "medium", "medium"),
            fontSize: getValue("14px", "14px", "14px"),
          };
      }
    };

    if (variant === "contained") {
      styleButton = {
        bg: color,
        color: "white",
        cursor: "pointer",
        ...getStyle(size),
      };
    } else {
      styleButton = {
        bg: "transparent",
        borderWidth: "1.5px",
        borderColor: color,
        color: color,
        cursor: "pointer",
        ...getStyle(size),
      };
    }
    const disabledStyle = {
      color: gray500ToGrayWhite,
      bg: gray700ToGray300,
      borderWidth: "1.5px",
      borderColor: gray700ToGray300,
      cursor: "no-drop",
      ...getStyle(size),
    };

    let hoverStyle: any = {
      filter: "brightness(80%)",
    };
    if (variant === "outlined") {
      const flattenColor = dot.dot(colors);
      hoverStyle = {
        bg: hexToRgb(color[0] === "#" ? color : flattenColor[color], "0.1"),
      };
    }
    const isDisabled = isLoading || rest?.isDisabled;
    return (
      <Button
        {...styleButton}
        isDisabled={isDisabled}
        _hover={isDisabled ? {} : hoverStyle}
        _disabled={disabledStyle}
        _active={isDisabled ? {} : hoverStyle}
        leftIcon={startIcon}
        rightIcon={endIcon}
        {...rest}
      >
        <Loading duration={2} isDisable={!isLoading} mr="10px" />
        {children}
      </Button>
    );
  }
);

export default ButtonComponent;
