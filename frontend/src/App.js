import React, { useState, useEffect } from 'react'
import Meme from './components/Meme'
// import MemeInfo from './components/MemeInfo'
// import User from './components/User'
import memeService from './services/memes'
import loginService from './services/login'
import './index.css'
import PropTypes from 'prop-types'
import { setNotification } from './reducers/notificationReducer'
import loggedReducer, { logIn, logOut } from './reducers/loggedReducer'
import { initializeMemes,createMeme } from './reducers/memeReducer'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  useRouteMatch, useHistory,
  Switch, Route, Link, useParams
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { TableContainer, Table, TableCell, TableRow, TableBody, Paper, TextField, Button, AppBar, Toolbar, IconButton, List, Divider, ListItem, ListItemAvatar,
ListItemText, makeStyles, ImageListItem, ImageList, ImageListItemBar } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import { Alert } from '@material-ui/lab'

const Menu = (props) => {
  const padding = {
    padding: 50
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Button color="inherit" component={Link} to="/memes">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/newpost">
          New post
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          My profile
        </Button>
        <Button color="inherit" onClick={props.handleLogout}>Logout </Button>
      </Toolbar>
    </AppBar>
  )
}

const App = () => {

  const [newTitle, setNewTitle] = useState('')
  const [newMedia, setNewMedia] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()
  const noteMessage = useSelector(state => state.notification)
  const users = useSelector(state => state.users)
  const memes = useSelector(state => state.memes)

  useEffect(() => {
    dispatch(initializeMemes())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedMemeAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      dispatch(logIn(user))
      memeService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      memeService.setToken(user.token)
      dispatch(logIn(user))
      setUser(user)
      setUsername('')
      setPassword('')
      dispatch(setNotification(`Welcome '${user.username}'`,5))
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  const handleLogout = async () => {
    console.log('logging out')

    window.localStorage.removeItem('loggedMemeAppUser')
    dispatch(logOut())
    window.location.reload()
  }

  const Error = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const addMeme = async (event) => {
    event.preventDefault()
    const memeObject = {
      title: newTitle,
      media: newMedia,
      
    }

    memeService
      .create(memeObject)
      .then(returnedMeme => {
        dispatch(createMeme(memeObject))
        console.log(`A new meme '${newTitle}' being added`)
        dispatch(setNotification(`A new meme '${newTitle}' added`,5))
        setNewTitle('')
      })
      .catch(() => {
        setErrorMessage(
          'An error occurred'
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
  }

  const NewPost = () => {

    return (
      <div>
        <h2>Make a post</h2>
        <form onSubmit={addMeme}>
          <div>
      Title
            <input
              id='titleField'
              type="text"
              value={newTitle}
              name="Title"
              onChange={({ target }) => setNewTitle(target.value)}
            />
          </div>
          <div>
      Image link (URL)
            <input
              id='urlField'
              type="text"
              value={newMedia}
              name="Url"
              onChange={({ target }) => setNewMedia(target.value)}
            />
          </div>
          <button id='submitMeme-button' type="submit">create</button>
        </form>
      </div>
    )
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 800,
      height: 720,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const classes = useStyles();

  if (user === null) {
    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <Error message={errorMessage} />
          <div>
            <TextField label="username"
              id='username'
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <TextField label="password"
              id='password'
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <Button variant="contained" color="primary" id='login-button' type="submit">login</Button>
        </form>
      </div>
    )
  }

  return (
    <Container>
    <Router>

    <h1>MemeDump</h1>

    <Menu handleLogout={handleLogout} />
    
  <Route path="/memes">
  <ImageList rowHeight={180} className={classes.imageList}>
    {memes.map(meme =>
      <ImageListItem key={meme.id} cols={2} style={{ height: 'auto' }}>
            <img src={meme.media} alt={meme.title} />
            <ImageListItemBar
              title={meme.title}
              subtitle={<span>by {meme.user.username} on {meme.date}</span>}
              actionIcon={
                <IconButton aria-label={`View comments`} className={classes.icon}>
                  <ChatIcon />
                </IconButton>
              }
            />
      </ImageListItem>
    
    )}
    </ImageList>
  </Route>

  <Route path="/newpost"><NewPost></NewPost></Route>
  </Router>
  </Container>
   )
}

export default App;