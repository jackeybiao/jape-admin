import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import { AdminIndex } from '../admin/AdminIndex'
import { AdminPost } from '../admin/AdminPost'

import './layout.css';

export function Header(){
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/post/">文章</Link></li>
          </ul>
        </nav>
      </header>
      <section>
        <Route path="/" exact component={AdminIndex} />
        <Route path="/post/" component={AdminPost} />
      </section>
    </Router>
  );
}
