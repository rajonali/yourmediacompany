import React from "react"

import Layout from '../components/layout';

import '../styles/index.scss'

import placeholder from '../images/placeholder.jpg';
import placeholder2 from '../images/placeholder2.jpg';
import placeholder3 from '../images/placeholder3.jpg';
import placeholder4 from '../images/placeholder4.jpg';
import placeholder5 from '../images/placeholder5.jpg';
import placeholder6 from '../images/placeholder6.jpg';
import placeholder7 from '../images/placeholder7.jpg';

import './index.page.scss';

const HomePage = () => {
    return (
        <Layout>

            <div
                style={{
                backgroundImage: `url(${placeholder})`,
                overflow: 'hidden',
                height: '500px',
                width: '100vw'
            }}>

                <div class="video-preview-comp">
                    <h1
                        style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '50px',
                        fontFamily: 'helvetica',
                        margin: '150px 0px 0px 150px'
                    }}>COMPANY NAME</h1>
                    <h4
                        style={{
                        color: 'white',
                        fontWeight: 'normal',
                        fontFamily: 'helvetica',
                        margin: '10px 0px 0px 150px'
                    }}>▸ Watch Showreel</h4>
                </div>

            </div>

            <div
                class="subsections"
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '95vw',
                paddingTop: '75px',
                paddingLeft: '50px'
            }}>

                <div
                    class="about-us-preview-comp"
                    style={{
                    width: '90vw',
                    paddingTop: '5px'
                }}>
                    <p
                        style={{
                        fontSize: '24px',
                        fontFamily: 'Karla',
                        fontWeight: 600,
                        lineHeight: 1.1,
                        color: 'rgba(13,15,9,0.9)'
                    }}>Header goes here</p>

                    <div
                        class="about-us-preview-subtext"
                        style={{
                        width: '70vw'
                    }}>

                        <p
                            style={{
                            fontSize: '18px',
                            paddingTop: '20px',
                            fontFamily: 'Karla',
                            lineHeight: 1.9,
                            color: 'rgba(13,15,9,0.8)'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br/>
                            <br/>

                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat                        </p>
                    </div>

                </div>

                <div
                    class="fw-divider-space"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '1px',
                    marginTop: '60px'
                }}></div>

                <div
                    style={{
                    paddingBottom: '30px',
                    width: '1200px'
                }}
                    class="our-services-subsection">
                    <center>
                        <h1
                            style={{
                            padding: '50px',
                            fontFamily: 'Karla',
                            fontWeight: 500,
                            fontSize: '48px'
                        }}>Our Services</h1>
                    </center>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        width: 'auto',
                        maxHeight: "100%",
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <img
                            height={341}
                            width={426}
                            src={placeholder2}
                            style={{
                            padding: '20px'
                        }}/>
                        <img
                            height={341}
                            width={426}
                            src={placeholder3}
                            style={{
                            padding: '20px'
                        }}/>
                        <img
                            height={341}
                            width={426}
                            src={placeholder4}
                            style={{
                            padding: '20px'
                        }}/>
                    </div>
                </div>

                <div
                    class="fw-divider-space"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '1px',
                    marginTop: '60px'
                }}></div>

                <div
                    style={{
                    paddingBottom: '30px'
                }}
                    class="our-services-subsection">
                    <center>
                        <h1
                            style={{
                            padding: '50px',
                            fontFamily: 'Karla',
                            fontWeight: 500,
                            fontSize: '48px'
                        }}>Featured Photos</h1>
                    </center>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <img
                            src={placeholder5}
                            style={{
                            padding: '20px'
                        }}/>
                        <img
                            src={placeholder6}
                            style={{
                            padding: '20px'
                        }}/>
                        <img
                            src={placeholder7}
                            style={{
                            padding: '20px'
                        }}/>

                    </div>
                </div>

                <div
                    class="fw-divider-space"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '1px',
                    marginTop: '60px'
                }}></div>

                <div
                    style={{
                    paddingBottom: '30px'
                }}
                    class="featured-videos-subsection">

                    <center>
                        <h1
                            style={{
                            padding: '50px',
                            fontFamily: 'Karla',
                            fontWeight: 500,
                            fontSize: '48px'
                        }}>Featured Videos</h1>
                    </center>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                    </div>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0"
                            width="400"
                            style={{
                            padding: '20px'
                        }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen></iframe>
                    </div>

                </div>

                <div
                    class="fw-divider-space"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '1px',
                    margin: '60px'
                }}></div>

                <div
                    style={{
                    paddingBottom: '30px'
                }}
                    class="featured-clients-subsection">

                    <center>
                        <h1
                            style={{
                            fontFamily: 'Karla',
                            fontWeight: 500,
                            fontSize: '48px'
                        }}>Our Clients</h1>
                    </center>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 40
                    }}>
                        <div
                            style={{
                            height: 200,
                            width: 200,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}/>
                        <div
                            style={{
                            height: 200,
                            width: 200,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}/>
                        <div
                            style={{
                            height: 200,
                            width: 200,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}/>
                        <div
                            style={{
                            height: 200,
                            width: 200,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}/>
                        <div
                            style={{
                            height: 200,
                            width: 200,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}/>
                    </div>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}></div>

                </div>

                <div
                    class="fw-divider-space"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '1px',
                    margin: '60px'
                }}></div>

                <div
                    style={{
                    paddingBottom: '30px'
                }}
                    class="client-testimonials-subsection">

                    <center>
                        <h1
                            style={{
                            fontFamily: 'Karla',
                            fontWeight: 500,
                            fontSize: '48px'
                        }}>Client Testimonials</h1>
                    </center>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 40,
                        paddingBottom: 100
                    }}>
                        <div class="container bootstrap snippet">
                            <div class="row">
                                <hr/>
                                <div class="col-md-12">
                                    <div class="row testimonials">
                                    <div class="col-sm-4">
                                            <blockquote>
                                                <p class="clients-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

                                                </p>
                                                </blockquote>

                                                <div style={{
                        display: 'flex',
                        flexDirection: 'row',

                        }}>
                                                <img
                                                    class="img-circle img-thumbnail"
                                                    src="https://lorempixel.com/400/400/people/5/"/>
                                                <span class="clients-name text-primary" style={{marginLeft:10,                         alignItems:'center',
                        justifyContent:'center'}}><h4>First Last</h4>President & Founder <br />Client company</span>
                                                </div>

                                        </div>

                                        <div class="col-sm-4">
                                            <blockquote>
                                                <p class="clients-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                                </p>
                                                </blockquote>

                                                <div style={{
                        display: 'flex',
                        flexDirection: 'row',

                        }}>
                                                <img
                                                    class="img-circle img-thumbnail"
                                                    src="https://lorempixel.com/400/400/people/5/"/>
                                                <span class="clients-name text-primary" style={{marginLeft:10,                         alignItems:'center',
                        justifyContent:'center'}}><h4>First Last</h4>President & Founder <br />Client company</span>
                                                </div>

                                        </div>
                                        <div class="col-sm-4">
                                            <blockquote>
                                                <p class="clients-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                                </p>
                                                </blockquote>

                                                <div style={{
                        display: 'flex',
                        flexDirection: 'row',

                        }}>
                                                <img
                                                    class="img-circle img-thumbnail"
                                                    src="https://lorempixel.com/400/400/people/5/"/>
                                                <span class="clients-name text-primary" style={{marginLeft:10,                         alignItems:'center',
                        justifyContent:'center'}}><h4>First Last</h4>President & Founder <br />Client company</span>
                                                </div>

                                        </div>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="services-array"
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}></div>

                </div>

            </div>

        </Layout>
    )
}

export default HomePage;