import React from 'react'


const Social = () => {
  return (
    <div>
      <div className="optin">
        <a href="/signup"> <img alt="img" src="/files/signup.png" style={{ height: '40px', borderRadius: '12px', marginRight: '10px' }} />
        </a>
        <a href="/login">
          <img alt="img" src="/files/login.png" style={{ height: '40px', borderRadius: '12px' }} />
        </a>
      </div>
      <div className="mt-4" style={{ marginTop: '20px' }}>
        <div className="social-icons-container">
          <div className="social-icons">
            <ul style={{ margin: '0', padding: '0' }} class="d-flex ">
              <a style={{ color: 'transparent' }} href="https://discord.gg/CT3YpGzH5v" class="ml-auto">  <img src='/files/discord.png' style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} alt="img" /> </a>
              <a style={{ color: 'transparent' }} href="https://www.youtube.com/channel/UCyvmQVMsho6BH6lXxUzxLkQ" class="ml-auto">  <img src="/files/youtube.png" style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} alt="img" /> </a>
              <a style={{ color: 'transparent' }} href="https://web.facebook.com/N-X-T-G-E-M-110573431436306" class="ml-auto"> <img src="/files/meta.png" style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} /></a>
              <a style={{ color: 'transparent' }} href="https://twitter.com/nxtgem_io" class="ml-auto"> <img src="/files/twitter.png" style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} alt="img" /> </a>
              <a style={{ color: 'transparent' }} href="https://t.me/nxtgem_io" class="ml-auto">  <img src="/files/telegram.png" style={{ width: '40px', borderRadius: '7px', color: 'white', margin: '0 10px' }} alt="img" /> </a>
              <a style={{ color: 'transparent' }} href="/" class="ml-auto">  <img src="/files/subscribe.png" style={{ height: '40px', borderRadius: '12px', color: 'white', margin: '0 10px' }} alt="img" /> </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
