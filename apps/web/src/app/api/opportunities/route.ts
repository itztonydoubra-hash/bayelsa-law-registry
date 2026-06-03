import sql from '@/app/api/utils/sql';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      organization_name,
      opportunity_type,
      practice_area,
      description,
      deadline,
      whatsapp_contact,
    } = body;

    const result = await sql`
      INSERT INTO opportunities (
        organization_name, opportunity_type, practice_area, description, 
        deadline, whatsapp_contact
      ) VALUES (
        ${organization_name}, ${opportunity_type}, ${practice_area}, ${description}, 
        ${deadline}, ${whatsapp_contact}
      ) RETURNING id
    `;

    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error('Opportunity error:', error);
    return Response.json({ error: 'Failed to submit opportunity' }, { status: 500 });
  }
}
