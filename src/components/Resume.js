import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Document, Page, pdfjs } from "react-pdf/dist/umd/entry.webpack";

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
        marginTop: "100px",
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
            <Document file="documents/Resume.pdf">
                <Page pageNumber={1} />
            </Document>
            <Button variant="contained" color="primary">
                <a className={classes.link} href="documents/Resume.pdf">DOWNLOAD</a>
            </Button>
        </div>
    );
}

export default Resume;
