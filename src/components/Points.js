import { List, ListItem } from "@material-ui/core";
import { ArrowRightSharp } from "@material-ui/icons";
import React from "react";

function Points({ data }) {
    if (data.length === 0) {
        return <h2>Cannot Render List</h2>;
    } else {
        return (
            <div>
                <List dense={true}>
                    {data.map((item) => {
                        return (
                            <ListItem key={item}>
                                <ArrowRightSharp />
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

export default Points;
