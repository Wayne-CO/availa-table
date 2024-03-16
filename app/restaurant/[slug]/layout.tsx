"use client";
import { Box, Paper } from "@mui/material";
import { usePathname } from "next/navigation";
import RestaurantNavBar from "./components/RestaurantNavBar";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function RestaurantDetailsLayout({ params, children }: Props) {
  const pathname = usePathname();

  const tabs = [
    { label: "overview", href: `/restaurant/${params.slug}` },
    { label: "menu", href: `/restaurant/${params.slug}/menu` },
  ];

  return (
    <Paper sx={{ width: "1272px", margin: "auto", px: "30px" }}>
      <Box padding="10px 0 46px 0">
        <RestaurantNavBar
          tabs={tabs}
          value={!pathname.includes("menu") ? 0 : 1}
          tabsProps={{ centered: true }}
        />
      </Box>
      {children}
    </Paper>
  );
}
