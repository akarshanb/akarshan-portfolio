import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PortfolioPage from "./courses/CoursesPage";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loader from './common/Loader';
import PrismaLoader from './common/PrismaLoader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.setState = this.setState.bind(this);

    setTimeout(() => {
      this.setState({ loading: false })
    }, 4000)
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="h100 container-fluid">
          <Header />
          <Route className="h100" render={(location) => (
            <TransitionGroup>
              <CSSTransition timeout={100000} classNames="fade" key={location.key}>
                <Switch>
                  <Route exact path="/" component={AboutPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/portfolio" component={PortfolioPage} />
                  <Route component={PageNotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      )
    } else {
      return (
        <PrismaLoader />
      )
    }
  }



}

export default App;
