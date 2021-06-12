import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavigationBar/>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default HomePage;
