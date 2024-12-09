import {
  Step,
  StepLabel,
  Stepper,
  StepperProps,
  SxProps,
  Typography,
} from "@mui/material";

type Props = {
  steps: {
    label: string;
    optional: string;
  }[];
  activeStep: number;
  sxStepper?: StepperProps & SxProps;
};

export default function ReservationStepper({
  steps,
  activeStep,
  sxStepper,
}: Props) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={sxStepper}>
      {steps.map(({ label, optional }) => {
        return (
          <Step key={label}>
            <StepLabel
              optional={
                <Typography variant="caption" color="text.primary">
                  {optional}
                </Typography>
              }
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
