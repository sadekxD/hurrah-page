import React from "react";
import {
	Grid,
	Row,
	Col,
	Form,
	FormControl,
	ControlLabel,
	FormGroup,
	SelectPicker,
} from "rsuite";

const AdditionalDetailsForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			className="additional-detail-form"
			formValue={formdata}
			onChange={(formValue) => {
				setFormdata({ ...formdata, ...formValue });
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>Phone Number</ControlLabel>
							<FormControl name="phone_number" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl name="email" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Website</ControlLabel>
							<FormControl name="website" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Action Button<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="action_btn"
								accepter={SelectPicker}
								data={[
									{
										label: "dummy1",
										value: "dummy1",
										role: "Guest",
									},
									{
										label: "dummy2",
										value: "dummy2",
										role: "Guest",
									},
									{
										label: "dummy3",
										value: "dummy3",
										role: "Guest",
									},
								]}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col sm={24} style={{ paddingLeft: 0 }}>
						<Grid fluid>
							<Row>
								<Col xs={24} sm={12} style={{ paddingLeft: 0 }}>
									<Grid fluid>
										<Row>
											<Col xs={24} sm={24} style={style}>
												<FormGroup>
													<ControlLabel>Location</ControlLabel>
													<FormControl
														name="location"
														placeholder="eg. Hathazari, Chittagong"
													/>
												</FormGroup>
											</Col>
											<Col xs={24} sm={24} style={style}>
												<FormGroup>
													<ControlLabel>Zip Code</ControlLabel>
													<FormControl name="zip_code" placeholder="xxxx" />
												</FormGroup>
											</Col>
										</Row>
									</Grid>
								</Col>
							</Row>
						</Grid>
					</Col>
				</Row>
			</Grid>
		</Form>
	);
};

const style = {
	marginTop: 16,
};

export default AdditionalDetailsForm;
