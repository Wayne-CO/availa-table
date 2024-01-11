import Button from "./MuiButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: "Example/MuiButton", component: Button };
export interface ButtonProps {
  label: string;
}

// export const Button = ({ label, ...rest }: ButtonProps) => (
//   <MuiButton {...rest}>{label}</MuiButton>
// );

export const Primary = {
  args: {
    label: "hi",
    variant: "contained",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    label: "second",
    variant: "text",
    size: "small",
  },
};
