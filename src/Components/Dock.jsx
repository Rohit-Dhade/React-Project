import React from 'react'
import './dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>

      <div className='icon github'><img src="/doc-icons/github.svg" alt="" /></div>
      <div className='icon calender'><img src="/doc-icons/calender.svg" alt="" /></div>
      <div className='icon link'><img src="/doc-icons/link.svg" alt="" /></div>
      <div className='icon notes'><img src="/doc-icons/notes.svg" alt="" /></div>
      <div className='icon mail'><img src="/doc-icons/mail.svg" alt="" /></div>
      <div className='icon spotify'><img src="/doc-icons/spotify.svg" alt="" /></div>
      <div className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>

      <div className='icon app-store'><img src="/doc-icons/app store.svg" alt="" /></div>
      <div className='icon database'><img src="/doc-icons/database.svg" alt="" /></div>
      <div className='icon vs-code'><img src="/doc-icons/vs code.svg" alt="" /></div>
      <div className='icon terminal'><img src="/doc-icons/terminal.svg" alt="" /></div>
      <div className='icon settings'><img src="/doc-icons/settings.svg" alt="" /></div>
      <div className='icon file-manager'><img src="/doc-icons/file manager.svg" alt="" /></div>


    </footer>
  )
}

export default Dock;