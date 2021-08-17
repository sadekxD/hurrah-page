import React from "react";
import { useHistory } from "react-router";
import { Button, Icon, Modal } from "rsuite";

const SuccessModal = ({ show, setShow }) => {
	const history = useHistory();

	const close = () => {
		setShow(false);
		history.push("/");
	};

	return (
		<div className="modal-container">
			<Modal
				style={{ width: "95%", maxWidth: 500, margin: "0 auto", marginTop: 30 }}
				show={show}
				onHide={close}
			>
				<Modal.Body style={{ textAlign: "center" }}>
					<h2 style={{ marginBottom: 10 }}>Hoorrey!!!</h2>
					<p>You've Successfully Created Your Page</p>
					<Button
						onClick={close}
						size="lg"
						appearance="primary"
						style={{ marginTop: 10 }}
					>
						<Icon icon="back-arrow" style={{ marginRight: 10 }} />
						Marketplace
					</Button>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default SuccessModal;
