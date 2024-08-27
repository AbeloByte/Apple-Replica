// eslint-disable-next-line no-unused-vars
import React ,{useState,useEffect}from 'react'

function YoutubeSuggestion() {

        // eslint-disable-next-line no-unused-vars
        const [appleYoutubeVideos,setVideoChanger] = useState([])

    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCeQr2OrK6szYFmCA7an9BAy3j37XCSNXI' )
        .then(response => response.json())
        .then((data)=>{
            setVideoChanger(data)
        })
        .catch(

        )
    },[])




  return (
    <>
      <div></div>
    </>
  )
}

export default YoutubeSuggestion