import { Box, Stack } from "@mui/material"
import Sidebar from "./sidebar"

export default function dashboard() {
    return(
        <Stack direction="row" sx={{ width: '100%' }}>
            <Box sx={{ width: '40%' }}>
                <Sidebar/>
            </Box>
            <Box sx={{ width: '60%' }}>hdsgaefhb</Box>
        </Stack>
    )
}