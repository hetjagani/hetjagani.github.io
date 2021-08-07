import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChipList from "./ChipList";
import Points from "./Points";

const useStyles = makeStyles({
    card: {
        width: "1300px",
    },
    media: {
        height: "600px",
        flexGrow: 1,
    },
    container: {
        display: "flex",
        alignItems: "center",
        margin: "50px",
        flexDirection: "column",
    },
    skillsContainer: {
        display: "flex",
        justifyContents: "flex-start",
        width: "1300px",
    },
});

function About() {
    const [data, setData] = useState([]);
    const [skillList, setSkillsList] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetch("data/about.json", {
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                const skillObj = data.filter((item) => item.type === "skills")
                setSkillsList(skillObj[0].data)
            })
            .catch((err) => {
                setData([{ type: "header", data: "Something went wrong" }]);
            });
    }, []);


    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={process.env.PUBLIC_URL + "/images/het.jpg"}
                    title="Het Jagani"
                />
                <CardContent>
                    {data.map((item, idx) => {
                        switch (item.type) {
                            case "header":
                                return <h1 key={idx}>{item.data}</h1>;
                            case "list":
                                return <Points key={idx} data={item.data} />;
                            default:
                                return "";
                        }
                    })}
                </CardContent>
            </Card>
            <h1>Skills & Technologies</h1>
            <ChipList data={skillList} />
        </div>
    );
}

export default About;
