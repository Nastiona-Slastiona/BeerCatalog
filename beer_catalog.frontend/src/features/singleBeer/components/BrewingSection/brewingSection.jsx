import React from 'react';

import './brewingSection.scss';


export default function BrewingSection({ brewingDescription }) {
    return (
        <section>
            <div>
                <h2 className="brewing__header">Brewing</h2>
            </div>
            <div className="brewing__description">
                {brewingDescription}
            </div>
        </section>
    );
}
