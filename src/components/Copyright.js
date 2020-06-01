import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ marginTop: 100 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Coolicky/">
        Piotr Kulicki
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
