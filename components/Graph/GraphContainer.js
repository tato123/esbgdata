import React, {Component, PropTypes} from 'react'
import $ from 'jquery'
import GraphChart from './GraphChart'
import GraphTable from './GraphTable'
import {fetchPlottable, fetchRandom} from '../../actions'
import {connect} from 'react-redux'
import ResizePanel from '../Panel/ResizePanel'

class GraphContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
        var self = this
    }

    componentDidMount() {
        this.props.init();     
    }

    render() {
        
        const {random, data, busy} = this.props        
        
        var loading = '';
        if (busy) {
            loading = <span>Loading...</span>
        }
        
        return (
            <div>
                {loading}
                <ResizePanel header="Chart">
                    <GraphChart data={data} />  
                </ResizePanel>
                <ResizePanel header="Data table" tableView={true}>
                    <GraphTable dataset={data}/>
                </ResizePanel>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.fvalues.data,
        busy: state.fvalues.fetch
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(fetchPlottable())
        }, 
        random: () => {
            dispatch(fetchRandom())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer)