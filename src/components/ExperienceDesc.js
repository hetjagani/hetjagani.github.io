import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    card: {
        width: "80%",
        margin: "20px"
    },
    media: {
        height: "300px",
        flexGrow: 1,
    },
});

function ExperienceDesc({ data }) {
    const classes = useStyles();

    if(data === undefined) {
        return <div>Something went wrong...</div>
    }
    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={data.image}
                    title={data.company}
                />
                <CardContent>
                    <h1>{data.company}</h1>
                    <b>Position: </b>
                    {data.position} <br />
                    <b>Duration: </b>
                    {data.duration} <br />
                    <b>Description: </b>
                    <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default ExperienceDesc;
