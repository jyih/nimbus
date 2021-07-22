Couldn't display post from posts
-posts had full array
-post assigned via .map checking on .id and id from useParams
-reason: route was '/' so had no :id to useParams

Setup Backend API and had the frontend working through Thunk, but wasn't storing in save because the reducer was not added to the RootReducer

Ji: could not resovle module
needed index.js instead of [ComponentName].js


could not get audio tag to switch sources
-needed to directly pass in a url into the helper function used in the onClick

could not get audio tag to auto play after switching sources
-autoPlay with capital P

CRUD cannot get past invalid csurf token
-use csurfFetch
-spell my thunk function correctly instead of using action creator

Could not load a song page / state wasn't loading
-use optional chaining
-happening is your state isn’t loaded on the first render which is throwing an error in your jsx, but then it rerenders and should work when you do have state loaded.

array labum as select

could not get edit page

css hard