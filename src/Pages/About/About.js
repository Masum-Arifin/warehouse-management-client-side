import React from 'react';
import myPic from '../../img/img.png'
const About = () => {
    return (
        <div>
               <div className="container">
      <div className=" d-flex row text-center justify-content-center align-items-center mx-auto">
        <div className="col-12 col-md-6 col-sm-12 col-lg-6 mx-auto">
          <img className="w-50 mx-auto" src={myPic} alt="" />
        </div>
        <div className="col-12 col-md-6 col-sm-12 col-lg-6">
         <div className="">
         <h1 className="font-bold  mt-5 text-start py-2">About </h1>
          <h2 className=" text-secondary text-start pb-2">Abdullah Al Masum</h2>
          <p className="mx-2 my-5 justify ">
            This a tremendous feeling to share with you about my goals. Be the
            change you want to see in the world. So, flourish yourself first in
            a way that people start to realize that you are the change-maker.
            From an early age, I always wanted to be someone who contributes to
            society. So, I started exploring things. As an era of technology, I
            found coding is a great asset to contribute in solving problems
            more. Therefore, I am Shunning my web development skills with
            Jhankar Mahbub. Beside coding, I am highly advanced in Graphic
            Designing. Adobe Photoshop and Illustrator are my core tools. I have
            been working as an editor, publishing a bulletin every month for the
            last 7 months. Recently, I published a Souvenir which was a great
            success for me. I hope, My life impacts everyone to become more
            curious and honest about themselves. In conclusion, evolve and live
            yourselves every second of life.{" "}
          </p>
         </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;