import express, { Request, Response, NextFunction } from 'express';
import supabase from './supabaseClient'; // Importă clientul Supabase

// Inițializează aplicația Express
const app = express();
const port = 3000;

// Exemplu de interogare pentru a obține date dintr-un tabel
app.get('/data', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { data, error } = await supabase
    .from('budget_allocations') // Înlocuiește cu numele tabelului tău
    .select('*');

  if (error) {
    console.error('Eroare la obținerea datelor:', error);
    return res.status(500).json({ error: 'Eroare la obținerea datelor' });
  }

  return res.json(data);
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
