import React, {PropTypes, Component} from 'react'
import $ from 'jquery'

export default class Upload extends Component {
    
    constructor(props) {
        super(props);
    }
    
    fileChange() {
        this.refs.uploadform.submit();
    }

    render() {
        return (
            <ul className="list-unstyled list-inline">
                <li>
                    <form method="post" action="/upload" encType="multipart/form-data" ref="uploadform">
                        <label>Upload CSV</label>
                        <input name="fupload" type="file" id="fupload" onChange={this.fileChange.bind(this)} />
                    </form>
                </li>
                <li>
                    <a href="#" id="random" onClick={this.props.onRandom} >Generate Random dataset</a>
                </li>
            </ul>
        )   
    }
    
}

Upload.propTypes = {
    onRandom: PropTypes.func
}