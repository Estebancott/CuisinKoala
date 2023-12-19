import { Component, OnInit } from '@angular/core';
import { ReceiptParserService } from '../receipt-parser.service';
import { ChatGptService } from '../chat-gpt.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  result: any;

  constructor(private receiptParserService: ReceiptParserService,private chatGptService: ChatGptService) { }

  ngOnInit() {
  }

  testReceiptParser() {
    const imagePath = '../../assets/image.png';
    this.result = this.chatGptService.getRecipes([{ name: "patate", quantity: "2" }, { name: "carotte", quantity: "3" }]);
    //this.result = this.receiptParserService.parseReceipt(imagePath);
    console.log(this.result);
  }
}