import './Demo.css';
import lmao from './lmao.png';
import ImageFadeIn from "react-image-fade-in";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

function Display(props) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
    
    const handleClick = () => setLoading(true);

    return (
        <div className='Demo'>
            <header className='DemoHeader'>
                <h1 data-aos="fade-down">Russell Kong</h1>
                <p data-aos="fade-left" data-aos-delay="1000">Welcome to my Website!</p>
                <ImageFadeIn src={lmao} alt="lmao" width="100" height="100" opacityTransition={40}></ImageFadeIn>
                <p></p>
                <Button
                variant="dark"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                href="/pages/AboutMe"
                >
                {isLoading ? 'Loading…' : 'About Me!'}
                </Button>
            </header>
        </div>
    )
};

export default Display;