const COC_PLAYER_URL = 'https://api.clashofclans.com/v1/players';

export async function GET(_: Request, { params }: { params: { tag: string } }) {
  const headers = {
    Authorization: `Bearer ${process.env.CLASH_APIKEY}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(`${COC_PLAYER_URL}/%23${params.tag}`, { headers });
  const data = await res.json();
  return Response.json(data);
}
