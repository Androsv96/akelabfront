import React, { useState } from 'react';
import NumbersSequence from '../NumbersSequence/view';
import Home from '../Home/view';
import Movies from '../Movies/';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { FIBONACCI, WORDS_REPLACEMENT, ROUTES, FIBONACCI_TITLE, WORDS_TITLE, HOME_TITLE, MOVIES_TITLE } from '../../Utils/constants';
import './style.css';

export default function MyRouter() {

    const [activeLink, setActiveLink] = useState({
        home: true,
        fibonacci: false,
        words: false,
        movies: false
    });

    const handleLinkClicked = (linkId) => {

        let newSelectedLink = {};
        Object.keys(activeLink).forEach(key => {
            if (key === linkId) newSelectedLink = { ...newSelectedLink, [key]: true }
            else newSelectedLink = { ...newSelectedLink, [key]: false }
        });
        setActiveLink(newSelectedLink)
    };

    return (

        <Router>
            <div id="main_wrapper">

                <div id="navbar">

                    <div className={activeLink.home ? "link_active" : ""}>
                        <Link id="home" to={ROUTES.HOME} onClick={(e) => handleLinkClicked(e.target.id)}>{HOME_TITLE}</Link>
                    </div>

                    <div className={activeLink.fibonacci ? "link_active" : ""}>
                        <Link id="fibonacci" to={ROUTES.FIBONNACI} onClick={(e) => handleLinkClicked(e.target.id)}>{FIBONACCI_TITLE}</Link>
                    </div>

                    <div className={activeLink.words ? "link_active" : ""}>
                        <Link id="words" to={ROUTES.WORDS_REPLACEMENT} onClick={(e) => handleLinkClicked(e.target.id)}>{WORDS_TITLE}</Link>
                    </div>

                    <div className={activeLink.movies ? "link_active" : ""}>
                        <Link id="movies" to={ROUTES.MOVIES} onClick={(e) => handleLinkClicked(e.target.id)}>{MOVIES_TITLE}</Link>
                    </div>

                </div>

                <Switch>
                    <Route exact path={ROUTES.HOME}>
                        <Home />
                    </Route>

                    <Route path={ROUTES.FIBONNACI}>
                        <NumbersSequence component={FIBONACCI} />
                    </Route>

                    <Route path={ROUTES.WORDS_REPLACEMENT}>
                        <NumbersSequence component={WORDS_REPLACEMENT} />
                    </Route>

                    <Route path={ROUTES.MOVIES}>
                        <Movies />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}