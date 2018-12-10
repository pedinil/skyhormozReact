import React from 'react'



const HomeCenter = (props) => {


    return (

            <div>
                 <div class="content-wrap">
                            <header class="entry-header">

                                <h2 class="entry-title">{props.result.entryTitle}</h2>

                                <div class="tags-links">
                                    <a href="#">#winter</a>
                                    <a href="#">#love</a>
                                    <a href="#">#snow</a>
                                </div>
                            </header>

                            <figure class="featured-image">
                                <img src={props.result.imgSrc} alt={props.result.imgAlt}/>
                        </figure>

                                <div class="entry-content">
                                    <p>{props.result.entryContent}
                            </p>
                                </div>

                                <footer class="entry-footer flex flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center">
                                    <ul class="post-share flex align-items-center order-3 order-lg-1">
                                        <label>Share</label>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    </ul>



                        </footer>
                    </div>

            </div>



    )



}

export default HomeCenter;