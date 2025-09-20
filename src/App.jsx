import React from 'react';
import Header from './components/Header.jsx';
import ClassOfferings from './sections/ClassOfferings.jsx';
import Feedback from './sections/Feedback.jsx';
import BookSession from './sections/BookSession.jsx';
import About from './sections/About.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <Header />
    <main>
      <ClassOfferings />
      <Feedback />
      <BookSession />
      <About />
    </main>
    <Footer />
  </>
);

export default App;
