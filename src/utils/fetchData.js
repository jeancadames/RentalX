const vehicleOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const resp = await fetch(url, options);
    const data = await resp.json();

    console.log(data);
}
