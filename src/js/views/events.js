import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Events = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let cityGroups = "";
	let NameGroups = "";
	let stateGroups = "";
	return (
		<div className="">
			<div className="container-fluid">
				<ul className="list-group">
					{store.events.map((item, index) => {
						let gr = parseInt(params.theid);

						for (let i in store.groups) {
							if (store.groups[i].ID === item.meta_keys._groupId) {
								cityGroups = store.groups[i].city;
								stateGroups = store.groups[i].state;
								NameGroups = store.groups[i].post_content;
							}
						}

						if (item.ID === gr) {
							return (
								<div key={index}>
									<div className=" bg-dark text-white">
										<div className="row bg-dark text-white">
											<p className="col-md-9">
												<Moment style={{ fontSize: "10px" }} format="MMMM Do YYYY">
													{item.meta_keys.day}
												</Moment>

												<p style={{ fontSize: "40px" }}>{item.post_title}</p>
												<Link to={"/groups/" + item.meta_keys._groupId}>
													<p style={{ fontSize: "14px" }}>{NameGroups}</p>
												</Link>
											</p>
											<div className=" col-md-3">
												<div className="mr-2 centerdiv">
													<p className="mr-3">
														<p>People going</p>

														<center>
															<button
																type="button"
																className="btn btn-primary d-flex justify-content-center">
																Login to RSVP
															</button>
														</center>
														<p>
															<i
																className="fab fa-twitter mt-2 mr-4"
																style={{ fontSize: "40px" }}
															/>
															<i
																className="fab fa-facebook-square mt-2"
																style={{ fontSize: "40px" }}
															/>
														</p>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row container">
											<div className="col-md-9 mt-4">
												<h1>
													<div className="centerevents d-flex justify-content-center">
														800 X 500
													</div>
												</h1>
												<p>Details</p>
												<p>{item.post_Description}</p>
											</div>
											<p className="col-md-3 mt-4">
												<p className="center3">
													<p>
														<i
															className="fas fa-clock mt-2 mr-2"
															style={{ fontSize: "40px" }}
														/>{" "}
														<Moment format="MMMM Do YYYY">{item.meta_keys.day}</Moment>
													</p>
													<p className="d-flex justify-content-end mr-5">
														{item.meta_keys.time}
													</p>
													<p className="d-flex justify-content-end mr-5">
														{item.meta_keys.repetition}
													</p>
												</p>
											</p>
										</div>
									</div>
								</div>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

Events.propTypes = {
	match: PropTypes.object
};
