import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        margin: "50px",
        flexDirection: "column",
    },
    link: {
        color:"white",
        textDecoration:"none"
    }
});

function Resume() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Document file="./documents/Resume.pdf">
                <Page pageNumber={1} />
            </Document>
            <Button variant="contained" color="primary">
                <a className={classes.link} href="documents/Resume.pdf">DOWNLOAD</a>
            </Button>
        </div>
    );
}

export default Resume;
