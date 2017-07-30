<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GoiSMe</title>

        <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/form-elements.css">
        <link rel="stylesheet" href="assets/css/style.css">


        <!-- Favicon and touch icons -->


    </head>

    <body>

		<!-- Top menu -->
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

        <!-- Top content -->
        <div class="top-content">
            <div class="container">



                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box">
                    	<form role="form" action="view.php" method="post" class="f1">


                    		<div class="f1-steps">
                    			<div class="f1-progress">
                    			    <div class="f1-progress-line" data-now-value="30" data-number-of-steps="9" style="width: 16.66%;"></div>
                    			</div>
                    			<div class="f1-step active">
                    				<div class="f1-step-icon"><i class="fa fa-smile-o"></i></div>
                    				<p>Customer Segments</p>
                    			</div>
                    			<div class="f1-step">
                    				<div class="f1-step-icon"><i class="fa fa-gift"></i></div>
                    				<p>Value Propositions</p>
                    			</div>
                    		    <div class="f1-step">
                    				<div class="f1-step-icon"><i class="fa fa-truck"></i></div>
                    				<p>Chanels</p>
                    			</div>
                          <div class="f1-step">
                          <div class="f1-step-icon"><i class="fa fa-heart"></i></div>
                          <p>Customer relashionships</p>
                        </div>
                        <div class="f1-step">
                        <div class="f1-step-icon"><i class="fa fa-usd"></i></div>
                        <p>Revenue Streams</p>
                      </div>
                      <div class="f1-step">
                      <div class="f1-step-icon"><i class="fa fa-building"></i></div>
                      <p>Key Resources</p>
                    </div>
                    <div class="f1-step">
                    <div class="f1-step-icon"><i class="fa fa-check-circle"></i></div>
                    <p>Key Activites</p>
                  </div>
                  <div class="f1-step">
                  <div class="f1-step-icon"><i class="fa fa-link"></i></div>
                  <p>Key Partners</p>
                </div>
                <div class="f1-step">
                <div class="f1-step-icon"><i class="fa fa-tags"></i></div>
                <p>cost structure</p>
              </div>

                    		</div>

                    		<fieldset>
                    		    <h4>Customer segment are the community of customers or businesses that you are aiming to sell your product or services to. </h4>

                                <div class="form-group">
                                  <!--  <label class="sr-only" for="f1-about-yourself"></label>-->
                                    <textarea   name="f1" autofocus="autofocus" placeholder="For whom are we creating value , Who are our most important customers ?"
                                    class="f1-about-yourself form-control" id="f1-about-yourself">
                                </textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-next">Next</button>

                                </div>
                                <div id="main">
                                <input type="button" id="btAdd" value="Add Element" class="bt" />
                                <input type="button" id="btRemove" value="Remove Element" class="bt" />

                                 </div>
                            </fieldset>

                            <fieldset>
                                <h4>A value propostion makes a case for why a customer should pick one product over another, citing the unique value the product provides over its contenders.</h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-email">Value propostion</label>
                                    <textarea name="f2" placeholder="What value do we deliver to the customer , Which one of our customers problem are we going to solve ? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>

                                </div>
                                <div class="f1-buttons">

                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>

                            <fieldset>
                                <h4>The channel represent how an organaization will make its product or service available to the end customer for consumption or use. </br> A channel can be direct or it can contain inermidiaries  </h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f3" placeholder="Through witch channel do our customer segment want to be reached ? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h4> the way in which your business will communicate and deal with existing cusomers either in direct or indirect way</h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f4" placeholder="What type of relationship does each of our customer segment expect us to establish and mentain wuth them? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h4> The methods by which money come in </h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f5" placeholder="For whhat value are our customers really willing to pay , For what do they currently paying ? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h4> Key resources block is describing the most important assets needed to make business model work.</br>key resources can be physical,intellectual,human or financial</h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f6" placeholder="What key resources do our value propositions require ? , our disterbuotion channels "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h4>Key activities are the most important tasks a company must carry out in order to fullfill its business purpose  </h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f7" placeholder="What key activities do our value propsitions requires ? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h4> key partners are the relationships that you have with other businesses,governmental or non-consumer entities that help your business model work</h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f8" placeholder="Who are our key partners , Which key resources are we acquiring from partners ? "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="submit" class="btn btn-next">Next</button>
                                </div>
                            </fieldset>


                            <fieldset>
                                <h4> Cost structure have multiple characteristics:fixed and variable costs , economics of scale and economics of scope</h4>
                                <div class="form-group">
                                    <label class="sr-only" for="f1-facebook">Facebook</label>
                                    <textarea name="f9" placeholder="What are the most important costs inherit in our business model "
                                    	                 class="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                                </div>

                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>


                                    <button type="submit" class="btn btn-submit">View</button>


                                </div>
                            </fieldset>



                    	</form>
                    </div>
                </div>

            </div>
        </div>


        <!-- Javascript -->
        <script src="assets/js/jquery-1.11.1.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/retina-1.1.0.min.js"></script>
        <script src="assets/js/scripts.js"></script>
        <script src="assets/js/plain.js"></script>


        <!--[if lt IE 10]>
            <script src="assets/js/placeholder.js"></script>
        <![endif]-->

    </body>

</html>
