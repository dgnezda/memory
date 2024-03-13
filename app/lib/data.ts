import { sql } from '@vercel/postgres'
import { Score, Settings } from './definitions'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchHighScores() {
    noStore()

    try {
        console.log('Fetching scores ...');
        const data = await sql<Score>`
            SELECT * FROM scores
            ORDER BY scores.score DESC
            LIMIT 10
            `;
        return data;
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch scores data.')
    }
}

export async function fetchSettingsForUser(id: string) {
    noStore()

    try {
        console.log('Fetching settings for user...');
        const data = await sql<Settings>`
            SELECT * FROM settings WHERE userId=${id}
        `;
        return data.rows[0]
    } catch (err) {
        console.error('Failed to fetch settings:', err)
        throw new Error('Failed to fetch settings.')
    }
}