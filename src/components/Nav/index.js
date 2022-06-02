import React from 'react';

function Nav(location) {
    const {
        pages = [],
        SetCurrent,
        currentPage
    } = location

    return (
        <nav>
            <ul className='flex-row'>
                {pages.map((Page) => (
                    <li className={`${ currentPage.name === Page.name }`} key={Page.name}>
                        <span onClick={() => SetCurrent(Page)}></span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;