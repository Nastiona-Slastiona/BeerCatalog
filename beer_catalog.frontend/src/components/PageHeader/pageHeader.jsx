/* eslint-disable import/no-unresolved */
import React from 'react';
import PageHeaderMain from 'components/PageHeaderMain/pageHeaderMain';

import './pageHeader.css';


export default function PageHeader() {
    return (
        <div className="page-header">
            <PageHeaderMain />
            <span className="icon-dots-horizontal-triple page-header__settings" />
        </div>
    );
}
