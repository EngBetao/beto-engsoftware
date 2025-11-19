import express from 'express';

const app = express();
const port = 3000;

// Permite que o servidor entenda JSON
app.use(express.json());

// Nosso banco de dados na memória
const books = [
    { id: 1, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", available: true },
    { id: 2, title: "Dom Casmurro", author: "Machado de Assis", available: false },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", available: true }
];

// Rota Inicial
app.get('/', (req, res) => {
    res.send('API da Biblioteca funcionando!');
});

// Listar Livros (GET)
app.get('/books', (req, res) => {
    res.json(books);
});

// Cadastrar Livro (POST)
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).send('Livro cadastrado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});