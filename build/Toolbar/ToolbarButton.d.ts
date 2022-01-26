import { IconButtonProps } from "@chakra-ui/react";
import * as React from "react";
interface ToolbarButtonProps extends Omit<IconButtonProps, "aria-label"> {
    label: string;
}
declare const ToolbarButton: React.FC<ToolbarButtonProps>;
export default ToolbarButton;
