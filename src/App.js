import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { HashRouter, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [anchorEl, setAnchorEl] = useState(null);

    const toolBarStyle = {
        display: "flex",
        justifyContent: "space-between",
    };

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="App">
            <HashRouter>
                <AppBar
                    position="fixed"
                    style={{ width: width}}
                >
                    <Toolbar style={toolBarStyle}>
                        <div>
                            <Typography variant="h5">
                                <Link class="btn-link" to="/">
                                    HET JAGANI
                                </Link>
                            </Typography>
                        </div>
                        {width > 1000 ? (
                            <div>
                                <Button color="inherit">
                                    <Link class="btn-link" to="/about">
                                        ABOUT
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link class="btn-link" to="/projects" color="inherit">
                                        PROJECTS
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link class="btn-link" to="/experience">
                                        EXPERIENCE
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link class="btn-link" to="/contact">
                                        CONTACT
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link class="btn-link" to="/resume">
                                        RESUME
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MenuIcon />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link class="menu-link" to="/about">
                                            ABOUT
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link class="menu-link" to="/projects">
                                            PROJECTS
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link class="menu-link" to="/experience">
                                            EXPERIENCE
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link class="menu-link" to="/contact">
                                            CONTACT
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link class="menu-link" to="/resume">
                                            RESUME
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/experience">
                        <Experience />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
