import d3 from 'd3';
import c3 from 'c3';
import $ from 'jquery';
import {GraphTable, GraphChart, GraphContainer} from './components/GraphTable'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    
        <GraphContainer>            
        </GraphContainer>
    
    , 
document.getElementById('dtable'))


$(document).ready(() => {
    $('#fupload').change(() => {
        this.form.submit();
    });
    
    $('#random').click(()=> {
        $(document).trigger('refresh');
    })
});
