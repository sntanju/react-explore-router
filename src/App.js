import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import InvalidPage from './components/InvalidPage/InvalidPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
           
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/friends">
            <Friends></Friends>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>

          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>

          <Route path="*">
            <InvalidPage></InvalidPage>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
