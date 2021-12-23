import React from 'react';

import { Pagination } from "@mui/material";

import './pagination.css';


export default function CustomPagination() {
    return (
        <div className={'pagination__conatiner'}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    );
};