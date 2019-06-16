import * as React from "react";

let searchItem;
export class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        searchItem = this.searchBox.value;
        if(searchItem === '') {
            return null
        }
        this.props.getRepo(searchItem);
        e.preventDefault();
    }

    render() {
        return(
            <section>
            <div id="search-box" className="searcher-header">
                <a href="http://github.com/"><img id="logogh" alt="logo-github" src="logogh.png" /></a>
                <form>
                    <input id="search-input" type="text" placeholder="Search or jump to..." ref={(input) => { this.searchBox = input; }}/>
                    <button id="search-submit" onClick={this.onClick}></button>
                </form>            
            </div>
        </section>   
        );
    }
}