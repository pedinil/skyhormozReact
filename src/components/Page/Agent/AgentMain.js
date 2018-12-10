import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import AgentTags from './AgentTags';
import FooterAll from '../../Footer/FooterAll';






 class AgentMain extends Component {


    render() {



        return (
            <div>
                <div  className="outer-container">
                    <AgentTags />
                    <HeaderAll titlePage="Agent" />

                    <div  className="container single-page contact-page">
                    <div class="row">
				<div class="col-12 col-lg-9">
					<div class="content-wrap">
						

						<div class="clearfix visible-xs"></div>
						<div class="clearfix visible-xs"></div>
						<div class="row">
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0581870128"><img class='aganets' src="images/sir_darwin.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0521033016"><img class='aganets' src="images/ms_dhoe.jpg" alt="" /></a> </div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0504687413"><img class='aganets' src="images/ms_jelly.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0522497496"><img class='aganets' src="images/ms_lheidy.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0521033017"><img class='aganets' src="images/ms_marian.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0525744219"><img class='aganets' src="images/sir_jeric.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0521033012"><img class='aganets' src="images/sir_mike.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "><a href="tel:0521033012"> <img class='aganets' src="images/sir_xtian.jpg" alt="" /></a> </div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0521033015"><img class='aganets' src="images/ms_twinkle.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0521033021"><img class='aganets' src="images/ms_gen.jpg" alt="" /> </a></div>
							<div class="col-sm-5 col-md-6 col-xs-12 col-sm-offset-1 "> <a href="tel:0561897911"><img class='aganets' src="images/ms_rusty.jpg" alt="" /> </a></div>
						  </div>

					</div>
				</div>


			</div>
                    </div>
                    <FooterAll />

                </div>
            </div>
        );
    }

}


export default AgentMain;