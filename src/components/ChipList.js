import { Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    chipStyle: {
        margin: "3px",
    },
    container: {
        display: "flex",
        width: "1300px",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});

function ChipList({ data }) {
    const classes = useStyles();
    if (data.length === 0) {
        return <h2>Cannot Render Skills</h2>;
    } else {
        return (
            <div className={classes.container}>
                {data.map((item) => {
                    return <Chip className={classes.chipStyle} label={item} />;
                })}
            </div>
        );
    }
}

export default ChipList;
