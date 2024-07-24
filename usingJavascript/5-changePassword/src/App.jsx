import { useState } from "react"

function App() {

	const [data, setData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: ''
	})
	const handleSubmit = async () => {
		console.log(value);
		await fetch("https://refactor-event-management.onrender.com/api/changePassword", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		}).then(response => console.log(response.json()))
			.then(resp => {
				if (resp.status == "success") {
					aleart("success")
				} else if (resp.status == "error") {
					alert('error')
				}
			})
	}

	return (
		<>
			<div className="wrapper">
				<div className="authentication-reset-password d-flex align-items-center justify-content-center">
					<div className="row">
						<div className="col-12 col-lg-10 mx-auto">
							<div className="card">
								<div className="row g-0">
									<div className="col-lg-5 border-end">
										<div className="card-body">
											<div className="p-5">
												<div className="text-start">
													<img src="assets/images/logo-img.png" width="180" alt="" />
												</div>
												<h4 className="mt-5 font-weight-bold">Genrate New Password</h4>
												<p className="text-muted">We received your reset password request. Please enter your new password!</p>
												<form onSubmit={handleSubmit}>
													<div className="mb-3 mt-5">
														{/* <label className="form-label">Current Password</label> */}
														<input type="text" className="form-control" placeholder="Current password" id="currentPassword" onChange={(e) => setData(e.target.value )} />
													</div>
													<div className="mb-3 mt-5">
														{/* <label className="form-label">New Password</label> */}
														<input type="text" className="form-control" placeholder="Enter new password" id="newPassword" onChange={(e) => setData(e.target.value )}  />
													</div>
													<div className="mb-3">
														{/* <label className="form-label">Confirm Password</label> */}
														<input type="text" className="form-control" placeholder="Confirm password" id="confirmPassword" onChange={(e) => setData(e.target.value )}  />
													</div>
													<div className="d-grid gap-2">
														<button type="button" className="btn btn-primary">Change Password</button><i className='bx bx-arrow-back mr-1'></i>Back to Login
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<img src="assets/images/login-images/forgot-password-frent-img.jpg" className="card-img login-img h-100" alt="..." />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
