const productList = document.getElementById("product-list");
const addId = document.getElementById("add-id");
const addName = document.getElementById("add-name");
const addPrice = document.getElementById("add-price");
const addButton = document.getElementById("add-product-btn");

const apiUrl = "http://localhost:3000/products";

async function loadProducts() {
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Connection error");
        const data = await res.json();

        productList.innerHTML = "";
        data.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("box", "has-background-white");
            item.innerHTML = `
        <div data-view>
          <p><strong>ID:</strong> ${product.id}</p>
          <p><strong>Name:</strong> <span>${product.name}</span></p>
          <p><strong>Price:</strong> <span>$${product.price}</span></p>
          <div class="buttons mt-3">
            <button class="button is-small is-warning" onclick="enableEdit(this, ${product.id}, '${product.name}', ${product.price})">Edit</button>
            <button class="button is-small is-danger is-light" onclick="deleteProduct(${product.id})">Delete</button>
          </div>
        </div>
        <div data-edit style="display:none;">
          <p><strong>ID:</strong> ${product.id}</p>
          <p>
            <strong>Name:</strong>
            <input class="input is-small" type="text" value="${product.name}" />
          </p>
          <p>
            <strong>Price:</strong>
            <input class="input is-small" type="number" value="${product.price}" />
          </p>
          <div class="buttons mt-3">
            <button class="button is-small is-success" onclick="saveEdit(this, ${product.id})">Save</button>
            <button class="button is-small is-light" onclick="cancelEdit(this)">Cancel</button>
          </div>
        </div>
      `;
            productList.appendChild(item);
        });

    } catch (error) {
        productList.innerHTML = `<p class="has-text-danger">⚠ Failed to load products.</p>`;
        alert("Error loading products: " + error.message + "\nIs json-server running?");
    }
}

// Add product
addButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const newProduct = {
        id: parseInt(addId.value),
        name: addName.value,
        price: parseFloat(addPrice.value)
    };

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        });
        await res.json();
        alert("Product added successfully");
        loadProducts();
    } catch (error) {
        alert("Error adding product: " + error.message);
    }
});

function enableEdit(btn, id, name, price) {
    const card = btn.closest(".box");
    const view = card.querySelector("[data-view]");
    const edit = card.querySelector("[data-edit]");
    view.style.display = "none";
    edit.style.display = "block";
}

function cancelEdit(btn) {
    const card = btn.closest(".box");
    const view = card.querySelector("[data-view]");
    const edit = card.querySelector("[data-edit]");
    edit.style.display = "none";
    view.style.display = "block";
}

async function saveEdit(btn, id) {
    const card = btn.closest(".box");
    const inputs = card.querySelectorAll("[data-edit] input");
    const updatedProduct = {
        name: inputs[0].value,
        price: parseFloat(inputs[1].value)
    };

    try {
        await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct)
        });
        alert("Product updated successfully");
        loadProducts();
    } catch (error) {
        alert("Error updating product: " + error.message);
    }
}

async function deleteProduct(id) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
        await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
        alert("Product deleted successfully");
        loadProducts();
    } catch (error) {
        alert("Error deleting product: " + error.message);
    }
}

loadProducts();
