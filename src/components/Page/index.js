import React from 'react'
import PageContent from '../PageContent'

function Page({ currentPage }) {
    
    return (
        <section>
            <h2>{currentPage.name}</h2>
        </section>
    )
}