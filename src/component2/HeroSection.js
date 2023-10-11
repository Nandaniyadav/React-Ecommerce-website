import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../Styles/Button';

const HeroSection = () => {
    return <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>Nandani Store</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, fuga vitae ullam, placeat porro sed illo repellat quam nobis minus alias iste totam eaque, exercitationem rerum esse fugit! Deserunt, a.</p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.section``;

export default HeroSection
