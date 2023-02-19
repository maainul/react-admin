import { Box, Button } from "@mui/material";
const SubmitBtn = ({ title }) => {
    return (
        <Box fontSize="20px" mt="20px" ml="20px">
            <Button variant="contained" color="secondary" type="submit" size="large">
                {title}
            </Button>
        </Box >
    );
};
export default SubmitBtn;