import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  images?: string[]; // up to 9 images; if fewer than 9 placeholders will be used
  onSelect?: (index: number) => void;
  imageAlt?: string;
  gap?: number;
};

const DEFAULT_PLACEHOLDERS = Array.from({ length: 9 }).map(
  (_, i) => `https://via.placeholder.com/300?text=${i + 1}`
);

/**
 * IconScreenComponent
 * Renders a 3x3 grid of images using Material-UI components.
 *
 * Usage:
 * <IconScreenComponent images={[...9 urls...]} onSelect={(i)=>console.log(i)} />
 */
export default function IconScreenComponent({
  images = DEFAULT_PLACEHOLDERS,
  onSelect,
  imageAlt = "icon",
  gap = 2,
}: Props) {
  // Ensure there are exactly 9 items to render
  const items = [...images].slice(0, 9);
  while (items.length < 9)
  {
    items.push(DEFAULT_PLACEHOLDERS[items.length]);
  }
  return (
    <Grid container spacing={gap}>
      {items.map((src, idx) => (
        <Grid size={4}  key={idx}>
          <Card>
            <CardActionArea onClick={() => onSelect?.(idx)}>
              <CardMedia
                component="img"
                image={src}
                alt={`${imageAlt}-${idx}`}
                sx={{
                  width: "100%",
                  height: 0,
                  paddingBottom: "100%", // keep square aspect ratio
                  objectFit: "cover",
                }}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}