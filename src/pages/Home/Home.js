import React, { Component } from 'react';
import './Home.css';
import resumeImg from '../../assets/png/001-resume.png';
import linkedInImg from '../../assets/png/002-linkedin.png';
import instagramImg from '../../assets/png/003-instagram.png';
import twitterImg from '../../assets/png/004-twitter.png';
import Link from '../../components/Link';
import resume from '../../assets/docs/Resume (Dishant Kaushik).pdf';
export default class Home extends Component {
  componentDidMount() {
    let div = document.querySelector('.container');
    div.addEventListener('mousemove', (e) => {
      console.log(e);
      div.style.setProperty('--x', -(0.01 * e.screenX) + 'px');
      div.style.setProperty('--y', -(0.01 * e.screenY) + 'px');
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='main'>
          <h1>
            Hi, I'm <span className='bolder'>Dishant</span>
          </h1>

          <div className='links'>
            <ul>
              <li>
                <Link href={resume}>
                  <img src={resumeImg} alt='Resume' />
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/dishantkaushik/'>
                  <img src={linkedInImg} alt='LinkedIn' />
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/dishantkaushik/'>
                  <img src={instagramImg} alt='Instagram' />
                </Link>
              </li>
              <li>
                <Link href='https://twitter.com/dkaushik95'>
                  <img src={twitterImg} alt='Twitter' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
