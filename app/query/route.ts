import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
   `;
  return data;
}

// Exporta o método HTTP GET para a rota
export async function GET() {
  const data = await listInvoices();
  return Response.json(data);
}



