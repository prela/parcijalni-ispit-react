import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import UserInfo from '../UserInfo'
import UserRepos from '../UserRepos'

const ShowUser = ({githubUser, setFalseUser}) => {
  const [userInfo, setUserInfo] = useState('')
  const [userRepos, setUserRepos] = useState([])

  // const fetchUserInfo = async () = {
  //   try {
  //     const res = await fetch(`https://api.github.com/users/${githubUser}`),
  //     const data = await res.json(),
  //     setUserInfo(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${githubUser}`)
    .then(res => res.json())
    .then(data => setUserInfo(data))
  }

  const fetchUserRepos = () => {
    fetch(`https://api.github.com/users/${githubUser}/repos`)
    .then(res => {
      if (!res.ok) {
        setFalseUser(true)
      }
      return res.json()
    })
    .then(data => setUserRepos(data))
    .then(setFalseUser(false))
  }

  useEffect(() => {
    fetchUserData()
    fetchUserRepos()
  },[githubUser])

  return (
    <>
      <UserInfo userInfo={userInfo} />
      <UserRepos userRepos={userRepos} />
    </>
  )
}

ShowUser.protoTypes = {
  userInfo: PropTypes.object,
  userRepos: PropTypes.array
}

export default ShowUser