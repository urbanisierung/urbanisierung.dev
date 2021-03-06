import { animate, style, transition, trigger } from '@angular/animations'

export const enterLeave = [
  trigger('go', [
    transition(':enter', [
      style({ opacity: 0, height: '0px' }),
      animate('300ms ease-in', style({ opacity: 1, height: '*' })),
    ]),

    transition(':leave', [
      style({ opacity: 1, height: '*' }),
      animate('300ms ease-in', style({ opacity: 0, height: '0px' })),
    ]),
  ]),
]
