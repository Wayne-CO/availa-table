"use client";
import { Box } from "@mui/material";
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
    <Box component="main" width="1272px" margin="auto" px="20px">
      <RestaurantNavBar
        tabs={tabs}
        value={!pathname.includes("menu") ? 0 : 1}
      />
      {children}
    </Box>
  );
}
