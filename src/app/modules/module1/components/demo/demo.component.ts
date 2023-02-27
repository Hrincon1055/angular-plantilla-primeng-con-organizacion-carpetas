import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MicroserviceService } from 'src/app/domain/service/module1/microservice/microservice.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public result$: Observable<any>;
  
  constructor(private microserviceService: MicroserviceService) {

    this.result$ = this.microserviceService.select(item => item.rowData)
   }

  ngOnInit(): void {
  }

}
