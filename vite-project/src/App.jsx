import { Button } from "@mui/material";
import "./App.css";
import SendIcon from '@mui/icons-material/Send';

function App() {
    return (
        <>
        <div>
          <Button size="large" variant="contained" color="warning" startIcon={<SendIcon />}>
                Success
          </Button>
        </div>
        </>
    );
}

export default App;
