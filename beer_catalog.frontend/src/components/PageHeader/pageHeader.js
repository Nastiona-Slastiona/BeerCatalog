import React from 'react';
import PageHeaderMain from '../PageHeaderMain/pageHeaderMain';
import cl from "./pageHeader.module.css"

function PageHeader() {
    return (
        <div  className={cl.pageHeaderContainer}>
            <PageHeaderMain/>
            <span className={`icon-dots-horizontal-triple ${cl.pageHeaderSettings}`}></span>
        </div>
    );
}

export default PageHeader;