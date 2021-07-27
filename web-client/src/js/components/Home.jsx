import * as React from 'react';
import coverImg from './assets/cover-img.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
    return (<div>
            <h2>Welcome to Econotravel Barcelona</h2>
            <div className={"coverImgContainer"}>
                <img src={coverImg} className={"coverImg"} />
            </div>

        </div>
    )
}