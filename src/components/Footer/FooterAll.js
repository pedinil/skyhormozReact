import React from 'react';

const FooterAll = () => {


        return (
            <div>

<footer  className="sit-footer">
<div  className="footer-bar">
    <div  className="outer-container">
        <div  className="container-fluid">
            <div  className="row justify-content-between">
                <div  className="col-12 col-md-6">
                    <div  className="footer-copyright">

                        <p>
                            Copyright &copy;
                            <script>
                                document
                                        .write(new Date().getFullYear());
                            </script>
                            All rights reserved | This template is made with <i
                                 className="fa fa-heart-o" aria-hidden="true"></i> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>

                    </div>
                </div>


                <div  className="col-12 col-md-6">
                    <div  className="footer-social">
                        <ul  className="flex justify-content-center justify-content-md-end align-items-center">
                            <li><a href="https://www.facebook.com/skyhormoztravelsllc"><i  className="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/skyhormoz"><i  className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/sky-hormoz-7b83b216b/"><i  className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
     
        </div>

    </div>

</div>

</footer>

<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
    
            </div>

        );


}

export default FooterAll;

