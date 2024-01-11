import { Button, ButtonProps } from "@mui/material";

type props = {
  label: string;
};

export default function MuiButton({
  label,
  ...rest
}: props & Pick<ButtonProps, "variant" | "size" | "color">) {
  return <Button {...rest}>{label}</Button>;
}
