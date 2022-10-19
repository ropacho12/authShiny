import React from 'react'
// import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-padre'>
{/*        
        <div>
          <img  className='hero-img' src='https://tm.ibxk.com.br/2021/03/03/03085142965019.jpg?ims=1200x675' alt='hero'/>
        </div> */}
        {/* <button className='boton'>Obtener la aplicacion</button> */}








<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="../../Imagenes/01.jpg" className="d-block w-100" alt="hola"/>
      </div>
      <div className="carousel-item">
        <img src="https://i.pinimg.com/564x/f0/a8/8e/f0a88e705aa9855c05c97a7edcfba7ea.jpg" className="d-block w-100, img-hero" alt="hola"/>
      </div>
      <div className="carousel-item">
        <img src="../../Imagenes/esta.jpg" className="d-block w-100" alt="hola"/>
      </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>







    </div>
  )
}

export default Hero