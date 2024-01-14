import { PRICE } from "@prisma/client";
import MonetizationOnSharp from "@mui/icons-material/MonetizationOnSharp";
import { Box, SvgIconProps } from "@mui/material";

type Props = {
  price: PRICE;
} & Pick<SvgIconProps, "sx">;

export default function Price(props: Props) {
  const { price, ...rest } = props;

  const priceTiers = {
    CHEAP: 2,
    REGULAR: 3,
    EXPENSIVE: 4,
  };

  const sharedProps = {
    sx: { fontSize: 18 },
  };
  const activePrice = (
    <MonetizationOnSharp color="green" {...sharedProps} {...rest} />
  );
  const inactivePrice = (
    <MonetizationOnSharp color="grey" {...sharedProps} {...rest} />
  );

  const renderPrice = () => {
    const total = [];
    for (let index = 0; index < 5; index++) {
      if (index < priceTiers[price]) {
        total.push(activePrice);
      } else {
        total.push(inactivePrice);
      }
    }

    return <Box>{total}</Box>;
  };

  return <>{renderPrice()}</>;
}
