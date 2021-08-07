import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
    const toolBarStyle = {
        display: "flex",
        justifyContent: "space-between",
    };

    return (
        <div className="App">
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar style={toolBarStyle}>
                        <div>
                            <Typography variant="h5"><Link class="btn-link" to="/">HET JAGANI</Link></Typography>
                        </div>
                        <div>
                            <Button color="inherit">
                                <Link class="btn-link" to="/about">ABOUT</Link>
                            </Button>
                            <Button color="inherit">
                                <Link class="btn-link" to="/projects" color="inherit">PROJECTS</Link>
                            </Button>
                            <Button color="inherit">
                                <Link class="btn-link" to="/experience">EXPERIENCE</Link>
                            </Button>
                            <Button color="inherit">
                                <Link class="btn-link" to="/contact">CONTACT</Link>
                            </Button>
                            <Button color="inherit">
                                <Link class="btn-link" to="/resume">RESUME</Link>
                            </Button>
                        </div>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
