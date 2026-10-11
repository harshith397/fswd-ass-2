import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Button from './components/Button/Button';
import Stopwatch from './components/Stopwatch/Stopwatch';
import './App.css';

function App() {
  // State for Question 2 button click feedback
  const [btnMessage, setBtnMessage] = useState('Click any button to test its onClick handler.');

  // State for Question 3 unmount test
  const [isStopwatchMounted, setIsStopwatchMounted] = useState(true);

  // Four distinct products for Question 1
  const productList = [
    {
      id: 1,
      name: 'Sony WH-1000XM4 Wireless Headphones',
      price: 248.0,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Apple Watch Series 8 (GPS, 45mm)',
      price: 399.0,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Keychron K2 Mechanical Gaming Keyboard',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Nike Air Zoom Pegasus Running Shoes',
      price: 119.5,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80',
      rating: 4.5,
    },
  ];

  return (
    <div className="container">
      {/* Page Header */}
      <header className="page-header">
        <h1>Full Stack Web Development (FSWD)</h1>
        <h2>Assignment - 2</h2>
        <p className="student-note">
          Topics: Reusable Components, Props &amp; Default Props, React Element Styling, Hooks (useState, useEffect)
        </p>
      </header>

      {/* QUESTION 1 */}
      <section className="card-section">
        <div className="section-title-bar">
          <span className="badge">Question 1</span>
          <h3>Reusable ProductCard Component</h3>
        </div>
        

        <div className="products-grid">
          {productList.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </section>

      {/* QUESTION 2 */}
      <section className="card-section">
        <div className="section-title-bar">
          <span className="badge">Question 2</span>
          <h3>React Element Styling: Button Component</h3>
        </div>
        

        <div className="button-showcase">
          <div className="button-row">
            <Button
              variant="primary"
              onClick={() => setBtnMessage('Clicked Primary Button (variant="primary")')}
            >
              Primary Button
            </Button>

            <Button
              variant="success"
              onClick={() => setBtnMessage('Clicked Success Button (variant="success")')}
            >
              Success Button
            </Button>

            <Button
              variant="danger"
              onClick={() => setBtnMessage('Clicked Danger Button (variant="danger")')}
            >
              Danger Button
            </Button>

            <Button
              variant="primary"
              disabled
              onClick={() => setBtnMessage('Disabled Button clicked')}
            >
              Disabled Button
            </Button>
          </div>

          <div className="output-box">
            <strong>Output:</strong> {btnMessage}
          </div>

          <div className="styling-notes">
            <ul>
              <li>
                <strong>Inline Styles:</strong> Applied via a JavaScript <code>style</code> object for base padding, border-radius, font-size, and dynamic hover lift.
              </li>
              <li>
                <strong>External CSS:</strong> Applied via <code>Button.css</code> with classes <code>.btn</code>, <code>.btn-primary</code>, <code>.btn-success</code>, and <code>.btn-danger</code>.
              </li>
              <li>
                <strong>Hover Effect:</strong> Handled through CSS pseudo-class <code>:hover</code> (darkening shade &amp; shadow) plus state-based inline hover transition.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* QUESTION 3 */}
      <section className="card-section">
        <div className="section-title-bar">
          <span className="badge">Question 3</span>
          <h3>Stopwatch using useState &amp; useEffect</h3>
        </div>
        

        <div className="stopwatch-wrapper">
          {isStopwatchMounted ? (
            <Stopwatch />
          ) : (
            <div className="unmounted-box">
              <p>Stopwatch component unmounted. The <code>clearInterval</code> cleanup function was executed.</p>
            </div>
          )}

          <div className="toggle-unmount-area">
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsStopwatchMounted((prev) => !prev)}
            >
              {isStopwatchMounted ? 'Unmount Stopwatch (Verify Cleanup)' : 'Remount Stopwatch'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <p>FSWD Assignment 2 &bull; React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
