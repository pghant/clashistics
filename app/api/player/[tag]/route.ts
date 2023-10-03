import { Player } from '@/lib/models/player';

const COC_PLAYER_URL = 'https://api.clashofclans.com/v1/players';

export async function GET(_: Request, { params }: { params: { tag: string } }) {
  const headers = {
    Authorization: `Bearer ${process.env.CLASH_APIKEY}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(`${COC_PLAYER_URL}/%23${params.tag}`, { headers });
  const data = await res.json();

  if (res.status === 200) {
    return Response.json(data);
  } else if (res.status === 404) {
    return Response.json({ error: 'Player does not exist' }, { status: 404 });
  } else {
    console.error('Error retrieving player ' + params.tag, data);
    return Response.json({ error: 'Unknown error' }, { status: 500 });
  }
}
