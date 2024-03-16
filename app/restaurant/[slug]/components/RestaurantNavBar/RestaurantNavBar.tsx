import { Tab, Tabs, TabsProps } from "@mui/material";
import Link from "next/link";

type Props = {
  value: number;
  tabs: { label: string; href: string }[];
  tabsProps?: TabsProps;
};

function a11yProps(index: number) {
  return {
    id: `details-${index}`,
    "aria-controls": `details-tabpanel-${index}`,
  };
}

export default function RestaurantNavBar({ value, tabs, tabsProps }: Props) {
  return (
    <Tabs value={value} aria-label="Restaurant Details Nav" {...tabsProps}>
      {tabs.map(({ label, href }, index) => (
        <Tab
          key={index}
          label={label}
          href={href}
          {...a11yProps(index)}
          sx={{ width: 250 }}
          LinkComponent={Link}
        />
      ))}
    </Tabs>
  );
}
