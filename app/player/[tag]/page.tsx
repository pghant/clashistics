import { Player } from '@/lib/models/player';

export default async function Page({ params }: { params: { tag: string } }) {
  const data = await getPlayer(params.tag);
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

const COC_PLAYER_URL = 'https://api.clashofclans.com/v1/players';

async function getPlayer(playerTag: string) {
  const headers = {
    Authorization: `Bearer ${process.env.CLASH_APIKEY}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(`${COC_PLAYER_URL}/%23${playerTag}`, { headers });
  const data = await res.json();
  return data;

  // if (res.status === 200) {
  //   return Response.json(data);
  // } else if (res.status === 404) {
  //   return Response.json({ error: 'Player does not exist' }, { status: 404 });
  // } else {
  //   console.error('Error retrieving player ' + playerTag, data);
  //   return Response.json({ error: 'Unknown error' }, { status: 500 });
  // }
}
