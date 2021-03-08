import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark text-white ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">4GeeksAcademy</span>
				</Link>
				<div className="ml-auto text-dark">
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
						Login
					</button>

					<div
						className="modal fade text-dark"
						id="exampleModal"
						role="dialog"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title  text-dark" id="exampleModalLabel">
										Login
									</h5>
								</div>
								<div className="modal-body text-dark">
									<div className="row">
										<div className="col-md-5">
											<input
												type="text"
												className="form-control"
												id="Username"
												placeholder="Username"
												value=""
												required
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-md-5">
											<input
												type="text"
												className="form-control"
												id="Password"
												placeholder="Password"
												value=""
												required
											/>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
