import { animate, style, transition, trigger } from '@angular/animations'

export const enterLeave = [
  trigger('go', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 })),
    ]),

    transition(':leave', [
      style({ opacity: 1 }),
      animate('700ms ease-in', style({ opacity: 0 })),
    ]),
  ]),
]
