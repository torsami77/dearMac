const signUpForm = `
			<input type="text" placeholder="Enter your Email" class="form-text-field"/>
			<input type="text" placeholder="Mobile Number" class="form-text-field" /><br/>
			<input type="text" placeholder="First Name" class="form-text-field"/>
			<input type="text" placeholder="Second Name" class="form-text-field" /><br/>
			<select class="form-text-field">
				<option value="" selected disabled>Select Gender</option>
				<option value="female">female</option>
				<option value="male">male</option>
			</select>
			<select class="form-text-field">
				<option value="" selected disabled>Marital Status</option>
				<option value="single">single</option>
				<option value="married">married</option>
				<option value="divorced">divorced</option>
				<option value="widowed">widowed</option>
			</select><br/>
			<input type="text" placeholder="Date of Birth" class="form-text-field" onfocus="(this.type='date')" onfocusout="(this.type='text')"/>
			<select class="form-text-field">
				<option value="" selected disabled>Career Industry</option>
				<option value="aviation">Aviation</option>
				<option value="arts">Arts</option>
				<option value="business">Business</option>
				<option value="law enforcement">Law Enforcement</option>
				<option value="media">Media</option>
				<option value="medical">Medical</option>
				<option value="service">Service</option>
				<option value="teaching">Teaching</option>
				<option value="technology">Technology</option>
				<option value="others">Others</option>
			</select><br/>
			<input type="text" placeholder="Name of Employer" class="form-text-field"/>
			<input type="text" placeholder="Job Description" class="form-text-field"/><br/>
			<select class="form-text-field">
				<option value="" selected disabled>Highest Academic Qualification </option>
				<option value="high school">High School</option>
				<option value="diploma">Diploma</option>
				<option value="HND/B.A./B.Sc/B.Ed">HND/B.A./B.Sc/B.Ed</option>
				<option value="masters">M.A./P.G.D.</option>
				<option value="PHD">P.H.D.</option>
				<option value="others">Others</option>
			</select>
			<input type="text" placeholder="Name of Institution" class="form-text-field"/><br/>
			<button>Sign up</button><br/>
			<span>
			Already have an account? <a href="#" onclick="memberArea('signIn');">Sign in</a></br>
			<a href="#" onclick="memberArea('forgotPassword');">Forgot your password?</a></br>
			----------   or   ----------
			</spsn><br/>
			<div  class="platter">
				Sign in with 
				<a class="fa fa-google google"></a> 
				<a class="fa fa-facebook facebook"></a> 
				<a class="fa fa-instagram instagram"></a>
			</div>
		`;

const signInForm = `
			<input type="text" placeholder="Enter Your Email" class="form-text-field"/><br/>
			<input type="text" placeholder="Enter Your Password" class="form-text-field" /><br/>
			<button>Sign In</button><br/>
			<span>
			Don't have an account? <a href="#" onclick="memberArea('signUp');">Sign up</a></br>
			<a href="#" onclick="memberArea('forgotPassword');">Forgot your password?</a></br>
			----------   or   ----------
			</spsn><br/>
			<a class="customised-button google"><i class="fa fa-google"></i> Sign In with Google</a><br/>
			<a class="customised-button facebook"><i class="fa fa-facebook"></i> Sign In with Facebook</a><br/>
			<a class="customised-button instagram"><i class="fa fa-instagram"></i> Sign In with Instagram</a><br/>
		`;

const forgotPasswordForm = `
			<input type="text" placeholder="Enter Your Email" class="form-text-field"/><br/>
			<button>Email Me Link</button><br/>
			<span>
			Don't have an account? <a href="#" onclick="memberArea('signUp');">Sign Up</a></br>
			Already have an account? <a href="#" onclick="memberArea('signIn');">Sign In</a></br>
			----------   or   ----------
			</spsn><br/>
			<a class="customised-button google"><i class="fa fa-google"></i> Sign In with Google</a><br/>
			<a class="customised-button facebook"><i class="fa fa-facebook"></i> Sign In with Facebook</a><br/>
			<a class="customised-button instagram"><i class="fa fa-instagram"></i> Sign In with Instagram</a><br/>
`;