ffetch('http://localhost:8080/crud/consultas.php') // URL de tu script PHP
.then(response => response.json())
.then(data => {
    const tablaUsers = document.getElementById('tabla-users');
    if (data.error) {
        console.error("Error del servidor:", data.error);
        tablaUsers.innerHTML = "<tr><td colspan='4'>Error al cargar los datos</td></tr>";
        return;
    }
    if (!data || data.length === 0) {
        tablaUsers.innerHTML = "<tr><td colspan='4'>No hay usuarios</td></tr>";
        return;
    }
    data.forEach(usuario => {
        const row = tablaUsers.insertRow();
        row.insertCell().textContent = usuario.id;
        row.insertCell().textContent = usuario.Nombre;
        row.insertCell().textContent = usuario.CorreoE;
        row.insertCell().textContent = usuario.CelularNum;
    });
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
    const tablaUsers = document.getElementById('tabla-users');
    tablaUsers.innerHTML = "<tr><td colspan='4'>Error al cargar los datos</td></tr>";
});
