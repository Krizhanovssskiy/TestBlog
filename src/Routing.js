import React           from "react";
import {Route, Switch} from "react-router-dom";
import ListPosts from "./components/ListPosts";
import SeparatePost from "./components/SeparatePost";


const Routing = () => (
  <Switch>
    <Switch>
      <Route path='/' exact component={ListPosts}/>
      <Route path='/post/' component={SeparatePost}/>
    </Switch>
  </Switch>
);

export default Routing;