import * as React from 'react';

// Components
import { SearchBox } from './SearchBox';
import { Repositories } from './Repositories';
// Style
import '../styles/index.css';
// API
import { getApi } from '../api';

export class App extends React.Component {

    constructor() {

        super()

        this.state = {
            repos: {}
        }

        this.getApi = getApi.bind(this)

        this.getRepo = (search) => {
          this.getApi(search)
        }
    }

 render() {    
    return (
      <div className="main">
        <section className="main-content">
          <div className="search-container">
            <SearchBox getRepo = {this.getRepo} />          
          </div>
          <div className="resulttest">
            <Repositories repos = {this.state.repos} />
          </div>
        </section>
      </div>
    );
  }
}