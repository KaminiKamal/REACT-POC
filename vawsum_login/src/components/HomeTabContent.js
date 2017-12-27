import React, { Component } from 'react';
import "../css/Header.css";

class HomeTabContent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            columnWidth : "s12",
            //TAN - For DropDown.jsx
            optionList : [
					{"option" : "Apple"},
					{"option" : "Black"},
					{"option" : "Color"}
				]
        }
    }
  render() {

    //Called to make a array of the images
    function importAll(r)
    {
        let images = {};
        r.keys().map((item, index) => { images[item.replace("./", "")] = r(item); });
        return images;
    }

    //Fetching all the icons for the tab at one go.
    const images = importAll(require.context("./icons", false, /\.(png|jpe?g|svg)$/));
    console.log("images", images);

    return (
            <div className="row">
                <div className="col s12 scrollspy">
                    <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width tab-demo">
                        <li className="tab">
                            <a className="test-active" href="#test1">
                                <div className="icon-box">
                                    <label className="label-icon">
                                        <img src={images["ic_feed_home.png"]} className="responsive-img" height="35" width="35" alt=""/>
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li className="tab">
                            <a href="#test2">
                                <div className="icon-box">
                                    <label className='label-icon'>
                                        <img src={images["ic_feed_magazine.png"]} className="responsive-img" height="35" width="35" alt=""/>
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li className="tab">
                            <a className="active" href="#test3">
                                <div className="icon-box">
                                    <label className="label-icon">
                                        <img src={images["ic_feed_vawme.png"]} className="responsive-img" height="35" width="35" alt=""/>
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li className="tab">
                            <a className="active" href="#test4">
                                <div className="icon-box">
                                    <label className='label-icon'>
                                        <img src={images["ic_feed_inbox.png"]} className="responsive-img" height="35" width="35" alt=""/>
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li className="tab">
                            <a className="active" href="#test0">
                                <div className="icon-box">
                                    <label className="label-icon"  style={{color:"gray"}}><i className="material-icons">dehaze</i></label>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="test1" className="col s12" style={{height:"100vh"}}>
                  adfjdfjsdhfjsdfdf
                  defaultffsdkkdlsd

                </div>
                <div id="test2" className="col s12">

                </div>
                <div id="test3" className="col s12"></div>
                <div id="test4" className="col s12">
                </div>
                <div id="test0" className="col s12">

                </div>
            </div>

    );
  }
}

export default HomeTabContent;
