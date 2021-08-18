import { makeStyles, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import ContactForm from "./ContactForm";

function Contact() {

    const styles = makeStyles({
        container: {
            display: "flex",
            margin: "20px",
            marginTop: "100px",
            justifyContent: "space-around",
            flexWrap: 1,
        },
        section: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
        },
        social: {
            display: "flex",
            alignItems: "center",
        },
        spans: {
            margin: "15px",
        },
        icons: {
            fontSize: "50px",
        },
    });

    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <Typography variant="h3">Contact Me</Typography>
                <ContactForm />
            </div>
            <div className={classes.section}>
                <Typography variant="h3" style={{ marginBottom: "50px" }}>
                    Social Media
                </Typography>
                <div className={classes.social}>
                    <span className={classes.spans}>
                        <GitHub className={classes.icons} />
                    </span>
                    <span className={classes.spans}>
                        <a href="https://github.com/hetjagani">
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                Github
                            </Typography>
                        </a>
                    </span>
                </div>
                <div className={classes.social}>
                    <span className={classes.spans}>
                        <Twitter color="primary" className={classes.icons} />
                    </span>
                    <span className={classes.spans}>
                        <a href="https://twitter.com/jagani_het">
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                Twitter
                            </Typography>
                        </a>
                    </span>
                </div>
                <div className={classes.social}>
                    <span className={classes.spans}>
                        <LinkedIn color="primary" className={classes.icons} />
                    </span>
                    <span className={classes.spans}>
                        <a href="https://www.linkedin.com/in/het-jagani-225705142">
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                LinkedIN
                            </Typography>
                        </a>
                    </span>
                </div>
                <div className={classes.social}>
                    <span className={classes.spans}>
                        <span
                            class="iconify"
                            data-icon="mdi:stack-overflow"
                            style={{ color: "orange", height: "50px", width: "50px" }}
                        ></span>
                    </span>
                    <span className={classes.spans}>
                        <a href="https://stackoverflow.com/users/7833624/het-jagani">
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                Stack Overflow
                            </Typography>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
