"use strict";

(async () => {

    const getLocationPromise = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    document.getElementById('btn').addEventListener('click', async () => {
       try {
        const position = await getLocationPromise();
        console.log(position.coords);
       } catch (error) {
           console.warn(error);
       }
    });
})();