import React, { Component } from 'react';
import {Button,Card,CardText,CardTitle} from 'react-mdl'



function ReturnCard(props){
    return(
        <div >
          <img height="100" width="100" src={"/images/Group123.png"}/><br/>
          <h5>{props.element.headline}</h5><br/>
          <p>{props.element.info}</p>
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
            <CardTitle style={{backgroundImage:`url(/images/Group${props.element.id}.png)`}}/>
            <h5>Blog Post {props.element.headline}</h5>
            <CardText>
                {props.element.info}
                <br/>

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
            cards:[{id:1,headline:"Organic Food",info:"Away from chemicals, enjoy the natural taste of nature"},{id:2,headline:"Organic Medicines",info:"Natural extracts from medicinal plants ,capable of healing various diseases"},{id:3,headline:"Organic Cosmetics",info:"Our skin needs natural nourishment that several of nature's extracts provide"},{id:4,headline:"Organic Soaps",info:"When it comes to skin, you don't have a choice to compromise with ehat nature provides"}],
            presentedBy:[1,2,3,2,1],
            blogs:[{id:1,headline:"One",info:"Tulsi and Neem Soap, overwhelmed with freshness"},{id:2,headline:"Two",info:"Coconut Body Lotion with mint extracts"},{id:3,headline:"Three",info:"Grapes and Pear hand wash, a perfect helathy solution"}]
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
                              Nature has hid its vast treasure on the land<br/>
                              We bring those extracts for a natural touch!
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
                          Find yourself with refreshing and resplendent natural products <br/>
                           A way to relive nature's beauty through its products.
                          </div>
                      </div>

                      <div className="div-2-2">
                         { this.state.cards.map((c)=><ReturnCard element={c}/>)}
                      </div>

                </div>


                <div className="div-all div-3">
                           <h3>Proudly Presented By</h3>
                           <p>Under the support and due gratitude of our sponsors and people, we put forward a token of thanks</p>
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
                        <img src="/images/Group134.png"/>

                        <h3>Subscribe to our NewsLetter</h3>
                        <p>Want to get daily updates about our products, services, and offers we provide<br/>
                           Our newsletter comes with an additional health and fitness column.
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
                     Our blog takes you through the wonderful everlasting health and natural products that are best suited for your body!
                     </p>
                     <div>
                         {this.state.blogs.map((c)=><ReturnBlogs element={c}/>)}
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
