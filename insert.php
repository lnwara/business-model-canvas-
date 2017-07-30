
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GoiSMe - Welcome</title>

        <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/form-elements.css">
        <link rel="stylesheet" href="assets/css/style.css">


        <!-- Favicon and touch icons -->


    </head>
  <body>
    <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
			<div class="container">
				<div class="navbar-header">
            <img src="assets/img/ismelogo.png" alt="some_text" style="width:75px;height:75px;">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>


					</button>

				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="top-navbar-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<span class="li-text">

							</span>
							<a href="#"><strong>follow</strong></a>
							<span class="li-text">
								on Twitter
							</span>
							<span class="li-social">

								<a href="https://twitter.com/goisme_sa" target="_blank"><i class="fa fa-twitter"></i></a>

							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    <div class="insertcode">
    <?php



    //echo 11111;


    $servername = "localhost";
    $username = "root";
    $password = "root";
    $f1=$_POST['f1'];
    $f2=$_POST['f2'];
    $f3=$_POST['f3'];
    $f4=$_POST['f4'];
    $f5=$_POST['f5'];
    $f6=$_POST['f6'];
    $f7=$_POST['f7'];
    $f8=$_POST['f8'];
    $f9=$_POST['f9'];
    $name=$_POST['name'];
    $email=$_POST['email'];

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
    $sql = "INSERT INTO business_model.canvas ( name, email,customer_segment,value_propostion,chanels,customer_relashionship,revenue_stream,key_resources,key_activites,key_partner,cost_structure)
    VALUES ('$name', '$email', '$f1','$f2','$f3','$f4','$f5','$f6','$f7','$f8','$f9')";


    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();

    ?>
  </div>

    <script src="assets/js/jquery-1.11.1.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.backstretch.min.js"></script>
    <script src="assets/js/retina-1.1.0.min.js"></script>
    <script src="assets/js/scripts.js"></script>

    <!--[if lt IE 10]>
        <script src="assets/js/placeholder.js"></script>
    <![endif]-->

</body>

</html>
