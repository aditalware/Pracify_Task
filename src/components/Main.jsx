import React, { Component } from 'react';
import {Button,Card,CardText,CardTitle} from 'react-mdl'



function ReturnCard(props){
    return(
        <div >
        <img src={props.id==1?"/images/Group207.png":"/images/Group205.png"}/>
      </div>
    )
}

function ReturnPresentedBy(props){
    return(
        <div >
        <img src={props.id==1?"/images/Group39.png":(props.id==2?"/images/Group64.png":"/images/Group55.png")}/>
      </div>
    )
}

function ReturnBlogs(props){
    return(
        <Card >
            <CardTitle style={{backgroundImage:`url(/images/Group${props.id}.png)`}}/>
            <h5>Blog Post One</h5>
            <CardText>
                Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit, sed<br/>
                do eiusmod.<br/><br/>

                 <button>
                    Read More
                    <div></div>
                </button>
            </CardText>
      </Card>
    )
}
class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            cards:[1,2,1,1],
            presentedBy:[1,2,3,2,1],
            blogs:[1,2,3]
        }
    }


    render() {
        return (
            <div>


               <div className="main-header">
                   <img src="/images/Group228.png" height="50" width="50"/> 
                     <h3>organic</h3>
                </div>



                <div className="div-all div-1">

                     <div className="div-1-1">

                          <h3>Healthy life with</h3>
                          <h1>Nature Organic</h1>
                          <p>
                              Vegetables are the edible parts of a plant<br/>
                              that is used in cooking or can be eaten now
                          </p>
                          <div>
                              <Button ripple>
                                    Explore Now
                              </Button>
                          </div>
                     </div>

                     <div className="div-1-2">
                           <div>
                               <img src="/images/Group228.png"></img>
                           </div>
                           <img className="rose" src="/images/Group195.png"></img>

                     </div>
                </div>




                <div className="div-all div-2">
                      <div className="div-2-1">
                          <img src="/images/Group114.png"/>
                          <h3>Welcome to Nature</h3>
                          <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                           incididunt ut labore et dolore magna aliqua.
                          </div>
                      </div>

                      <div className="div-2-2">
                         { this.state.cards.map((c)=><ReturnCard id={c}/>)}
                      </div>

                </div>


                <div className="div-all div-3">
                           <h3>Proudly Presented By</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                              incididunt ut labore et dolore magna aliqua.</p>
                              <div className="div-3-1">
                                  { this.state.presentedBy.map((c)=><ReturnPresentedBy id={c}/>)}
                              </div>
                </div>





                <div className="div-all div-4">
                        <img src="/images/Group86.png" height="40" width="40"/>
                        <div>

                        </div>
                        <h4>Adit Alware</h4>
                        <span>
                             <img src="/images/Group200.png" height="20" width="20"/>
                             <img src="/images/Group200.png" height="20" width="20"/>
                             <img src="/images/Group200.png" height="20" width="20"/>
                             <img src="/images/Group200.png" height="20" width="20"/>
                             <img src="/images/Group200.png" height="20" width="20"/>

                        </span>
                        <p>Thank you for all the amazing produce and products you deliver each week…<br/><br/>
                            you make my life so easy an bring goodness into our family eating. <br/><br/>
                            I’ve been roasting a lot of brussel sprouts and
                        </p>

                </div>




                <div className="div-all div-5">
                        <img src="/images/Group134.png"/>
                      
                        <h3>Subscribe to our NewsLetter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div>
                          <input type="text" placeholder="Enter your Email Address"/>
                          <Button ripple>
                                    Subscribe
                            </Button>
                        </div>

                </div>



                <div className="div-all div-6">
                    <img src="/images/Group114.png"/>
                     <h3>Read Our Blog</h3>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                    incididunt ut labore et dolore magna aliqua.
                     </p>
                     <div>
                         {this.state.blogs.map((c)=><ReturnBlogs id={c}/>)}
                     </div>

                </div>




                <div className="div-all div-7">
                       <div className="div-7-1">
                           <img src="/images/Group225.png"/>
                           <br/><br/>
                           <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor 
                            <div></div>
                           </p>
                           <br/><br/>
                           <span>© Copyright 2020 Nature</span>
                       </div>
                       <div className="div-7-2">
                                <h5>Information
                                    <div></div>
                                </h5>
                             <div className="div-7-2-1">
                                 <div>About Us</div>
                                 <div>About Us</div>
                                 <div>Products</div>
                                 <div>Products</div>
                                 <div>Contact Us</div>
                                 <div>Terms of Service</div>
                             </div>
                                
                        </div>
                        <div className="div-7-3">
                          <h5>Follow Us
                              <div></div>
                          </h5>
                          <div>
                              <img src="/images/Group99.png"/>
                              <img src="/images/Group100.png"/>
                              <img src="/images/Group105.png"/>
                          </div>
                        </div>
                </div>

            </div>
        );
    }
}

export default Main;
