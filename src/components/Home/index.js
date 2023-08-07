import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/J-test2.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Logo2 from './Logo2';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['o','s','e']
    const jobArray = ['s','o','f','t','w','a','r','e','','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => clearTimeout(timeoutId);
      }, []);
      

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Software Engineer/ Cybersecurity Engineer/ CEO</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
            <Logo2 />
            
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home