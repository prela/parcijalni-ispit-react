import React from 'react'

const UserRepos = ({userRepos}) => {
  return (
    <div>
      <h2>REPOSITORIES:</h2>
      <ul style={{listStyleType: 'none'}}>
        {userRepos.map((repo) => {
          return (
            <li key={repo.id}>{repo.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserRepos