const express = require('express')
require('dotenv').config()
const app = express()
const port =  4000

app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Home Page</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
    }
    main{
      height:100vh
    }
    nav {
        background-color: #f4f4f4;
        padding: 10px 20px;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-right: 20px;
    }

    nav ul li a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }

    section {
        padding: 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .featured {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
    }

    .card {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
        margin-top: 0;
    }

    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 20px;
    }
</style>
</head>
<body>

<main>
<header>
    <h1>Welcome to Our Website</h1>
</header>

<nav>
    <div class="container">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</nav>

<section>
    <div class="container">
        <h2>Featured Products</h2>
        <div class="featured">
            <div class="card">
                <h2>Product 1</h2>
                <p>Description of product 1 goes here.</p>
            </div>
            <div class="card">
                <h2>Product 2</h2>
                <p>Description of product 2 goes here.</p>
            </div>
            <div class="card">
                <h2>Product 3</h2>
                <p>Description of product 3 goes here.</p>
            </div>
        </div>
    </div>
</section>

<main/>

<footer>
    <p>&copy; 2024 Our Website. All rights reserved.</p>
</footer>

</body>
</html>

    `)
})
app.get('/signup',(req,res)=>{
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login & Signup</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        
            .form-container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            }
        
            .form-container h2 {
                text-align: center;
                margin-bottom: 20px;
            }
        
            .form-container input[type="text"],
            .form-container input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
        
            .form-container input[type="submit"] {
                width: 100%;
                background-color: #4caf50;
                color: #fff;
                padding: 10px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        
            .form-container input[type="submit"]:hover {
                background-color: #45a049;
            }
        
            .form-container .switch-btn {
                display: block;
                text-align: center;
                margin-top: 10px;
            }
        
            .form-container .switch-btn a {
                text-decoration: none;
                color: #333;
            }
        </style>
        </head>
        <body>
        
        <div class="form-container">
            <h2>Login</h2>
            <form id="login-form" action="#">
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <input type="submit" value="Login">
            </form>
            <div class="switch-btn">
                <a href="#" onclick="toggleForm('signup')">Switch to Signup</a>
            </div>
        </div>
        
        <div class="form-container" style="display: none;">
            <h2>Signup</h2>
            <form id="signup-form" action="#">
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <input type="submit" value="Signup">
            </form>
            <div class="switch-btn">
                <a href="#" onclick="toggleForm('login')">Switch to Login</a>
            </div>
        </div>
        
        <script>
            function toggleForm(formName) {
                if (formName === 'login') {
                    document.getElementById('login-form').style.display = 'block';
                    document.getElementById('signup-form').style.display = 'none';
                } else if (formName === 'signup') {
                    document.getElementById('login-form').style.display = 'none';
                    document.getElementById('signup-form').style.display = 'block';
                }
            }
        </script>
        
        </body>
        </html>
        `
    )
})
app.get('/login',(req,res)=>{
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        
            .login-container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            }
        
            .login-container h2 {
                text-align: center;
                margin-bottom: 20px;
            }
        
            .login-container input[type="text"],
            .login-container input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
        
            .login-container input[type="submit"] {
                width: 100%;
                background-color: #4caf50;
                color: #fff;
                padding: 10px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        
            .login-container input[type="submit"]:hover {
                background-color: #45a049;
            }
        </style>
        </head>
        <body>
        
        <div class="login-container">
            <h2>Login</h2>
            <form action="#">
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <input type="submit" value="Login">
            </form>
        </div>
        
        </body>
        </html>
        `
    )
})

app.listen(process.env.PORT,()=>{
      console.log('port is listning')
})