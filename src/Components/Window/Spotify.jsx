import React from 'react'
import MacWindow from './MacWindow'
import './Spotify.scss'

const Spotify = ({onClose}) => {
  return (
    <MacWindow w="30vw" func={onClose}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/artist/0GF4shudTAFv8ak9eWdd4Y?utm_source=generator&theme=0"
                 width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify