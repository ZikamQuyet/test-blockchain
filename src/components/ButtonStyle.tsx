import { Button } from "@chakra-ui/react";
import React from "react";
export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const ButtonStyle: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      sx={{ "--my-color": "#1AC486" }}
      bg="var(--my-color)"
      w="100%"
      maxWidth="566px"
      borderRadius="24px"
      height="56px"
      fontSize="16px"
      border="none"
      color="white"
      _hover={{ opacity: "90%" }}
      {...props}
    >
      {label}
    </Button>
  );
};
