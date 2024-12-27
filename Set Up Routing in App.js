import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
