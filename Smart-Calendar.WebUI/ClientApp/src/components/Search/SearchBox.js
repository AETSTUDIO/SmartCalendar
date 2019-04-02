import React from "react";
import { Input } from "semantic-ui-react";

const SearchBox = props => {
    return (
        <React.Fragment>
            <Input
                icon="search"
                size="small"
                iconPosition="left"
                placeholder="Search Employee..."
                onChange={props.searchChange}
            />
        </React.Fragment>
    );
};

export default SearchBox;