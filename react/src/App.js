import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountProvider } from './utils/accountContext';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import SocialMedia from './pages/social-media';
import Contact from './pages/contact-us'
import Images from './pages/images';
import Videos from './components/shared/video';
import Faq from './pages/faq';
import Membership from './pages/membership-rules';
import BlogsDetail from './pages/blogsDetail';
import ServiceDetail from './pages/serviceDetail';
import Thanks from './pages/thanks';
import NotFound from './pages/404';
import Layout from "./layout/index";
function App() {
  return (
    <>
      <AccountProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/images" element={<Images />} />
              <Route path="/video" element={<Videos />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/membership-rules" element={<Membership />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/blogs/:handle" element={<BlogsDetail />} />
              <Route path="/services/:handle" element={<ServiceDetail />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/thanks" element={<Thanks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AccountProvider>
    </>
  )
}

export default App
