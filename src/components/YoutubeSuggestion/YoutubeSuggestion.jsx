// eslint-disable-next-line no-unused-vars
import React ,{useState,useEffect}from 'react'

import './YoutubeSuggestion.css'
function YoutubeSuggestion() {

        // eslint-disable-next-line no-unused-vars
        const [appleYoutubeVideos,setVideoChanger] = useState([])

    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyDb7kqlMXZULM9V7_tcHxvy6OrgCEZTZNA' )
        .then((res) => res.json())
        .then((data)=>{
           
            setVideoChanger(data.items)
        })
        .catch(
              ()=> console.log('Got an error')
        )
    },[])
    console.log(appleYoutubeVideos);




  return (
    <>
      
<detail className='detailHeading'><h1>Latest Apple Youtube Videos </h1></detail>
      <div className="video-gallery">    
      {appleYoutubeVideos?.map(video => (
        <div key={video.id.videoId} className="video-card">       
          <div className="video-thumbnail">
            <img  src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
          </div>
         {/* This Detail Information about the Video */}
          <div className="video-info">
                <h5>
                  <a className='LinkStyle' href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target='_blank'>{video.snippet.title}</a>
                </h5>
                <p className='detaildescription'>{video.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>


    </>
  )
}

export default YoutubeSuggestion