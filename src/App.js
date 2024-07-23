import React, { Suspense, lazy } from 'react';
import MenuBar from './components/MenuBar';
import './App.css';

const Slider = lazy(() => import('./components/Slider'));
const Services = lazy(() => import('./components/Services'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Mission = lazy(() => import('./components/Mission'));
const Vision = lazy(() => import('./components/Vision'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    return (
        <div className="App">
            <MenuBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Slider />
                <Services />
                <AboutUs />
                <Mission />
                <Vision />
                <Footer />
            </Suspense>
        </div>
    );
}
export default App;
