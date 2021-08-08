import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExperienceDesc from "./ExperienceDesc";

const useStyles = makeStyles({
    card: {
        width: "80%",
    },
    media: {
        height: "600px",
        flexGrow: 1,
    },
    container: {
        display: "flex",
        alignItems: "center",
        margin: "50px",
        marginTop: "100px",
        flexDirection: "column",
    },
});

function Experience() {
    const [data, setData] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetch("data/experience.json", {
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                setData(["Something went wrong"]);
            });
    }, []);

    return (
        <div className={classes.container}>
            {data.map((item) => {
                return <ExperienceDesc key={item.duration} data={item} />;
            })}
        </div>
    );
}

export default Experience;
