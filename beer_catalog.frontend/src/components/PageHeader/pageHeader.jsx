import React from 'react';

import PageHeaderMain from 'Components/PageHeaderMain/pageHeaderMain.jsx';

import "./pageHeader.css";


export default function PageHeader() {
    return (
        <div  className={'page-header__container'}>
            <PageHeaderMain/>
            <span className={'icon-dots-horizontal-triple page-header__settings'}></span>
        </div>
    );
};