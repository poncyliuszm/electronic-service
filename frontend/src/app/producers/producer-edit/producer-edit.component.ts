import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProducerService} from "../../services/producer.service";

@Component({
  selector: 'app-producer-edit',
  templateUrl: './producer-edit.component.html',
  styleUrls: ['./producer-edit.component.css']
})
export class ProducerEditComponent implements OnInit {

  producer = {
    name: ""
  };

  producerId;

  constructor(private producerService: ProducerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.producerService.update(this.producer)
        .subscribe((data: any) => {
          this.router.navigate(['/producers']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano producenta", "");
  }

}
