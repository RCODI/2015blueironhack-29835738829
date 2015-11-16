var map, marker, infowindow;

function initMap() {	map = new google.maps.Map(document.getElementById('map'), {
						center: {lat: 40.4219, lng: -86.9125},
								zoom: 16
									});

										//you may also want to add a marker in the map, just do it!
											marker = new google.maps.Marker({
													position: {lat: 40.4219, lng: -86.9125},
															map: map,
																	title: 'Hello World!'
																		});

																			//it would be cool if you add reactions here. Let's add an info window for click
																				infowindow = new google.maps.InfoWindow({
																					                    content: ""
																					                    	 });
																					                    	 	google.maps.event.addListener(marker, 'click', function() {
																					                    	 		    infowindow.setContent("Hello world again!");
																					                    	 		    	                        infowindow.open(map, marker);
																					                    	 		    	                        	 });

																					                    	 		    	                        	 }















