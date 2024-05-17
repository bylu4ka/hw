document.getElementById('find-ip-btn').addEventListener('click', async () => {
    try {
        // Отримуємо IP адресу клієнта
        const ipResponse = await fetch('https://api.ipify.org/?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        // Отримуємо інформацію про фізичну адресу за IP
        const locationResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
        const locationData = await locationResponse.json();

        // Виводимо інформацію на сторінку
        const infoDiv = document.getElementById('info');
        infoDiv.innerHTML = `
        <p><strong>Континент:</strong> ${locationData.continent}</p>
        <p><strong>Країна:</strong> ${locationData.country}</p>
        <p><strong>Регіон:</strong> ${locationData.regionName}</p>
        <p><strong>Місто:</strong> ${locationData.city}</p>
        <p><strong>Район:</strong> ${locationData.district}</p>
      `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});