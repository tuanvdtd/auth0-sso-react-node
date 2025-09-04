import ReactJson from 'react-json-view'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">User from Auth0:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4'} alt={''} />
          <div className="user-info">
            <p>Sub: <span className="value">google-oauth2|108184243235574894333</span></p>
            <p>Email: <span className="value">dev@gmail.com</span></p>
            <p>Name: <span className="value">Dev</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "Ragdoll",
              "family_name": "Cats",
              "nickname": "lightning2",
              "name": "Dev",
              "picture": "https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "lightning2@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>

      <div className="user-from-our-database">
        <div className="title">User from our database:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4'} alt={'dev'} />
          <div className="user-info">
            <p>ID: <span className="value">random-108184243235574894333</span></p>
            <p>Email: <span className="value">dev@gmail.com</span></p>
            <p>Name: <span className="value">Dev</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "Ragdoll",
              "family_name": "Cats",
              "nickname": "lightning2",
              "name": "Dev",
              "picture": "https://avatars.githubusercontent.com/u/170083923?s=400&u=9ccc35d28025ad3fbbdd3a78c342121636b1ba4b&v=4",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "lightning2@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
