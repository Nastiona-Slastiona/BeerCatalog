import React from 'react';
import cl from './customPagination.module.css';
import { Pagination } from "@mui/material";

function CustomPagination() {
    return (
        <div className={cl.paginationContainer}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    );
}

export default CustomPagination;