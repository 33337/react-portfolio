import React from 'react'
import PageContent from '../PageContent'
import About from '../About'
import Resume from '../Resume'
import Portfolio from '../Portfolio'

function Page({ currentPage }) {

    const render = () => {
        switch(currentPage.name) {
            case 'About me':
                return <About></About>
            case 'Resume':
                return <Resume></Resume>
            case 'Portfolio':
                return <Portfolio></Portfolio>
            default:
                return <About></About>
        }
    }

    return (
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{render()}</PageContent>
        </section>
    )
}

export default Page