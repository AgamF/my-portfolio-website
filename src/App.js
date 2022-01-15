import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Skillset from './Components/Skillset';
import MyWork from './Components/MyWork';
import About from './Components/About';
import Particles from "react-tsparticles";

const params = {
  fpsLimit: 144,
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: "#000000",
      distance: 220,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 35,
    },
    opacity: {
      value: 2,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: false,
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  particlesInit = () => {};
    
  particlesLoaded = () => {};

  gotoHome = () => {
    this.setState({route: 'home'})
  }

  gotoSkillset = () => {
    this.setState({route: 'skillset'})
  }

  gotoMyWork = () => {
    this.setState({route: 'mywork'})
  }

  gotoAbout = () => {
    this.setState({route: 'about'})
  }

  render() {
    const { route } = this.state;
    if (route === 'home') {
      return (
        <>
          <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={params}/>
          <Navbar 
          gotoHome={this.gotoHome} gotoAbout={this.gotoAbout}/>
          <HeroSection
          gotoSkillset={this.gotoSkillset}
          gotoMyWork={this.gotoMyWork}/>
        </>
      )
    } else if (route === 'skillset') {
      return (
        <>
          <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={params}/>
          <Navbar 
          gotoHome={this.gotoHome} gotoAbout={this.gotoAbout}/>
          <HeroSection 
          gotoSkillset={this.gotoSkillset}
          gotoMyWork={this.gotoMyWork}/>
          <Skillset/>
        </>
      )
    } else if (route === 'mywork') {
      return (
        <>
          <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={params}/>
          <Navbar  
          gotoHome={this.gotoHome} gotoAbout={this.gotoAbout}/>
          <HeroSection 
          gotoSkillset={this.gotoSkillset}
          gotoMyWork={this.gotoMyWork}/>
          <MyWork/>
        </>
      )
    } else if (route === 'about') {
      return (
        <>
          <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={params}/>
          <Navbar 
          gotoHome={this.gotoHome} gotoAbout={this.gotoAbout}/>
          <About />
        </>
      )
    }
  }
}

export default App;
