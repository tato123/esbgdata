import React, {Component, PropTypes} from 'react'
import c3 from 'c3'

export default class GraphChart extends Component {

    constructor(props) {
        super(props)
        this.state = { chart: undefined }
    }

    componentDidMount() {
        this.setState({ chart: c3.generate(this.graphObject()) })
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