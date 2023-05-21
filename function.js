document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Alexander' && password === '1234') {
        alert('Inicio de sesión exitoso');
        showProductTable();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

function showProductTable() {
    var loginContainer = document.getElementById('loginContainer');
    var productContainer = document.getElementById('productContainer');

    loginContainer.style.display = 'none';
    productContainer.style.display = 'block';

    var productTableBody = document.getElementById('productTableBody');

    var products = [
        { id: 1, nombre: 'Leche', precio: 2.50 },
        { id: 2, nombre: 'Pan', precio: 1.00 },
        { id: 3, nombre: 'Huevos', precio: 3.50 },
        { id: 4, nombre: 'Arroz', precio: 2.00 },
        { id: 5, nombre: 'Azúcar', precio: 1.50 }
    ];

    for (var i = 0; i < products.length; i++) {
        var row = document.createElement('tr');
        var idCell = document.createElement('td');
        var nombreCell = document.createElement('td');
        var precioCell = document.createElement('td');
        var addButtonCell = document.createElement('td');
        var addButton = document.createElement('button');

        idCell.textContent = products[i].id;
        nombreCell.textContent = products[i].nombre;
        precioCell.textContent = '$' + products[i].precio.toFixed(2);
        addButton.textContent = 'Agregar';

        addButton.addEventListener('click', function() {
            var cantidad = prompt('Ingrese la cantidad:');
            if (cantidad !== null && cantidad !== '') {
                cantidad = parseInt(cantidad);
                if (!isNaN(cantidad) && cantidad > 0) {
                    var producto = {
                        id: this.parentNode.parentNode.cells[0].textContent,
                        nombre: this.parentNode.parentNode.cells[1].textContent,
                        precio: parseFloat(this.parentNode.parentNode.cells[2].textContent.substring(1))
                    };
                    console.log('Producto agregado:', producto, 'Cantidad:', cantidad);
                    var total = cantidad * producto.precio;
                    alert('Cantidad agregada: ' + cantidad + '\nTotal: $' + total.toFixed(2));
                } else {
                    alert('Ingrese una cantidad válida.');
                }
            }
        });

        row.appendChild(idCell);
        row.appendChild(nombreCell);
        row.appendChild(precioCell);
        addButtonCell.appendChild(addButton);

        row.appendChild(addButtonCell);
        productTableBody.appendChild(row);
    }
}