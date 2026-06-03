import sql from '@/app/api/utils/sql';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type,
      full_name,
      email,
      whatsapp_number,
      faculty,
      year_of_study,
      areas_of_interest,
      looking_for,
      organization_name,
      practice_area,
      open_to_mentorship,
      open_to_interns,
    } = body;

    const result = await sql`
      INSERT INTO waitlist (
        type, full_name, email, whatsapp_number, faculty, year_of_study, 
        areas_of_interest, looking_for, organization_name, practice_area, 
        open_to_mentorship, open_to_interns
      ) VALUES (
        ${type}, ${full_name}, ${email}, ${whatsapp_number}, ${faculty}, ${year_of_study}, 
        ${areas_of_interest}, ${looking_for}, ${organization_name}, ${practice_area}, 
        ${open_to_mentorship}, ${open_to_interns}
      ) RETURNING id
    `;

    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error('Waitlist error:', error);
    return Response.json({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}
