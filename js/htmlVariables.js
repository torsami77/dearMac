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

const passwordChangeRequest = `
<h1>Email Me Password Reset Link</h1></br>
<div>
	<input type="text" placeholder="Confirm Your Email" class="form-text-field"/><br/>
	<button>Email Me Link</button><br/>
	<span>
   Use the link that would be sent to your email to change your password
	</spsn><br/>
</div>
`;

const showProfile = `
	<h3>Nelle Townsend.</h3><br/>
	<span>
	  <button class="circled-button" onclick="changeImage('minus')"> << </button>
	  <span id="showProfileImage">	
		  <img src="./img/banner_.jpg" class="show-profile-pic"/>
	  </span>
	  <button class="circled-button" onclick="changeImage('plus')"> >> </button>
	</span>
	</br><br/>
	<span>
		<p> -- Went to ABU Zaria (HND/B.A./B.Sc/B.Ed)</p>
		<p>-- Works at Google Inc (Technology)</p>
		<p>-- As DevOPs Software Engineer</p>
		<p>-- Her Marital Status is Single</p>
	</span>
	
	<span>
	<input type="text" placeholder="Enter Short message" class="form-text-field"/>
	<button>Send Connect Request</button><br/>
`;

const showContact = `
	<h3>Nelle Townsend.</h3><br/>
	<span>
	  <button class="circled-button" onclick="changeImage('minus')"> << </button>
	  <span id="showProfileImage">	
		  <img src="./img/banner_.jpg" class="show-profile-pic"/>
	  </span>
	  <button class="circled-button" onclick="changeImage('plus')"> >> </button>
	</span>
	<br/><br/>
	<span>
		<p> -- Went to ABU Zaria (HND/B.A./B.Sc/B.Ed)</p>
		<p>-- Works at Google Inc (Technology)</p>
		<p>-- As DevOPs Software Engineer</p>
		<p>-- Her Marital Status is Single</p>
		<p>-- Mobile Number -08037367767 </p>
		<p>-- Email- info@dearmac.com </p>
	</span>
`;

const viewAlbum = `
<h3>Profile Pics</h3></br>
	<span>
	  <button class="circled-button" > << </button>
	  <span id="showProfileImage">	
		  <img src="./img/testi.png" class="show-profile-pic"/>
	  </span>
	  <button class="circled-button"> >> </button>
	</span>
	</br><br/>
	<div>
	  <span>
		<button class="standing-button"><</button>
	  </span>
	  <span>
		<img src="./img/testi.png" class="thumpnail"/>
		<img src="./img/testi.png" class="thumpnail"/>
		<img src="./img/testi.png" class="thumpnail"/>
		<img src="./img/testi.png" class="thumpnail"/>
	  </span>
	  <span>
		<button class="standing-button">></button>
	  </span>
	</div>

	</br>
	<h5>Add Image</h5>
	<span class="form-info-field">
		<input type="file" placeholder="Add an image" />
		<button>Upload Image</button>
	</span>
	</br>
`;

const persona = `
	<p onclick="changeDashBoard('showConnections')" class="user-side-bar-item"><a href="#"><i class="fa fa-chain right-space"></i> My Connections</a></p>
	<p onclick="changeDashBoard('showPictureAlbums')" class="user-side-bar-item"><a href="#"><i class="fa fa-camera right-space"></i> My Pictures</a></p>
	<p onclick="changeDashBoard('showBioData')" class="user-side-bar-item"><a href="#"><i class="fa fa-pencil right-space"></i> Modify My Bio-data</a></p>
	<p onclick="changeDashBoard('passwordRequest')" class="user-side-bar-item"><a href="#"><i class="fa fa-lock right-space"></i> Change My Password</a></p>
`;

