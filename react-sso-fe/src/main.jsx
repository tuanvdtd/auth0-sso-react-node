import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { RENDER_API_ROOT } from './utils/constants.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ggltcktr3ae4vxn5.us.auth0.com"
    clientId="jA6ze9EUOxLSmuvSyjph9ALLBDOBT0K4"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: RENDER_API_ROOT,

    }}
    // cacheLocation= 'localstorage' // nếu kh có dòng này thì mặc định sẽ là memory
    // refreshToken={true}
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    cookieDomain='.dtt.local'
  >
    <App />
  </Auth0Provider>
)
