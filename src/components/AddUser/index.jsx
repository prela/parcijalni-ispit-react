import React from 'react'
import PropTypes from 'prop-types'

const AddUser = ({githubUserHandler, userInput, setUserInput, falseUser}) => {
  const userInputHandler = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <form onSubmit={githubUserHandler}>
        {falseUser && <p>User does not exist, try another username</p>}
        <label htmlFor='userInput'>GitHub username:</label>
        <input type='text' id='userInput' onChange={userInputHandler} value={userInput} />
        <button type="submit">GO!</button>
      </form>
    </>
  )
}

AddUser.protoTypes = {
  userInput: PropTypes.string
}

export default AddUser