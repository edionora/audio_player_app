import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './styles.css';
import logo from './logo.svg';
import icon from './icon.png';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [{ source: "", title: "", artist: "", description: "", album: "", id: "" }],
      play: false,
      currentItem: 0,
      icon: 'play_arrow',
      songList: []
    };
  }

  playPause = () => {
    var currentArtist = this.state.songs[this.state.currentItem].artist
    var currentSong = this.state.songs[this.state.currentItem].title
    var listofRecentlyPlayed = { recentlyPlayed: currentArtist + " : " + currentSong }

    if (this.state.play == true) {
      axios.post('http://localhost:8050', listofRecentlyPlayed)
        .then(res => {
          var recentlyPlayed = res.data
          console.log(res.data)
          this.setState({
            play: false,
            icon: "play_arrow",
            songList: recentlyPlayed
          }, () => this.audio.pause())
        })
    }
    else {
      this.audio.play(),
        this.setState({
          play: true,
          icon: 'pause'
        })
    }


  }


  changeSong = (direction) => {
    //Next button
    if (this.state.currentItem === this.state.songs.length - 1 && direction === 1) {
      direction === 0
    } else if (this.state.currentItem === 0 && direction === -1) {
      direction == this.state.songs.length - 1
    }
    else {
      direction = this.state.currentItem + direction
    }
    this.setState({
      currentItem: direction,
      icon: "play_arrow",
      play: false
    }, () => this.audio.load())
  }

  playSong = (chosenSong) => {
    if (this.state.currentItem !== chosenSong) {
      // this.audio.pause();
      this.audio.load();
      this.audio.play()
      this.setState({
        currentItem: chosenSong,
        play: true,
        icon: 'pause'
      })
      console.log("Now playing: " + this.state.songs[chosenSong].title)
    } else {
      this.audio.play()
      this.setState({
        icon: 'play_arrow',
        play: false
      })
      alert(this.state.songs[this.state.currentItem].title + " is already playing")
    }
    var listofRecentlyPlayed = { recentlyPlayed: this.state.songs[chosenSong].artist + " : " + this.state.songs[chosenSong].title }
    axios.post('http://localhost:8050', listofRecentlyPlayed)
      .then(res => {
        var recentlyPlayed = res.data
        this.setState({
          icon: 'pause',
          play: true,
          songList: recentlyPlayed
        })
      })
  }

  componentDidMount() {
    axios.get('http://localhost:8050')
      .then(res => {
        var songData = res.data
        console.log(songData)
        this.setState({
          songs: songData
        }, () => this.audio.load())
      })
  }

  render() {
    return (
      <div className="App">

        
        <header className="App-header">
        <Link to={"/"}> <img src={icon} className="App-logo" data-toggle="tooltip" data-placement="bottom" title="Click me for Home" /></Link>
          <h1 className="headerFont">Welcome</h1>
        </header>

        <Route exact path="/" render={() => <SongsList songs={this.state.songs} playSong={this.playSong} />} />
        <Route path='/:songId' render={(props) => <SongDetails msg={'SongDetails link'} {...props} songs={this.state.songs} playSong={this.playSong} />}/>

        <div className=" container-fluid " id="miniPlayer" >
          <h3 className="cardFont">Now Playing: {this.state.songs[this.state.currentItem].title} </h3>
          <button className="btn btn-light" data-toggle="tooltip" data-placement="bottom" title="Previous Song" onClick={() => this.changeSong(-1)}><i className="material-icons">skip_previous</i></button>
          <button className="btn btn-light" data-toggle="tooltip" data-placement="bottom" title="Play" onClick={this.playPause}><i className="material-icons">{this.state.icon}</i></button>
          <button className="btn btn-light" data-toggle="tooltip" data-placement="bottom" title="Next Song" onClick={() => this.changeSong(1)}><i className="material-icons">skip_next</i></button>
        </div>

        <div className="recentSongs">
          <h4>Song History: </h4>
          {this.state.songList.map((recent, i) => <div key={i}>{recent.recentlyPlayed}</div>)}
        </div>

        <audio ref={(element) => this.audio = element}>
          <source src={this.state.songs[this.state.currentItem].source} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

