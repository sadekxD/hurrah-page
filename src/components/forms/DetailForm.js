import React, { useState } from "react";
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

const DetailForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			className="detail-form"
			formValue={formdata}
			onChange={(formValue) => {
				setFormdata({ ...formdata, ...formValue });
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Page Name
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl name="page_name" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Page Username
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl name="username" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Page Category
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="category"
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

					<Col xs={24} sm={24} style={style}>
						<FormGroup>
							<ControlLabel>Page Description</ControlLabel>
							<FormControl
								rows={5}
								name="description"
								componentClass="textarea"
							/>
						</FormGroup>
					</Col>
				</Row>
			</Grid>
		</Form>
	);
};

const style = {
	marginTop: 16,
};

export default DetailForm;
