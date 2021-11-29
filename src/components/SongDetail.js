import React from 'react';
import {connect} from 'react-redux';
import SongList from './SongList';


class SongDetail extends React.Component{

    

    render(){
        console.log(this.props)
        const {song} =this.props

        if(!song){
            return <div> Select a song </div>;
        }

        return(
            <div> 
                <h3>Details for:</h3>
                <p>
                    Title:{song.title}
                    <br/>
                    Duration:{song.duration}
                </p>
                
            </div>
        );
    };
};

const mapStateToProps = state => {

    return { song:state.selectedSong };

};

export default connect(mapStateToProps)(SongDetail)