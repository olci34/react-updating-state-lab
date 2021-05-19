// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateHandler(e) {
        this.setState({settings: {...this.state.settings, bitrate: 12}})
    }

    resolutionHandler(e) {
        this.setState({settings: {...this.state.settings, video: {resolution:'720p'}}})
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler.bind(this)}>Change Bitrate</button>
                <button className='resolution' onClick={this.resolutionHandler.bind(this)}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger