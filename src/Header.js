import React from 'react';

const Header =()=>{
return (
    <>
    <div className="header-outs">
				<div className="header-w3layouts">
					<div className="container">

						<div className="right-side">
							<p>
								<button id="trigger-overlay" type="button">
									<span className="fa fa-bars" aria-hidden="true"></span>
								</button>
							</p>
						</div>
						<div className="overlay overlay-hugeinc">
							<button type="button" className="overlay-close">Close</button>
							<nav>
								<ul>
									<li><a href="#index.html" className="scroll">Home</a></li>
									<li><a href="#about" className="scroll" >About</a></li>
									<li><a href="#services" className="scroll" >Services</a></li>
									<li><a href="#experience" className="scroll" >Qualification</a></li>
									<li><a href="#gallery" className="scroll" >Gallery</a></li>
									<li><a href="#contact" className="scroll" >Contact</a></li>

								</ul>
							</nav>
						</div>
						<div className="hedder-logo">
							<h1><a href="index.html">Intro</a></h1>
						</div>

					</div>
					<div className="clearfix"> </div>

				</div>
				<div className="slider">
					<div className="callbacks_container">
						<ul className="rslides" id="slider4">
							<li>
								<div className="slider-img">
									<div className="container">
										<div className="slider-info">
											<h4>I am Kelly Jhon
											</h4>
											<p>Web Design</p>

										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="slider-img ">
									<div className="container">
										<div className="slider-info">
											<h4>Am Web Designer
											</h4>
											<p>My Passion</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="clearfix"> </div>
				</div>
				{/* <!-- This is here just to demonstrate the callbacks -->
		<!-- <ul className="events">
      <li>Example 4 callback events</li>
    </ul>--> */}
			</div>
    </>
)
}

export default Header;