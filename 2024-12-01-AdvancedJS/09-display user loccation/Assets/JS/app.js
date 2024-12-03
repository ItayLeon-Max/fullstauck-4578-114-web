const showUserLocation = () => {
    const location =  navigator.geolocation.getCurrentPosition(myLocation => {
        alert(`Latitude: ${myLocation.coords.latitude}, Longitude: ${myLocation.coords.longitude}`);
});
    console.log(location);
};

showUserLocation();