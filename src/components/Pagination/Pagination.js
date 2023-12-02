import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Paginate = ({ page, setPage, numberOfPages = 10 }) => {
    const classes = useStyles();
    
    const handlePageChange = (event, value) => {
        setPage(value);
        window.scroll(0, 0);
    };
    
    return (
        <Pagination
        classes={{ ul: classes.ul }}
        count={numberOfPages}
        page={page}
        onChange={handlePageChange}
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/blogs?page=${1}`}/>
        )}
        />
    );
};

export default Paginate;