import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Potenti nullam ac tortor vitae purus. Faucibus ornare suspendisse sed nisi lacus sed viverra. Ipsum dolor sit amet consectetur. Risus sed vulputate odio ut enim blandit volutpat. Sed euismod nisi porta lorem mollis aliquam. Sit amet dictum sit amet justo donec. Tortor at auctor urna nunc id. Aliquam sem et tortor consequat id porta nibh venenatis cras. Nisl suscipit adipiscing bibendum est ultricies. Volutpat odio facilisis mauris sit amet massa vitae tortor. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Egestas integer eget aliquet nibh praesent. Cras sed felis eget velit aliquet sagittis. Nec ullamcorper sit amet risus nullam eget felis.</p>
            </Content>
        </div>
    );

}

export default AboutPage;