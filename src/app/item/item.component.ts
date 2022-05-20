import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentDate = new Date();
  dateFormat = "EEEE d MMMM y"
  formattedDate = formatDate(this.currentDate, this.dateFormat, this.locale);
  messages: string[] = [
    "Hello, how are you?",
    "Do you wanna go to the cinema tonight?",
    "You are late! Where are you?"
  ]

  messageMapping: {[k: string]: string} = {
    "=0": $localize`:@@zero:No messages`,
    "=1": $localize`:@@one:One message`,
    "other": $localize`:@@many:  # messages`
  }

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(){
  }

}
