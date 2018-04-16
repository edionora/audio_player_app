import React, { Component } from 'react';
import SongDetails from './SongDetails';
import { Route, Switch, Link } from 'react-router-dom';


class SongsList extends Component {
    render() {
        let songList = this.props.songs.map((list, i) => (
            <div className="container  text-center center-card" key={i}>
                <div className="card-body ">{/* <div className="container card-body "> */}
                    <div><img className="albumCover" src={list.album} /></div>
                    <span>
                        <button type="button"
                            className="btn btn-light"
                            id="detailsButton"
                            title="Play"
                            onClick={() => this.props.playSong(i)}>
                            <i className="material-icons">play_circle_outline</i>
                        </button>
                        <Link to={"/" + list.id}> <h4 className="card-title cardFont">{list.title}</h4> </Link>
                        <p className="card-text">{list.artist}</p>
                    </span>
                </div>
            </div>
        ))
        return (
            <div>
                {songList}
            </div>
        )
    }
}

export default SongsList;