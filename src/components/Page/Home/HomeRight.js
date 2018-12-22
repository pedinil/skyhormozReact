import React from 'react';



const HomeRight = (props) => {

    return (
        <div>
<div  className="sidebar">
                  

                  <div  className="recent-posts">
                          <div  className="recent-post-wrap">

                          <header  className="about-me">
                                
                  
                                <h2>{props.result.entryTitle}</h2>
                
                                <div  className="tags-links">
                                    <a href="#">#winter</a>
                                    <a href="#">#love</a>
                                    <a href="#">#snow</a>
                                    <a href="#">#january</a>
                                </div>
                            </header>

                              <figure>
                                  <img src={props.result.imgSrc} alt={props.result.imgAlt}/>
                              </figure>
                  
                             
                          </div>
                  </div>
                  </div>
                     </div>
                  
    );



}


export default HomeRight;

