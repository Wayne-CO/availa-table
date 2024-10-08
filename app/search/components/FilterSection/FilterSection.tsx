import { Box, Tab, Tabs } from "@mui/material";
import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import TitleSection from "@/app/components/TitleSection";
import { PriceFilter } from "../../SearchSideBar/SearchSideBar";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

type Props = {
  title: string;
  filters: Location[] | Cuisine[] | PriceFilter;
  searchParams: { city?: string; cuisine?: string; price?: string };
  value: number | boolean;
  searchQuery: "city" | "cuisine" | "price";
  handleValueChange: (event: React.SyntheticEvent, cityIndex: number) => void;
};

export default function FilterSection({
  title,
  filters,
  searchParams,
  value,
  searchQuery,
  handleValueChange,
}: Props) {
  return (
    <Box>
      <TitleSection title={title} />
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
          const label = filter.name.toLowerCase();
          return (
            <Tab
              component={Link}
              label={label}
              key={filter.id}
              href={{
                pathname: "search",
                query: {
                  ...searchParams,
                  [searchQuery]: filter.name,
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
                alignItems: "baseline",
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
