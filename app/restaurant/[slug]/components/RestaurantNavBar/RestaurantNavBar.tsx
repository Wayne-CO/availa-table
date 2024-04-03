import { Box, Tab, TabProps, Tabs, TabsProps } from "@mui/material";

type Props = {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
  tabs: { label: string }[];
  tabsProps?: TabsProps;
  tabProps?: TabProps;
};

function a11yProps(index: number) {
  return {
    id: `details-${index}`,
    "aria-controls": `details-tabpanel-${index}`,
  };
}

export default function RestaurantNavBar({
  handleTabChange,
  value,
  tabs,
  tabsProps,
  tabProps,
}: Props) {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        {...tabsProps}
      >
        {tabs.map(({ label }, index) => (
          <Tab key={index} label={label} {...a11yProps(index)} {...tabProps} />
        ))}
      </Tabs>
    </Box>
  );
}
