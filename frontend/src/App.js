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
import Banner from './components/Banner';
import * as songsActions from "./store/songs";
import * as audioPlayerActions from "./store/audioPlayer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(songsActions.getSongs())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className='content-container'>
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <Banner />
              <SongList />
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
      </div>
      <AudioPlayer />
    </>
  );
}

export default App;