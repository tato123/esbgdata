import React, {Component, PropTypes} from 'react'
import GraphTableRow from './GraphTableRow'
import {connect} from 'react-redux'
import {setLimit} from '../../actions'

class GraphTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {dataset, limit, changeLimit} = this.props
        
        let limits = [5,10,15]
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <select defaultValue={limit} onChange={(e) => changeLimit(e.target.value)}>
                        {
                            limits.map( amount => (<option value={amount} key={amount}>{amount}</option>))
                        }
                    </select>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataset.slice(0, ++limit ).map((item, index) => {
                                    if (index > 0)
                                        return (
                                            <GraphTableRow rvalue={item} rindex={index} key={index} />

                                        )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

GraphTable.propTypes = { dataset: PropTypes.array }
GraphTable.defaultProps = { dataset: [30, 200, 100, 400, 150, 250] }

function mapStateToProps(state) {
    return {
        limit: state.fvalues.limit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLimit: (val) => {
            dispatch(setLimit(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphTable)