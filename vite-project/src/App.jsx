import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Checkbox,
    Radio,
    Slider,
    Select,
    MenuItem,
} from "@mui/material";
import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

function App() {
    const [gender, setGender] = useState("female");
    const [val, setVal] = useState([40, 120]);
    const [select, setSelect] = useState("");

    function getCheck(e) {
        alert(e.target.value);
    }

    function getOnchange(e) {
        setGender(e.target.value);
    }

    let mark = [
        {
            value: 0,
            label: "Start",
        },
        {
            value: 100,
            label: "Middle",
        },
        {
            value: 200,
            label: "End",
        },
    ];

    function getValue(e, val) {
        setVal(val);
    }

    function getCourse(e, val) {
        setSelect(e.target.value);
    }
    
    return (
        <>
            <div>
                <div style={{ margin: 20 }} className="select_div">
                    <Select value={select} onChange={getCourse} displayEmpty>
                        <MenuItem value="">Select Course</MenuItem>
                        <MenuItem value={1}>Node</MenuItem>
                        <MenuItem value={2}>PHP</MenuItem>
                        <MenuItem value={3}>CSS</MenuItem>
                        <MenuItem value={4}>JS</MenuItem>
                        <MenuItem value={5}>HTML</MenuItem>
                    </Select>
                </div>
                <div style={{ width: 300, margin: 20 }} className="slider_div">
                    <Slider
                        color="secondary"
                        defaultValue={30}
                        step={10}
                        max={200}
                        valueLabelDisplay="auto"
                        marks={mark}
                        onChange={getValue}
                        value={val}
                    />
                </div>
                <div className="radio_div">
                    <div>
                        <Radio
                            value="male"
                            checked={gender === "male"}
                            color="secondary"
                            onChange={(e) => getOnchange(e)}
                        />
                        <span>Male</span>
                    </div>
                    <div>
                        <Radio
                            value="female"
                            checked={gender === "female"}
                            color="secondary"
                            onChange={(e) => getOnchange(e)}
                        />
                        <span>Female</span>
                    </div>
                </div>
                <div className="button_div">
                <ButtonGroup
                    color="primary"
                    variant="contained"
                    orientation="vertical"
                >
                    <Button startIcon={<SendIcon />}>Success</Button>
                    <Button startIcon={<SendIcon />}>Success</Button>
                    <Button startIcon={<SendIcon />}>Success</Button>
                </ButtonGroup>
                </div>
                <div className="checkbox_div">
                <Checkbox
                    color="secondary"
                    value="anil"
                    onChange={(e) => {
                        getCheck(e);
                    }}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                />
                </div>
            </div>
        </>
    );
}

export default App;
