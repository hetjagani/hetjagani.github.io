import { useForm } from "@formspree/react";
import {
    Button,
    FormControl,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
    name: "",
    email: "",
    subject: "",
    description: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.value };
        case "SET_EMAIL":
            return { ...state, email: action.value };
        case "SET_SUBJECT":
            return { ...state, subject: action.value };
        case "SET_DESCRIPTION":
            return { ...state, description: action.value };
        default:
            return state;
    }
};

function ContactForm() {
    const [width, setWidth] = useState(window.innerWidth);
    const [error, setError] = useState("");
    const [state, handelSubmit] = useForm("mjvargqp");

    const styles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "50px",
        },
        input: {
            margin: "10px",
            width: width / 4,
        },
    });

    const classes = styles();

    const [formData, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const submitForm = () => {
        if (formData.name === "" || formData.email === "" || formData.subject === "") {
            setError("Please fill required fields.");
        }
        handelSubmit({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            description: formData.description,
        });
    };

    if (state.succeeded) {
        return (
            <Typography className={classes.container} variant="h2">
                Thanks for contacting. <br /> I'll get back to you soon.
            </Typography>
        );
    }

    return (
        <div>
            <FormControl className={classes.container} onSubmit={handelSubmit}>
                {error !== "" && <Typography color="error">{error}</Typography>}
                <TextField
                    className={classes.input}
                    required={true}
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                        dispatch({ type: "SET_NAME", value: e.target.value })
                    }
                />
                <TextField
                    className={classes.input}
                    required={true}
                    variant="outlined"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                        dispatch({ type: "SET_EMAIL", value: e.target.value })
                    }
                />
                <TextField
                    className={classes.input}
                    required={true}
                    variant="outlined"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                        dispatch({ type: "SET_SUBJECT", value: e.target.value })
                    }
                />
                <TextField
                    className={classes.input}
                    variant="outlined"
                    label="Description"
                    name="description"
                    multiline={true}
                    minRows={4}
                    value={formData.description}
                    onChange={(e) =>
                        dispatch({ type: "SET_DESCRIPTION", value: e.target.value })
                    }
                />
                <Button
                    style={{ width: "50%" }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    disabled={state.submitting}
                >
                    SUBMIT
                </Button>
            </FormControl>
        </div>
    );
}

export default ContactForm;
