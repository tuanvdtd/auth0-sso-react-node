import ReactJson from 'react-json-view'
import { useAuth0 } from '@auth0/auth0-react'
import { RENDER_API_ROOT } from '../utils/constants'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import customAxiosInstance from '../utils/customAxios.js'

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  console.log('user', user)
  console.log('isAuthenticated', isAuthenticated)
  console.log('isLoading', isLoading)
  const [allUsers, setAllUsers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const accessToken = await getAccessTokenSilently()
        // test lên domain luôn, không xài localhost, sài thì thay localhost vào là được
        // const response = await axios.get(`${RENDER_API_ROOT}/api-v1/users/private/get_all`, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`
        //   }
        // })
         const response = await customAxiosInstance.get(`${RENDER_API_ROOT}/api-v1/users/private/get_all`)
        const allUsers = await response.data
        setAllUsers(allUsers)
        console.log('data', allUsers)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [getAccessTokenSilently])

  if (!isAuthenticated) {
    return null
  }

  return (
    isAuthenticated && (
      <div className="dashboard">
        <div className="user-from-auth0">
          <div className="title">User from Auth0:</div>
          <div className="preview-user">
            {isLoading && <div className="loading">Loading...</div>}
            <img className="user-avatar" src={user.picture} alt={''} />
            <div className="user-info">
              <p>Sub: <span className="value">{user.sub}</span></p>
              {/* <p>Picture: <span className="value">{user.picture}</span></p> */}
              <p>Email: <span className="value">{user.email}</span></p>
              <p>Name: <span className="value">{user.name}</span></p>
            </div>
          </div>
          <div className="more-info">
            <ReactJson
              enableClipboard={false}
              collapsed={true}
              theme={'google'}
              // src={{
              //   "given_name": "Ragdoll",
              //   "family_name": "Cats",
              //   "nickname": "lightning2",
              //   "name": "Dev",
              //   "picture": "https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4",
              //   "updated_at": "2024-07-10T09:59:37.603Z",
              //   "email": "lightning2@gmail.com",
              //   "email_verified": true,
              //   "sub": "google-oauth2|108184243235574894333"
              // }}
              src={user}
            />
          </div>
        </div>

        <div className="user-from-our-database">
          <div className="title">User from our database:  
            <span className='count-user'>{allUsers?.length}</span></div>
          <div className="preview-user">
            {/* <div className="loading">Loading...</div> */}
          </div>
          <div className="more-info">
            <ReactJson
              enableClipboard={false}
              collapsed={true}
              theme={'google'}
              // src={{
              //   "given_name": "Ragdoll",
              //   "family_name": "Cats",
              //   "nickname": "lightning2",
              //   "name": "Dev",
              //   "picture": "https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4",
              //   "updated_at": "2024-07-10T09:59:37.603Z",
              //   "email": "lightning2@gmail.com",
              //   "email_verified": true,
              //   "sub": "google-oauth2|108184243235574894333"
              // }}
              src={allUsers}
            />
          </div>
        </div>
      </div>
    )
  )
}

export default Dashboard
