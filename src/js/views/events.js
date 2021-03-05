import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Events = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<div className="container d-flex justify-content-center">
				<ul className="list-group">
					{store.events.reverse().map((item, index) => {
						let gr = parseInt(params.theid);
						if (item.ID === gr) {
							return (
								<div className="container-fluid" key={index}>
									<div className="container-fluid bg-dark text-white">
										<div className="row container-fluid">
											<p className="col-md-9">
												<h6>
													<Moment format="MMMM Do YYYY">{item.meta_keys.day}</Moment>
												</h6>
												<h3>{item.post_title}</h3>
												<Link to={"/groups/" + item.meta_keys._groupId}>
													<span>Meetup {item.meta_keys._groupId}</span>
												</Link>
											</p>
											<p className="col-md-3">
												Using: ReactJs, Bootstrap, @Fortaweasome, Moment, React-router
											</p>
										</div>
									</div>
									<div className="row container">
										<div className="col-md-9">
											<h1>
												<div className="centerevents d-flex justify-content-center">
													800 X 500
												</div>
											</h1>
											<p>Details</p>
											<p>{item.post_Description}</p>
										</div>
										<div className="col-md-3">Column 2</div>
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
