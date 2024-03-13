import { Tab, Tabs } from "@mui/material";

type Props = {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
  tabs: { label: string }[];
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
}: Props) {
  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      aria-label="basic tabs example"
    >
      {tabs.map(({ label }, index) => (
        <Tab
          key={index}
          label={label}
          {...a11yProps(index)}
          sx={{ width: 250 }}
        />
      ))}
    </Tabs>
  );
}
