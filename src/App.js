import logo from './logo.svg';
import './App.css';

function App() {
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
			<div className="about" id="about">
				<div className="container">
					<div className="col-md-4 about-left ">
						<img src="images/ab2.jpg" className="img-responsive" alt="" />
					</div>
					<div className="col-md-7 about-right">
						<div className="about-me">
							<h2>Kelly Jhon </h2>
							<h4>Web Design & Web Developer</h4>
						</div>
						<div className="w3layouts_more-buttn">
							<p>Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget dolor.
								Aenean massa. Cum sociis natoque penatibus
								adipiscing elit. Aenean commodo ligula eget dolor.</p>
							<div className="buttn-about">
								<a href="#services">Read More</a>
							</div>
							<div className="buttom-social-grids">

								<ul>
									<li><a href="#"><span className="fa fa-facebook"></span></a></li>
									<li><a href="#"><span className="fa fa-twitter"></span></a></li>
									<li><a href="#"><span className="fa fa-rss"></span></a></li>
									<li><a href="#"><span className="fa fa-vk"></span></a></li>
								</ul>
							</div>
						</div>

					</div>
					<div className="clearfix"> </div>
					<div className="my-ser-info">
						<div className="col-md-5 my-datas">
							<h3>My Personal Data</h3>
							<ul className="address">
								<li>
									<ul className="address-text ">
										<li><b>Name </b></li>
										<li>:Kelly Jhon</li>
									</ul>
								</li>
								<li>
									<ul className="address-text ">
										<li><b>D.O.B </b></li>
										<li>:23-06-1989</li>
									</ul>
								</li>
								<li>
									<ul className="address-text">
										<li><b>PHONE </b></li>
										<li>:+00 111 222 3333</li>
									</ul>
								</li>
								<li>
									<ul className="address-text">
										<li><b>ADDRESS </b></li>
										<li>:756 hill,south pole,U.S.A</li>
									</ul>
								</li>
								<li>
									<ul className="address-text">
										<li><b>E-MAIL </b></li>
										<li><a href="mailto:example@mail.com">: mail@example.com</a></li>
									</ul>
								</li>
								<li>
									<ul className="address-text">
										<li><b>WEBSITE </b></li>
										<li><a href="mailto:example@mail.com">: www.myresume.com</a></li>
									</ul>
								</li>
							</ul>
							<div className="hire-w3lgrids">
								<a href="#" className="there-more">
									Download
								</a>
								<a href="#" className="there-more">
									Hire Me
								</a>
							</div>
						</div>
						<div className="col-md-7 aboutmy-services">

							<div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
								<div className="about-gap">
									<span className="fa fa-television" aria-hidden="true"></span>
									<h3>web Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetuer</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
								<div className="about-gap clr-green">
									<span className="fa fa-database" aria-hidden="true"></span>								
									<h3>UI/UX Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetuer</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
								<div className="about-gap clr-green">
									<span className="fa fa-picture-o" aria-hidden="true"></span>
									<h3>Photoshop</h3>
									<p>Lorem ipsum dolor sit amet, consectetuer</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
								<div className="about-gap">
									<span className="fa fa-mobile" aria-hidden="true"></span>
									<h3>Web Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetuer</p>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="clearfix"> </div>

				</div>
			</div>
			{/* <div className="services" id="services">
				<div className="container">
					<h3 className="title clr">Services</h3>
					<div className="banner-bottom-girds">

					<div className="col-md-5 my-ser-right">
							<div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-1">
								<div className="ser-icone">
									<span className="fa fa-users font" aria-hidden="true"></span>

									<div className="counter">3500</div>
									<div className="stat-info-w3ls">
										<h4>Clients</h4>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-2">
								<div className="ser-icone clr-green">
									<span className="fa fa-coffee font" aria-hidden="true"></span>
									<div className="counter">650</div>
									<div className="stat-info-w3ls">
										<h4>Coffee</h4>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-3">
								<div className="ser-icone clr-green">
									<span className="fa fa-trophy font" aria-hidden="true"></span>

									<div className="counter">1021</div>
									<div className="stat-info-w3ls">
										<h4>Awards</h4>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-4">
								<div className="ser-icone"> <span className="fa fa-lightbulb-o font" aria-hidden="true"></span>

									<div className="counter">1010</div>
									<div className="stat-info-w3ls">
										<h4>Ideas</h4>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
							<div className="w3l_about_bottom_grid_right bar-grids">
								<h6>Html<span> 100% </span></h6>
								<div className="progress">
									<div className="progress-bar progress-bar-striped active" style="width: 100%">
									</div>
								</div>
								<div className="mid-bar">
									<h6>Css<span> 85% </span></h6>
									<div className="progress">
										<div className="progress-bar progress-bar-striped active" style="width: 85%">
										</div>
									</div>
								</div>
								<h6>Java<span>67% </span></h6>
								<div className="progress">
									<div className="progress-bar progress-bar-striped active" style="width: 67%">
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-7 my-ser-left">
							<div className="white-shadow">
								<div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
									<h6>1</h6>
								</div>
								<div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
									<h4>Development</h4>
									<p>Lorem ipsum dolor sitamet,consectetuer
										adipiscing elit.Aenean commodo ligula eget</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="white-shadow">
								<div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
									<h6>2</h6>
								</div>
								<div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
									<h4>Typography</h4>
									<p>Lorem ipsum dolor sitamet,consectetuer
										adipiscing elit.Aenean commodo ligula eget</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="white-shadow">
								<div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
									<h6>3</h6>
								</div>
								<div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
									<h4>Graphic Design</h4>
									<p>Lorem ipsum dolor sitamet,consectetuer
										adipiscing elit.Aenean commodo ligula eget</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="white-shadow">
								<div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
									<h6>4</h6>
								</div>
								<div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
									<h4>Adobe Photoshop</h4>
									<p>Lorem ipsum dolor sitamet,consectetuer
										adipiscing elit.Aenean commodo ligula eget</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div> */}
			<div className="experience" id="experience">
				<div className="container">
					<div className="education">
						<div className="col-md-5 education-info">
							<h4>education</h4>
						</div>
						<div className="col-md-7 education-matter">
							<div className="edu-right ">
								<h6>2011-2014</h6>
								<h5>Bachelor Degree Of Education</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
							<div className="edu-right back-shadow clr-green">
								<h6>2011-2014</h6>
								<h5>Bachelor Degree Of Education</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>

							<div className="edu-right ">
								<h6>2011-2014</h6>
								<h5>Bachelor Degree Of Education</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
							<div className="edu-right back-shadow clr-green">
								<h6>2011-2014</h6>
								<h5>Bachelor Degree Of Education</h5>
								<p>Lorem ipsum dolor sit amet,</p>

							</div>

						</div>
						<div className="clearfix"></div>
					</div>
					<div className="experience-info">
						<div className="col-md-7 exp-matter">
							<div className="exp-left">
								<h6>2012-2014</h6>
								<h5>WebDesigner – Mutation Media</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
							<div className="exp-left back-shadow clr-green">
								<h6>2011-2012</h6>
								<h5>WebDesigner – Mutation Media</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>

							<div className="exp-left">
								<h6>2009-2011</h6>
								<h5>WebDesigner – Mutation Media</h5>
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
							<div className="exp-left back-shadow clr-green">
								<h6>2008-2009</h6>
								<h5>WebDesigner – Mutation Media</h5>
								<p>Lorem ipsum dolor sit amet,</p>

							</div>
						</div>
						<div className="col-md-5 exp-info-right">
							<h4>experience</h4>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
			<div id="gallery" className="gallery">
				<div className="container">
					<h3 className="title clr">Gallery</h3>
					<div className="gallery-info">
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
							<a href="images/g1.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g1.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
							<a href="images/g2.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g2.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
							<a href="images/g3.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g3.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
							<a href="images/g4.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g4.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids grid-mdl">
							<a href="images/g5.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g5.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g6.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g6.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g7.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g7.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g8.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g8.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g9.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g9.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g12.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g12.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g10.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g10.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
							<a href="images/g11.jpg" className="gallery-box" data-lightbox="example-set" data-title="">
								<img src="images/g11.jpg" alt="" className="img-responsive zoom-img" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="contact" id="contact">
				<div className="container">
					<h3 className="title">Contact</h3>
					<div className="contact-us">
						<form action="#" method="post">
							<div className="col-md-6 col-sm-6 col-xs-6 styled-input">
								<input type="text" name="Name" placeholder="Name" required=""/>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 styled-input">
								<input type="text" name="Last Name" placeholder="Last Name" required="" />
							</div>

							<div className="col-md-6 col-sm-6 col-xs-6 styled-input">
								<input type="email" name="Email" placeholder="Email" required="" />

							</div>

							<div className="col-md-6 col-sm-6 col-xs-6 styled-input">

								<input type="text" name="phone" placeholder="phone" required="" />

							</div>
							<div className="clearfix"> </div>
							<div className="styled-input">

								<textarea name="Message" placeholder="Message" required=""></textarea>
							</div>
							<div>
								<div className="click">
									<input type="submit" value="SEND" />
								</div>
							</div>
						</form>
					</div>
					<div className="clearfix"> </div>
					<div className=" col-md-8 col-sm-8 col-xs-7 contact-map">
						<div className="map-grid">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948805392833!2d-73.99619098458929!3d40.71914347933105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1479793484055"></iframe>

						</div>
					</div>

					<div className=" col-md-4 col-sm-4 col-xs-5 contact-icons">
						<div className="footer_grid_left">
							<h5>Address</h5>
							<p>756 st hill,south pole,<span> New York,10002,
								USA</span></p>
						</div>
						<div className="footer_grid_left">
							<h5> Contact</h5>
							<p>+(000) 123 4565 32 <span>+(010) 123 4565 35</span></p>
						</div>
						<div className="footer_grid_left">
							<h5>Email</h5>
							<p><a href="mailto:info@example.com">mail@example1.com</a>
								<span><a href="mailto:info@example.com">mail@example2.com</a></span></p>
						</div>

					</div>
					<div className="clearfix"> </div>




				</div>
			</div>

			<footer>
				<div className="social-icons">

					<ul>
						<li><a href="#"><span className="fa fa-facebook"></span></a></li>
						<li><a href="#"><span className="fa fa-twitter"></span></a></li>
						<li><a href="#"><span className="fa fa-rss"></span></a></li>
						<li><a href="#"><span className="fa fa-vk"></span></a></li>
					</ul>
				</div>

				<p>© 2018 Intro. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank"> W3layouts </a></p>
			</footer>
		</>
	);
}

export default App;
