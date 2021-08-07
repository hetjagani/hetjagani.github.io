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


const useStyles = makeStyles((theme) => ({
    card: {
        width: "32%",
        margin: "10px",
        xs: "4",
    },
    media: {
        height: "300px",
        flexGrow: 1,
    },
    grid: {
        width: "85%",
    },
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

function ProjectCard({id, data}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DialogTitle = withStyles(useStyles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h4">{children}</Typography>
            </MuiDialogTitle>
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1),
        },
    }))(MuiDialogActions);

    return (
        <React.Fragment>
            <Card key={id} className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={data.image}
                    title={data.title}
                />
                <CardContent>
                    <strong>{data.title}</strong>
                </CardContent>
                <CardActions>
                    <Button color="primary" onClick={handleClickOpen}>
                        MORE DETAILS
                    </Button>
                </CardActions>

                <Dialog
                    key={id}
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth="lg"
                >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {data.title}
                    </DialogTitle>
                    <DialogContent dividers>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.description,
                            }}
                        ></div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </React.Fragment>
    );
}

export default ProjectCard;
