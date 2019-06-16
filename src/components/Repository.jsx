import React from 'react';

class Repository extends React.Component {

    constructor() {
        
        super()

        this.state = {
            bookmarked: false
        }

        this.bookmark = () => {

            this.setState({
                bookmarked: !this.state.bookmarked
            })

            if(!this.state.bookmarked)
                sessionStorage.setItem(this.props.repo.id, JSON.stringify(this.props.repo));
            else 
                sessionStorage.removeItem(this.props.repo.id);
            }
    }

    render() {

        const { name, html_url, owner} = this.props.repo

        return (
            <div className="repo">
                <div className="repoName" ><a href={html_url}>{ name }</a></div> 
                <img className="avatar" src={owner.avatar_url} alt=""></img>
                <p className="bookmark" ><button className="bookButton" onClick={() => this.bookmark()}>{this.state.bookmarked ? 'bookmarked' : 'bookmark'}</button></p>
            </div>    
        )
    }
}

export default Repository