export interface Player {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  versusTrophies: number;
  bestBuilderBaseTrophies: number;
  bestVersusTrophies: number;
  versusBattleWins: number;
  role: 'member' | 'coLeader' | 'admin';
  warPreference: 'in' | 'out';
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
}
