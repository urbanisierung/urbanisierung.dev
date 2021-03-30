import { animate, style, transition, trigger } from '@angular/animations'

export const enterLeave = [
  trigger('go', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('500ms ease-in', style({ transform: 'translateY(0)' })),
    ]),

    transition(':leave', [
      style({ transform: 'translateY(0)' }),
      animate('500ms ease-in', style({ transform: 'translateY(100%)' })),
    ]),
  ]),
]
