import React, {Component, PropTypes} from 'react'
import c3 from 'c3'
import $ from 'jquery'

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

export class GraphContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {data:[]}
        var self = this
        $(document).on('refresh', this.randomize.bind(self))
    }
    
    randomize() {
        $.ajax({
            url: '/random',
            dataType: 'json',
            cache: false,
            success: function(data) {                
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
            });
    }
    
    componentDidMount() {
        
        $.ajax({
            url: '/data',
            dataType: 'json',
            cache: false,
            success: function(data) {                
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
            });
            
    }
    
    render() {                                              
        return (
            <div>
                <GraphChart data={this.state.data} />
                <GraphTable dataset={this.state.data}/>
            </div>
        )
    }
}

export class GraphChart extends Component {
    
    constructor(props) {
        super(props)    
        this.state = {chart: undefined}   
    }
    
    componentDidMount() {
        this.setState({chart:c3.generate(this.graphObject())})        
    }   
    
    componentDidUpdate() {   
                     
        this.state.chart.load({
            columns: [
                    ['data1', ...this.props.data]
                ]
        })
    }    
    
    graphObject() {
        return {
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', ...this.props.data]
                ]
            }
        }
    }
    
    render() {        
                                                 
        return (
            <div className="row">
                <div id="chart">
                </div>
            </div>
       );
    }
}

export class GraphTable extends Component {

    constructor(props) {
        super(props);        
    }
    
    render() {
        let {dataset} = this.props
        return (
            <div className="row">
            <div className="col-md-12">
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
            </div>
            </div>
        )
    }
}

GraphTable.propTypes = { dataset: PropTypes.array }
GraphTable.defaultProps = { dataset: [30, 200, 100, 400, 150, 250] }