import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProducerService} from "../../services/producer.service";

@Component({
  selector: 'app-producer-preview',
  templateUrl: './producer-preview.component.html',
  styleUrls: ['./producer-preview.component.css']
})
export class ProducerPreviewComponent implements OnInit {

  producer = {
    name: ""
  };

  producerId;

  constructor(private producerService: ProducerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getProducer();
  }

  getProducer() {
    this.activatedRoute.params.subscribe(params => {
      this.producerId = +params['id'];
      this.producerService.getProducer(this.producerId)
        .subscribe((producer: any) => {
          this.producer = producer;
        })
    });
  }

}
