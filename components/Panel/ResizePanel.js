import React, {PropTypes} from 'react'


export default function ResizePanel({children, header, tableView}) {
    
    var displayTable;
    if(!tableView) {
        displayTable = <div className="panel-body">{children}</div>;
    }
    else {
        displayTable = children
    }
    
    return (
        <div className="panel panel-default">
            <div className="panel-heading">{header}</div>
            {displayTable}            
        </div>
    )
}

ResizePanel.propTypes = {
    header: PropTypes.string,
    tableView: PropTypes.bool
}
