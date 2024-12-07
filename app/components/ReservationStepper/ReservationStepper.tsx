import { Step, StepLabel, Stepper, StepperProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  steps: string[];
  activeStep: number;
  optionalLabels: ReactNode[];
  sxStepper: StepperProps & SxProps;
};

export default function ReservationStepper({
  steps,
  activeStep,
  optionalLabels,
  sxStepper,
}: Props) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={sxStepper}>
      {steps.map((label, index) => {
        return (
          <Step key={label}>
            <StepLabel optional={optionalLabels[index]}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
