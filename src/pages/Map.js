import React from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";

const Map = () => {
	const [address, setAddress] = React.useState("");

	const handleChange = (value) => {
		setAddress(value);
	};

	const handleSelect = (value) => {
		setAddress(value);
	};

	return (
		<div>
			<PlacesAutocomplete
				value={address}
				onChange={handleChange}
				onSelect={handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: "Enter Address...",
							})}
						/>
						<div>
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion) => {
								const style = suggestion.active
									? { backgroundColor: "#a83232", cursor: "pointer" }
									: { backgroundColor: "#ffffff", cursor: "pointer" };

								return (
									<div {...getSuggestionItemProps(suggestion, { style })}>
										{suggestion.description}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</div>
	);
};

export default Map;
