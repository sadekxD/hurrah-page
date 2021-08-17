import React, { useEffect } from "react";
import { Form, FormGroup, Uploader, Icon, ControlLabel } from "rsuite";

const profileStyles = {
	width: 150,
	height: 150,
};

const bannerStyles = {
	width: "100%",
	height: 200,
};

const ImageUploader = ({ formdata, setFormdata }) => {
	return (
		<Form fluid className="uploader">
			<FormGroup>
				<ControlLabel>
					Profile Piture{" "}
					<span className="optional">(Upload Profile Picture)</span>
				</ControlLabel>
				<Uploader
					fileListVisible={true}
					listType="text"
					autoUpload={false}
					disabled={formdata.profile_image}
					onChange={(file) => {
						console.log(file);
						if (file.length) {
							setFormdata({ ...formdata, profile_image: file[0].blobFile });
						} else {
							setFormdata({ ...formdata, profile_image: "" });
						}
					}}
				>
					<button style={profileStyles}>
						{formdata.profile_image ? (
							<img
								src={URL.createObjectURL(formdata.profile_image)}
								width="100%"
								height="100%"
								style={{ objectFit: "cover" }}
							/>
						) : (
							<Icon icon="avatar" size="5x" />
						)}
					</button>
				</Uploader>
			</FormGroup>
			<FormGroup>
				<ControlLabel>
					Banner <span className="optional">(Upload Banner)</span>
				</ControlLabel>
				<Uploader
					fileListVisible={true}
					listType="text"
					autoUpload={false}
					disabled={formdata.banner_image}
					onChange={(file) => {
						if (file.length) {
							setFormdata({ ...formdata, banner_image: file[0].blobFile });
						} else {
							setFormdata({ ...formdata, banner_image: "" });
						}
					}}
				>
					<button style={bannerStyles}>
						{formdata.banner_image ? (
							<img
								src={URL.createObjectURL(formdata.banner_image)}
								width="100%"
								height="100%"
								style={{ objectFit: "cover" }}
							/>
						) : (
							<Icon icon="image" size="5x" />
						)}
					</button>
				</Uploader>
			</FormGroup>
		</Form>
	);
};

export default ImageUploader;
