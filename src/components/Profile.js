import React from "react";
import { Grid, Row, Col, FlexboxGrid, Icon } from "rsuite";

const PagePreview = ({ formdata }) => {
	return (
		<div>
			<div className="page-preview">
				<Grid className="profile-container" fluid>
					<Row>
						<Col xs={24} className="col-1">
							<div className="cover">
								<img
									src={URL.createObjectURL(formdata.banner_image)}
									alt="banner"
								/>
							</div>
							<div className="actions">
								<span className="page-action">{formdata.action_btn}</span>
								<div>
									<span className="like-action">Like</span>
									<span className="follow-action">Follow</span>
								</div>
							</div>
						</Col>
						<Col xs={24} className="col-2">
							<FlexboxGrid justify="space-between">
								<FlexboxGrid.Item>
									<FlexboxGrid>
										<FlexboxGrid.Item sm={24} md={6} className="img-wrapper">
											<img
												src={URL.createObjectURL(formdata.profile_image)}
												alt="profile"
											/>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item sm={24} md={18} style={{ flex: 1 }}>
											<FlexboxGrid
												className="user-info"
												justify="space-between"
												align="middle"
											>
												<FlexboxGrid.Item>
													<h5>{formdata.username}</h5>
													<p>@{formdata.username}</p>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item>
									<FlexboxGrid>
										<FlexboxGrid.Item>
											<div className="likes-count">1150</div>
											Likes
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<div className="likes-count">839</div>
											Follower
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
							</FlexboxGrid>
						</Col>
						<Col xs={24} className="col-3">
							<span>Post</span>
							<span>About</span>
							<span>Photos</span>
							<span>Reviews</span>
							<span>
								More <Icon icon="chevron-down" className="icon" />
							</span>
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
	);
};

export default PagePreview;
