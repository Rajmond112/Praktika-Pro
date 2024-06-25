console.log("Dashboard page loaded");
const apiURL = "http://localhost:5137/api/User/GetAllUsers";

    // Adatok betöltése az API-ról
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#userTable tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.dc_name}</td>
                    <td>${user.steam_name}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Hiba történt az adatok betöltésekor:', error));


