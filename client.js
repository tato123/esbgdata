import d3 from 'd3';
import c3 from 'c3';
import $ from 'jquery';
import GraphTable from './components/GraphTable'
import React from 'react'
import ReactDOM from 'react-dom'

let def = {
    bindto: '#chart',
    data: {
        columns: [
            ['data1']
        ]
    }
};



$(document).ready(() => {
    $('#fupload').change(() => {
        this.form.submit();
    });

    $.get('/data', data => {
        
        def = Object.assign({}, def, {
            data: {
                columns: [
                    ['data1', ...data]
                ]
            }
        });
                
        const chart = c3.generate(def);
        ReactDOM.render(<GraphTable dataset={def.data.columns[0]}/>, document.getElementById('dtable'))
    });
});
