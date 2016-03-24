import React, {Component, PropTypes} from 'react'

const GraphTableRow = ({rvalue, rindex}) => (
    <tr>
        <td>{rindex}</td>
        <td>{rvalue}</td>
    </tr>
)

GraphTableRow.propTypes = {
    rvalue: PropTypes.number.isRequired,
    rindex: PropTypes.number.isRequired
}


export default class GraphTable extends Component {

    constructor(props) {
        super(props);
        this.state = { dataset: props.dataset }
    }
    
    render() {
        const {dataset} = this.state

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataset.map( (item,index) => {
                            if (index>0)
                            return (
                                <GraphTableRow rvalue={item} rindex={index} key={index} />
                               
                            )
                        })
                    }


                </tbody>
            </table>
        )
    }
}

GraphTable.propTypes = { dataset: PropTypes.array }
GraphTable.defaultProps = { dataset: [30, 200, 100, 400, 150, 250] }