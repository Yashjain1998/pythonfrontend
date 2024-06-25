import { Box, Stack } from "@mui/material";
import Sidebar from "./sidebar";
import Main from "../main";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

const Dashboard = () => {
    const [cookies, setCookie] = useCookies(["user"]);
    console.log(cookies)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${Main.URL}/user`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                             "Authorization": `${cookies.get('token')}`
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Stack direction="row" sx={{ width: '100%' }}>
            <Box sx={{ width: '40%' }}>
                <Sidebar />
            </Box>
            <Box sx={{ width: '60%' }}>
                <Main />
            </Box>
        </Stack>
    );
};

export default Dashboard;
