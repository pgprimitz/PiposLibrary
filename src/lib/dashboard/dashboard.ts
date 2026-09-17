import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'generic-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class GenericDashboard {}
