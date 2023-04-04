import { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import ShowUser from './components/ShowUser'

function App() {
  const [githubUser, setGithubUser] = useState('')
  const [falseUser, setFalseUser] = useState(false)
  const [userInput, setUserInput] = useState('')

  const githubUserHandler = (e) => {
    e.preventDefault()
    setGithubUser(userInput)
    setUserInput('')
    setFalseUser(false)
  }

  return (
    <div className="App">
      {githubUser === '' || falseUser
        ? <AddUser githubUserHandler={githubUserHandler} userInput={userInput} setUserInput={setUserInput} falseUser={falseUser} /> 
        : <ShowUser githubUser={githubUser} setFalseUser={setFalseUser} />
      }
    </div>
  )
}

export default App
