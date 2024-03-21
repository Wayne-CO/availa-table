import { Box } from "@mui/material";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function RestaurantDetailsLayout({ children }: Props) {
  return (
    <Box component="main" sx={{ width: "1272px", margin: "auto", px: "20px" }}>
      {children}
    </Box>
  );
}
