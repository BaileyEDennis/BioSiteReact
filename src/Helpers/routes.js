import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Bio from '../Views/Bio';
import Tech from '../Views/Tech';
import Projects from '../Views/Projects';
import Blog from '../Views/Blog';
import NotFound from '../Views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/bio" component={() => <Bio />} />
      <Route exact path="/tech" component={() => <Tech />} />
      <Route exact path="/projects" component={() => <Projects />} />
      <Route exact path="/blog" component={() => <Blog />} />
      <Route component={NotFound} />
    </Switch>
  );
}
