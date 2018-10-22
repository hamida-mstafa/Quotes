import { Component, OnInit, } from '@angular/core';
import{Quote} from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
         new Quote(1,'Life is like a coil bird it begins with competition','mids',"marv",0),
         new Quote(1,'Behind my smile is a story you will never understand. ','mids',"ken",0),

     ]
     toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
     addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            this.quotes.push(quote)

        }

        deleteQuote(isComplete,index){
              if (isComplete){
                  let toDelete=confirm(`Are you sure you want to delete this quote?`)
                  alert(`${this.quotes[index].user},your quote has been deleted!!`)

                  if(toDelete){
                      this.quotes.splice(index,1)
                  }
              }
          }


    constructor() { }
    ngOnInit() {
    }

  }
