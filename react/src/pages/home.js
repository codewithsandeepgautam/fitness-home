import React from 'react';
import Banner from '../components/home/banner';
import About from '../components/home/about-us';
import Services from '../components/home/service';
import Trainer from '../components/home/trainers';
import Getstarted from '../components/home/getstarted';
import Gallery from '../components/home/gallery';
import Timetable from '../components/home/timetable';
import Testimonial from '../components/home/testimonial';
function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Trainer />
      <Getstarted />
      <Gallery />
      <Timetable />
      <Testimonial />
    </div>
  )
}
export default Home