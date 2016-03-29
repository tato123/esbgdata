import React, {PropTypes} from 'react'

export function TabHeader({title, id}) {
    return (
        <li>
            <a href={'#' + id} data-toggle="tab">{title}</a>
        </li>
    )
}

TabHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export function Tabs({children}) {
    
    return (
        <div role="tabcontainer">
            {children}
        </div>
    )
}

export function TabHeaderList({children}) {
    return (
        <ul className="nav nav-tabs">
            {children}                        
        </ul>        
    )
}

export function TabPanel({children}) {
    return (
        <div className="tab-content">
            {children}
        </div>
    )
}

export function Tab({children, id}) {
    return (
        <div id={id} className="tab-pane">
            {children}
        </div>
    )
}
