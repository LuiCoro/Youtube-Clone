import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onInputSubmit("Funny Cats");
  }

  onInputSubmit = async (userInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: userInput,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
        <div className='ui container'>
          <SearchBar onUserSubmit={this.onInputSubmit}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide colunm'>
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className='5 wide column'>
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
