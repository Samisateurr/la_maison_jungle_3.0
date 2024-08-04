import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import homeBannerImage from '../../assets/images/home_banner.webp';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Jungle !</h1>
      <Banner 
        imageUrl={homeBannerImage}  
        height="400px" 
        text="Transformez votre maison en une oasis tropicale avec notre sélection exclusive de plantes exotiques et cactus !"
      />
    </div>
  );
}

export default Home;
