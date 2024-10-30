
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Mode } from "@mui/icons-material";
import { useState } from "react";

function App() {

    const [mode, setMode] = useState("dark")

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    });
    return (
        <ThemeProvider theme={darkTheme}>

            <Box bgcolor={"background.default"} color={"text.primary"}>
                {/* navbar */}
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
            </Box>
        </ThemeProvider>
    );
}

export default App;
