import React from 'react';

import PageHeaderMain from 'features/common/components/PageHeaderMain/pageHeaderMain';

import './pageHeader.scss';


export default function PageHeader() {
    return (
        <div className="page-header">
            <PageHeaderMain />
            <span className="icon-dots-horizontal-triple page-header__settings" />
        </div>
    );
}
