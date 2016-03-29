import React, {Component, PropTypes} from 'react'

export default function GraphTableRow({rvalue, rindex}) {
    return (<tr>
        <td>{rindex}</td>
        <td>{rvalue}</td>
    </tr>)
}

GraphTableRow.propTypes = {
    rvalue: PropTypes.any,
    rindex: PropTypes.number
}