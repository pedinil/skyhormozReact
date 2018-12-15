import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll'
import FooterAll from '../../Footer/FooterAll'
import GallaryTags from './GallaryTags';
import ImageGridList from './ImageGridList';

class Gallery extends Component {
    render() {
        return (
            <div>
                <HeaderAll titlePage="Gallery" />
                <GallaryTags />
                <div className="container single-page contact-page">
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <div className="content-wrap">
                                <ImageGridList />
                            </div>
                        </div>
                    </div>
                    </div>
                    <FooterAll />
                </div>
                );
            }
        
        }
export default Gallery;