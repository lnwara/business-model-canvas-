<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>iEsme</title>

    <!-- CSS -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="assets/css/form-elements.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link  href="http://fonts.googleapis.com/css?
family=Reenie+Beanie:regular"
rel="stylesheet"
type="text/css">


    <!-- Favicon and touch icons -->


</head>

<body>


  <?php

for ($x=1;$x>=100;$x++){
  if(isset()){

  }

}


   ?>
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

              <a href="https://twitter.com/goiSMe-sa" target="_blank"><i class="fa fa-twitter"></i></a>

            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
      <h1><strong>The Business Model Canvas</strong></h1>
      <!-- Canvas -->
      <table id="bizcanvas" cellspacing="0" border="1">
        <!-- Upper part -->
        <tr >
          <td colspan="2" rowspan="2">


            <h4>Key Partners</h4>



            <div class="sticky"><b><p> <?php  echo $_POST['f8'];    ?></p></div></b>

          </td>
          <td colspan="2">
            <a href="#">
            <h4>Key Activities</h4>
            <p><?php  echo $_POST['f7'];    ?></p></a>
          </td>
          <td colspan="2" rowspan="2">
            <a href="#">
            <h4>Value Proposition</h4>
            <p><?php  echo $_POST['f2'];    ?></p></a>
          </td>
          <td colspan="2">
            <a href="#">
            <h4>Customer Relationship</h4>
            <p>   <?php  echo $_POST['f4'];    ?>   </p></a>
          </td>
          <td ccolspan="2" rowspan="2">
            <a href="#">
            <h4>Customer Segments</h4>
            <p><?php  echo $_POST['f1'];    ?></p></a>
          </td>
        </tr>

        <tr>
          <td colspan="2" >
            <a href="#">
            <h4>Key Resources</h4>
            <p><?php  echo $_POST['f6'];    ?></p></a>
          </td>
          <td colspan="2">
            <a href="#">
            <h4>Channels</h4>
            <p><?php  echo $_POST['f3'];    ?></p></a>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <a href="#">
            <h4>Cost Structure</h4>
            <p><?php  echo $_POST['f9'];    ?></p></a>
          </td>
          <td colspan="5">
            <a href="#">
            <h4>Revenue Streams</h4>
            <p><?php  echo $_POST['f5'];    ?></p></a>
          </td>
        </tr>
      </table>
      <!-- /Canvas -->
    </div>

<div class="btn-subm" >
  <form role="form" action="insert.php" method="post" class="f1">
 <input type="hidden" name="f1" value="<?php  echo $_POST['f1'];    ?>">
 <input type="hidden" name="f2" value="<?php  echo $_POST['f2'];    ?>">
 <input type="hidden" name="f3" value="<?php  echo $_POST['f3'];    ?>">
 <input type="hidden" name="f4" value="<?php  echo $_POST['f4'];    ?>">
 <input type="hidden" name="f5" value="<?php  echo $_POST['f5'];    ?>">
 <input type="hidden" name="f6" value="<?php  echo $_POST['f6'];    ?>">
 <input type="hidden" name="f7" value="<?php  echo $_POST['f7'];    ?>">
 <input type="hidden" name="f8" value="<?php  echo $_POST['f8'];    ?>">
 <input type="hidden" name="f9" value="<?php  echo $_POST['f9'];    ?>">
 <input type="hidden" name="name" value="<?php echo $_POST['name'];    ?>">
 <input type="hidden" name="email" value="<?php  echo $_POST['email'];    ?>">
 <div class="fields">
   <input class="name"type ="name" placeholder="YOUR NAME" name="name"></br>
   <input  class="email"type ="email" placeholder="YOUR EMAIL" name="email">
 </div>


  <button  class="bs"type="submit"> Submit</button>
</form>

</div>
  </div>







  <script src="assets/js/jquery-1.11.1.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/js/jquery.backstretch.min.js"></script>
  <script src="assets/js/retina-1.1.0.min.js"></script>
  <script src="assets/js/scripts.js"></script>

</body>
</html>
