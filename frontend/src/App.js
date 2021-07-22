import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SongList from "./components/SongList";
import AudioPlayer from "./components/AudioPlayer";
import SongUploadForm from './components/SongUploadForm';
import SongPage from './components/SongPage';
// import * as songsActions from "./store/songs";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SongList />
            <AudioPlayer />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/upload'>
            <SongUploadForm />
          </Route>
          <Route path='/songs/:id'>
            <SongPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;