import { createTheme } from "@mui/material";
import { red, green, blue, orange, grey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: red[500],    // Primary main color
            light: green[300]  // Primary light color
        },
        secondary: {
            main: grey[500]    // Secondary main color
        },
        otherColor: {
            main: orange[500]  // Custom color option
        }
    }
});
