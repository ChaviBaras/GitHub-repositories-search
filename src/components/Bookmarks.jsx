import * as React from 'react';
// Components
import Repository from './Repository'

export class Bookmarks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (Object.keys(this.props.bookmarks).length >= 0){
            return (
                    <div className="result-container">
                        <div className="result-info">
                            Results list containing Avatar, author name, repository name and repository description
                                <ul className="result-list">
                                    { Object.keys(this.state.bookmarks).map( (key) => (
                                        <li className="result" key={ key }>
                                        <Repository
                                            key = {key}
                                            repo = {this.state.bookmarks[key]}
                                        />                     
                                        </li>                   
                                    )) }
                                </ul>
                        </div>
                </div>
            )
        }
    }
}