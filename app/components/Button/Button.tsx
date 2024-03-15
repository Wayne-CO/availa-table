import MuiButton, { ButtonProps } from "@mui/material/Button";

type Props = Pick<ButtonProps, "variant" | "color" | "children">;

export default function Button(props: Props) {
  return <MuiButton {...props} />;
}
