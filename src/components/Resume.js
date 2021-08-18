import React, { useEffect, useRef, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import throttle from "lodash/throttle";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.js";

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
        color: "white",
        textDecoration: "none",
    },
});

function Resume() {
    const [width, setWidth] = useState(0);
    const classes = useStyles();


    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    return (
        <div className={classes.container}>
            <Document file="documents/Resume.pdf">
                <Page width={width > 1200? width/3: width/1.2} pageNumber={1} />
            </Document>

            <Button variant="contained" color="primary">
                <a className={classes.link} href="documents/Resume.pdf">
                    DOWNLOAD
                </a>
            </Button>
        </div>
    );
}

export default Resume;
