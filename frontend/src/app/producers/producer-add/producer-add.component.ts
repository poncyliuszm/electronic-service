import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProducerService} from "../../services/producer.service";

@Component({
  selector: 'app-producer-add',
  templateUrl: './producer-add.component.html',
  styleUrls: ['./producer-add.component.css']
})
export class ProducerAddComponent implements OnInit {

  producer = {
    name: ""
  };

  constructor(private producerService: ProducerService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addProducer(form) {
    if (form.valid) {
      this.producerService.save(this.producer)
        .subscribe((data: any) => {
          this.router.navigate(['/producers']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano producenta", "");
  }

}
