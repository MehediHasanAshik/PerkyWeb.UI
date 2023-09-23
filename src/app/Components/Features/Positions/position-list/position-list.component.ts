import { Component, OnInit } from '@angular/core';
import { Position } from '../Models/Position.model';
import { PositionService } from '../Services/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positions: Position[] = [];

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.positionService.getAllPositions().subscribe({
      next: res => {
        if (res) {
          this.positions = res;
        }
      }
    })
  }
}
