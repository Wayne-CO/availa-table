import { Box, SvgIconProps, Typography, useTheme } from "@mui/material";
import { PRICE } from "@prisma/client";

type Props = {
  price: PRICE;
} & Pick<SvgIconProps, "sx">;

export default function Price(props: Props) {
  const theme = useTheme();
  const { price } = props;

  const priceTiers = {
    CHEAP: 2,
    REGULAR: 3,
    EXPENSIVE: 4,
  };

  const renderPrice = () => {
    const total = [];
    for (let index = 0; index < 5; index++) {
      if (index < priceTiers[price]) {
        total.push(
          <Typography
            key={index}
            component="span"
            color="text.secondary"
            fontSize={theme.typography.pxToRem(14)}
            lineHeight="20px"
          >
            $
          </Typography>,
        );
      }
    }

    return <Box display="inline-flex">{total}</Box>;
  };

  return <>{renderPrice()}</>;
}
