import d3 from "d3";
import c3 from "c3";
import $ from "jquery";
require('c3/c3.css')
global.jQuery = $;
require("bootstrap-webpack");

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
        def.data.columns[0].forEach((item, index) => {
            
            if (index > 0)
                $('table > tbody').append(`<tr><td>${index}</td><td>${parseInt(item)}</td></tr>`);
        });

    });
});
