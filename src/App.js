import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage1 from './components/MainComponents/page1';
import HomePage2 from './components/MainComponents/page2';
import HomePage3 from './components/MainComponents/page3';
import HomePage4 from './components/MainComponents/page4';
import HomePage6 from './components/MainComponents/page6';
import HomePage5 from './components/MainComponents/page5';
import HomePage7 from './components/MainComponents/page7';
import HomePage8 from './components/MainComponents/page8';
import HomePage9 from './components/MainComponents/page9';
import HomePage10 from './components/MainComponents/page10';
import Footer1 from './components/footer/footer1';
import SignUpPage from './components/footer/footer2';
import PageContent from './components/footer/footer3';
import ClickableRow from './components/footer/footer4';
import Footer6 from './components/footer/footer6';
import Footer from './components/footer/footer5';
function App() {
  return (
    <div className="bg-white-200">
     <Navbar/>
     <HomePage1/>
     <HomePage2/>
     <HomePage3/>
     <HomePage4/>
     <HomePage5/>
     <HomePage7/>
     <HomePage8/>
     <HomePage6/>
     <HomePage9/>
     <HomePage10/>
     <Footer1/>
     <SignUpPage/>
     <PageContent/>
     <ClickableRow/>
     <Footer6/>
     <Footer/>
    </div>
  );
}

export default App;
