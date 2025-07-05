# Product Management App

**Estatus: In Progress**

Developed with the assistance of ChatGPT 🤖

This project is an introduction to using **JSON Server** to simulate a backend API, where we can create, retrieve, edit, and delete information in a "database". This app allows you to manage products: view products, add new ones, edit existing products, and delete them.

---

## 🚀 How to Use It

Since JSON Server behaves like a database, it cannot be fully deployed on a public repository if it's empty. To simulate an API, the file `db.json` must contain a structure (like `"products": []`). If it's completely empty (`{}`), the API won't be created.

Below are the steps and tools you’ll need to run this project on your local machine.

---

## 1. Download Visual Studio Code

Use the link below to download VS Code for your operating system.  
Also included is a beginner-friendly tutorial on how to install it.

🔗 Official VSCode website:  
https://code.visualstudio.com/download

📹 Video tutorial (in Spanish):  
https://www.youtube.com/watch?v=orvcXUxNXOo

---

## 2. Install Node.js

You’ll need Node.js to run JSON Server.  
Download it from the official site:

🔗 https://nodejs.org/

After installing, confirm it worked by running:

```bash
node -v
npm -v
```

---

## 3. Install JSON Server

Once Node.js is installed, open a terminal and run:

```bash
npm install -g json-server
```

This installs JSON Server globally so you can run it from any folder.

---

## 4. Clone the Repository

```bash
git clone https://github.com/your-username/product-manager.git
cd product-manager
```

Replace `your-username` with your actual GitHub username.

---

## 5. Run the Project Locally

### 🖥️ Windows

```bash
json-server --watch db.json
```

Then open the `index.html` file in your browser by double-clicking or dragging it into the browser window.

---

### 🐧 Linux

```bash
json-server --watch db.json
```

Then open `index.html` in your browser (e.g., Firefox or Chromium).

---

### 🍏 macOS

```bash
json-server --watch db.json
```

Then open `index.html` in Safari or your preferred browser.

---

## 💡 Additional Notes

- The `db.json` file includes a sample product (`id: 0`) to prevent the API from being empty. You can delete it after launching.
- All visual styles are built using **Bulma CSS framework**, and **ChatGPT** was used to help assign Bulma classes dynamically via JavaScript and for building interactive UI features.
- The app uses `fetch()` to interact with the fake API in real time without reloading the page.

---

## 🙋 Author

Tomás Loaiza Rodríguez - Software Developer
