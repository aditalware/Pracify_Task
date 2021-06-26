import React, { Component } from 'react';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './Main'
class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Layout fixedHeader>
                        <Header className="header-color"  >
                                <Navigation>
                                    <Link >
                                       Home
                                    </Link>
                                    <Link >Products</Link>
                                    <Link >Blog</Link>
                                    <Link >About Us</Link>
                                    <Link >Contact</Link>
                                </Navigation>
                    </Header>
                </Layout>
                <Content>
                   <Main/>
                </Content>
            </div>
        );
    }
}

export default NavigationBar;
