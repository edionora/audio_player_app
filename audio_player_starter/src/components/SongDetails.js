import React, { Component } from 'react';
import '../styles.css';


export default class SongDetails extends Component {

    render() {
        let songId = this.props.match.params.songId

        return (
            <div className="container" >
                <h1 className="detailFont">{this.props.songs[songId].title}</h1>
                <div><img className="detailsImg" src={this.props.songs[songId].album} /></div>
                <button type="button"
                    className="btn btn-light"
                    id="detailsButton"
                    title="Play"
                    onClick={() => this.props.playSong(songId)}>
                    <i className="material-icons">play_circle_outline</i>
                </button>
                <h3 className="cardFont">Artist: {this.props.songs[songId].artist}</h3>
                <p className="card-text">{this.props.songs[songId].description}</p>
            </div>
        )
    }
}