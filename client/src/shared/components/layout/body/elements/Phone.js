import React, {Component} from 'react';
import $ from 'jquery'
import './phone.scss'
class Phone extends Component {

    render() {
        return (
            <div>
                <h1>a Breathing Phone! ( Hover to see animation )</h1>
                <div className="Skew">
                    <div className="Phone-ImgI"></div>
                    <div className="Phone-Img"></div>
                    <div className="Phone-Img-Shadow"></div>
                </div>

            </div>
        );
    }
}

export default Phone;