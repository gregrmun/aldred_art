import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Upload from "./Upload";
import HomePage from "./home/HomePage";
import Artwork from './portfolio/artwork'
import Clientwork from "./portfolio/clientwork";
import CustomSurfboards from "./services/customsurfboards";
import CustomCanvases from "./services/customcanvases";
import GraphicDesign from "./services/graphicdesign";
import BigTreeProduct from "./product/product";
import Success from "./payment/success";
import Cancelled from "./payment/cancelled";
import Faqs from "./faqs/faqs";
import Contact from "./contact/contact";

export default class HomeRouter extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Router>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/faqs' component={Faqs} />
                <Route path='/contact' component={Contact} />
                <Route path='/portfolio/artwork' component={Artwork} />
                <Route path='/portfolio/client-work' component={Clientwork} />
                <Route path='/services/custom-surfboards' component={CustomSurfboards} />
                <Route path='/services/custom-canvases' component={CustomCanvases} />
                <Route path='/services/graphic-design' component={GraphicDesign} />
                <Route path='/shop/product/big-tree' component={BigTreeProduct} />
              </Switch>
            </Router>
        );
    }
}