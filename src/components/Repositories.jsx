import * as React from 'react';
// Components
import Repository from './Repository'

export class Repositories extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div className="result-container">
                        <div className="result-info">
                                <ul className="result-list">
                                   { Object.keys(this.props.repos).map( (key) => (
                                        <li className="result" key={ key }>
                                        <Repository
                                            key = {key}
                                            repo = {this.props.repos[key]}
                                        />                     
                                        </li>                   
                                    )) }
                                </ul>
                        </div>
                </div>
            )
    }
}