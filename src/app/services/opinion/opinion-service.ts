import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpinionService {
  getAll():Opinion[] {
    return [
      { author: 'Michał', text: 'Trener jest super, bardzo polecam', stars: 5 },
      { author: 'Kasia', text: 'Każdy trening dodaje mi pewności siebie.', stars: 3 },
      { author: 'Stasiek', text: 'Każdy trening poprawia mi kondycję.', stars: 5 },
      { author: 'Ania', text: 'Uwielbiam trenować z Pawełem', stars: 4.5 },
      { author: 'Paweł', text: 'Z Trenerem ćwiczę regularnie i jest super', stars: 5 }
    ];
  }
}
