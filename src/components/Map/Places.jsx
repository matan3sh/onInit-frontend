import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function Places({ onSetLocation }) {
  const [address, setAddress] = React.useState('');

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    onSetLocation({ address: value, lat: latLng.lat, lng: latLng.lng });
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <input
              {...getInputProps({ placeholder: 'Enter Location' })}
              type='text'
            />
            <div>
              {loading ? <div>...Loading</div> : ''}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#dadada' : '#fff',
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
}

export default Places;
