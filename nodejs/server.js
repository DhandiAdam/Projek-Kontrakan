import express from 'express';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import mysql from 'mysql';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.json());

// Middleware for logging request body
app.use((req, res, next) => {
    console.log("Request body:", req.body);
    next();
});

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'kontrakan'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

app.get("/KamarB", (req, res) => {
    res.sendFile("KamarB.html", { root: "public" });
});
app.get("/KamarL", (req, res) => {
    res.sendFile("KamarL.html", { root: "public" });
});
app.get("/KamarLL", (req, res) => {
    res.sendFile("KamarLL.html", { root: "public" });
});

app.get("/success", (req, res) => {
    res.sendFile("dashboard.html", { root: "public" });
});

app.get("/cancel", (req, res) => {
    res.sendFile("cancel.html", { root: "public" });
});

// Stripe
const stripeGateway = new Stripe(process.env.STRIPE_API);
const DOMAIN = process.env.DOMAIN;

app.post("/stripe-checkout", async (req, res) => {
    const lineItems = req.body.items.map((item) => {
        const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, '') * 100);
        return {
            price_data: {
                currency: 'idr',
                product_data: {
                    name: item.title,
                    images: [item.productImg]
                },
                unit_amount: unitAmount,
            },
            quantity: item.quantity,
        };
    });

    console.log('lineItems:', lineItems);

    // Checkout session
    const session = await stripeGateway.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: lineItems,
        success_url: `${DOMAIN}/success`,
        cancel_url: `${DOMAIN}/cancel`,
        billing_address_collection: 'required'
    });

    res.json({ url: session.url });
});

app.post('/kontrak', (req, res) => {
    const { nama, Telephone, Alamat_Kontrakan, Tipe, Biaya, tanggal_mulai, tanggal_akhir } = req.body;

    // Simpan data ke database
    const query = 'INSERT INTO kontrak (nama, Telephone, Alamat_Kontrakan, tipe, Biaya_Sewa, Tanggal_Mulai, Tanggal_Akhir) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nama, Telephone, Alamat_Kontrakan, Tipe, Biaya, tanggal_mulai, tanggal_akhir], (err, result) => {
        if (err) {
            console.error('Error saving kontrak info:', err);
            res.status(500).json({ success: false, error: 'Database error' });
        } else {
            res.json({ success: true });
        }
    });
});

app.get("/dashboard", (req, res) => {
    db.query('SELECT * FROM kontrak', (err, results) => {
        if (err) {
            console.error('Error fetching kontrak info:', err);
            res.status(500).send('Database error');
        } else {
            res.json(results);
        }
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

axios.get('http://localhost:8080/data')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(`Error: ${error.message}`);
});