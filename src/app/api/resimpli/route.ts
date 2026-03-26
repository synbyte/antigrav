import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // This expects a Zapier Catch Hook URL (or alternative webhook) set in your environment
        const webhookUrl = "https://hooks.zapier.com/hooks/catch/26873735/upv64mg/";

        if (!webhookUrl) {
            console.warn('RESIMPLI_WEBHOOK_URL is not set in environment variables. Lead was saved to DB, but not sent to REsimpli.');
            return NextResponse.json(
                { success: true, message: 'Webhook URL not configured, lead not forwarded.' },
                { status: 200 }
            );
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Resimpli webhook responded with status: ${response.status}`);
        }

        return NextResponse.json({ success: true, message: 'Successfully sent to Resimpli' });
    } catch (error: any) {
        console.error('Error forwarding to Resimpli:', error);
        // We still return 200 so the frontend doesn't show an error to the user if only the CRM upload fails.
        // It's already been saved to the database.
        return NextResponse.json(
            { success: false, message: error.message || 'Error communicating with Resimpli' },
            { status: 200 }
        );
    }
}
