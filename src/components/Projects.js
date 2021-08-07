import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    Grid,
    IconButton,
    makeStyles,
    Typography,
    withStyles,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        margin: "20px",
        marginTop: "100px",
        justifyContent: "center",
    },
    grid: {
        width: "85%",
    },
}));

function Projects() {
    const classes = useStyles();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("data/projects.json", {
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(Object.keys(data));
                setData(data);
            })
            .catch((err) => {
                setData([{ type: "header", data: "Something went wrong" }]);
            });
    }, []);

    return (
        <div className={classes.container}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className={classes.grid}
            >
                {Object.keys(data).map((id) => {
                    return (
                        <ProjectCard key={id} data={data[id]} id={id}/>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Projects;
