import React from 'react'
import PageContent from '../PageContent'
import About from '../About';

function Page({ currentPage }) {

    return (
        <section>
            <h2>{currentPage.name}</h2>
        </section>
    )
}

export default Page