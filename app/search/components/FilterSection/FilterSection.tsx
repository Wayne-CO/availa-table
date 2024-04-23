import { Box, Tab, Tabs } from "@mui/material";
import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import TitleSection from "@/app/components/TitleSection";

// const prices = [
//   { price: PRICE.CHEAP, label: "$" },
//   { price: PRICE.REGULAR, label: "$$" },
//   { price: PRICE.EXPENSIVE, label: "$$$" },
// ];

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

type Props = {
  title: string;
  filters: Location[] | Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: string };
  value: number;
  handleValueChange: (event: React.SyntheticEvent, cityIndex: number) => void;
};

export default function FilterSection({
  title,
  filters,
  searchParams,
  value,
  handleValueChange,
}: Props) {
  return (
    <Box>
      <Box p="26px 0 16px">
        {/* Todo: Fix padding in component */}
        <TitleSection title={title} />
      </Box>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleValueChange}
        aria-label={title}
        sx={{
          "& .MuiTabs-indicator": { left: 0, backgroundColor: "blue.300" },
          "& .MuiButtonBase-root.Mui-selected": {
            color: "blue.300",
          },
          pl: "40px",
        }}
      >
        {filters.map((filter, index) => {
          return (
            <Tab
              component={Link}
              label={filter.name}
              key={filter.id}
              href={{
                pathname: "search",
                query: {
                  ...searchParams,
                  city: filter.name,
                },
              }}
              {...a11yProps(index)}
              sx={{
                width: "fit-content",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                minHeight: "initial",
                p: "4px 0 4px 14px",
                textTransform: "capitalize",
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
