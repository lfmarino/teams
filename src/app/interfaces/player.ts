import { SquadNumbers } from '../enums/player/squad-number';
import { Countries } from '../enums/player/countries';

export interface Player {
  $key?: string;
  name: string;
  lastName: string;
  position: SquadNumbers;
  weight: number;
  height: number;
  nationality: Countries;
  leftFooted: boolean;
}
