import { sql } from '@vercel/postgres';
import { Score } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchHighScores() {
  noStore();

  try {
    console.log('Fetching scores ...');
    const data = await sql<Score>`
            SELECT * FROM scores
            ORDER BY scores.score DESC
            LIMIT 10
            `;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch scores data.');
  }
}
