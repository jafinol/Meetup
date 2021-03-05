import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Groups = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="container-fluid bg-dark text-white">
				<div className="container">
					<div className="row">
						<p className="col-md-6 d-flex justify-content-center">
							<h1>
								<div className="center mt-3">600 X 350</div>
							</h1>
						</p>
						<p>
							<h3>Meetup {params.theid}</h3>
						</p>
					</div>
				</div>
			</div>

			<div className="container d-flex justify-content-center">
				<ul className="list-group">
					{store.events.reverse().map((item, index) => {
						let gr = parseInt(params.theid);
						if (item.meta_keys._groupId === gr) {
							return (
								<div
									className="card mt-2 d-flex justify-content-center "
									key={index}
									style={{ width: "400px" }}>
									<div className="card-header">
										<h5>
											<Moment format="MMMM Do YYYY">{item.meta_keys.day}</Moment>
										</h5>
									</div>
									<div className="card-body" />
									<div />
									<div className="row">
										<div className="col-md-4">
											<h5 className="card-title d-flex justify-content-center">
												{item.meta_keys.time}
											</h5>
										</div>
										<div className="col-md-8">
											<p className="card-text">
												<Link to={"/events/" + item.meta_keys._groupId}>
													<span>{item.post_title}</span>
												</Link>
											</p>
											<p className="card-text mb-2">
												<Link to={"/groups/" + item.meta_keys._groupId}>
													<span>Meetup {item.meta_keys._groupId}</span>
												</Link>
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

Groups.propTypes = {
	match: PropTypes.object
};