const narrowSearch = `
<form class="centered-align">
<h3>Narrow Search</h3></br>
<p>Narrow search to 
<select class="form-text-field resized-text-field">
	<option>male</option>
	<option>female</option>
</select> ,
</p>
<p> between the age of 
<select class="form-text-field resized-text-field">
	<option>18</option><option>19</option>
	<option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>
	<option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option>
	<option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option>
	<option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option>
	<option>60</option><option>61</option><option>62</option><option>63</option><option>64</option><option>65</option><option>66</option><option>67</option><option>68</option><option>69</option>
	<option>70</option><option>71</option><option>72</option><option>73</option><option>74</option><option>75</option><option>76</option><option>77</option><option>78</option><option>79</option>
	<option>80</option><option>81</option><option>82</option><option>83</option><option>84</option><option>85</option><option>86</option><option>87</option><option>88</option><option>89</option>
	<option>90</option><option>91</option><option>92</option><option>93</option><option>94</option><option>95</option><option>96</option><option>97</option><option>98</option><option>99</option>
</select> 
to 
<select class="form-text-field resized-text-field">
	<option>18</option><option>19</option>
	<option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>
	<option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option>
	<option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option>
	<option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option>
	<option>60</option><option>61</option><option>62</option><option>63</option><option>64</option><option>65</option><option>66</option><option>67</option><option>68</option><option>69</option>
	<option>70</option><option>71</option><option>72</option><option>73</option><option>74</option><option>75</option><option>76</option><option>77</option><option>78</option><option>79</option>
	<option>80</option><option>81</option><option>82</option><option>83</option><option>84</option><option>85</option><option>86</option><option>87</option><option>88</option><option>89</option>
	<option>90</option><option>91</option><option>92</option><option>93</option><option>94</option><option>95</option><option>96</option><option>97</option><option>98</option><option selected>99</option>
</select> ,
</p>
<p>from 
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
</select>
</p>
<p>
<button>Search</button>
</p>
</form>
`;

const searchResult = `
<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/07.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/user-pic.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/author_.png'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/user-pic.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/author_.png'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/07.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/user-pic.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showProfile')" class="cart-image cart" href="#" style="background-image: url('img/user-pic.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>
<button class="circled-button" onclick="changeImage('minus')"> << </button>
<button class="circled-button" onclick="changeImage('plus')"> >> </button>
`;

const bioDataForm = `
<div class="left-align">
<h1>Modify My Bio-data</h1>
		Update Your Mobile Number: <input type="text" placeholder="Mobile Number" class="form-text-field" value="08037367767"/><br/>
		Update Your Marital Status: 
		<select class="form-text-field">
			<option value="" selected disabled>Marital Status</option>
			<option value="single" selected>single</option>
			<option value="married">married</option>
			<option value="divorced">divorced</option>
			<option value="widowed">widowed</option>
		</select><br/>
		Update Your Industry:
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
			<option value="technology" selected>Technology</option>
			<option value="others">Others</option>
		</select><br/>
		Update Your Employer: <input type="text" placeholder="Name of Employer" class="form-text-field" value="Google Inc"/><br/>
		Update Your Job Description: <input type="text" placeholder="Job Description" class="form-text-field" value="Product Marketer"/><br/>
		Update Academic Qualification: <select class="form-text-field">
			<option value="" selected disabled>Highest Academic Qualification </option>
			<option value="high school">High School</option>
			<option value="diploma">Diploma</option>
			<option value="HND/B.A./B.Sc/B.Ed" selected>HND/B.A./B.Sc/B.Ed</option>
			<option value="masters">M.A./P.G.D.</option>
			<option value="PHD">P.H.D.</option>
			<option value="others">Others</option>
		</select></br>
		Update Last Institution Attended: <input type="text" placeholder="Name of Institution" class="form-text-field" value="ABU Zaria"/><br/>
		<button>Update Bio-Data</button>
	</div>
<br/>
</div>
`;

const myConnections = `
<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>

<a onclick="memberArea('showContact')" class="cart-image cart" href="#" style="background-image: url('img/banner_.jpg'); background-size: cover">
<div class="cart-caption">
	<h4>Nelle Townsend.</h4>
	<p>19 Years,</p>
</div>
</a>
<button class="circled-button" onclick="changeImage('minus')"> << </button>
<button class="circled-button" onclick="changeImage('plus')"> >> </button>
`;