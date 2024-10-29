// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import './AppleYoutube.css'
function AppleYoutube() {
// state is initialized
const [appleVideo,setAppleVideo] = useState([])

// Fetch 
useEffect(()=>{
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCeQr2OrK6szYFmCA7an9BAy3j37XCSNXI')
    .then((response)=>response.json())
    .then((data)=>{

        setAppleVideo(data.items)

    })
    .catch(()=> console.log("There is an error"))

},[])


console.log(appleVideo);//[]

  return (
   
<>
<div className='maindiv'>

{appleVideo.map((video)=>(
    <div key={video.id.videoId}>
{/* First Div   photo  */}
        <div className='Thumbnail'>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
        </div>

        {/*Second Div  video detail*/}
        <div className='VideoDetail'>
            <h5><a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>{video.snippet.title}</a></h5>

            <p>

                {video.snippet.description}
            </p>


        </div>

    </div>
))}




</div>
   
</>

  )
}

export default AppleYoutube