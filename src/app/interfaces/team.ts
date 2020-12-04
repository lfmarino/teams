import { Countries } from '../enums/player/countries';
import { Player } from './player';

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}
