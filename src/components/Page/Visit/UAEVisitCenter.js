import React from 'react'



const UAEVisitCenter = (props) => {


    return (

            <div>
                 <div  className="content-wrap">
                            <header  className="entry-header">

                                <h2  className="entry-title">{props.result.entryTitle}</h2>

                                <div  className="tags-links">
                                    <a href="#">#winter</a>
                                    <a href="#">#love</a>
                                    <a href="#">#snow</a>
                                </div>
                            </header>

                            <figure  className="featured-image">
                                <img src={props.result.imgSrc} alt={props.result.imgAlt}/>
                        </figure>

                                <div  className="entry-content">
                                    <p>{props.result.entryContent}
                            </p>
                                </div>

                                <footer  className="entry-footer flex flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center">
                                    <ul  className="post-share flex align-items-center order-3 order-lg-1">
                                        <label>Share</label>
                                        <li><a href="#"><i  className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i  className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i  className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i  className="fa fa-twitter"></i></a></li>
                                    </ul>



                        </footer>
                    </div>

            </div>



    )



}

export default UAEVisitCenter;