class UberPriceCalculator {
    constructor(km) { 
        this.km = km;
        this.baseFare = 52.5;
        this.ratePerKm = 6.3;
    }
    calculation(){
    
        let Rate = this.ratePerKm * this.km;
        let TripAmout = this.baseFare + Rate;

        return TripAmout;
    }

    getEstimatedTripAmount() {
        
        let Totel = this.calculation(); 
        return ` Uber fare for your ride costs ₹${Totel.toFixed(2)} for ${this.km} Kilometers.` ;
        
    }

}

let user1 = new UberPriceCalculator(44);

console.log(user1.getEstimatedTripAmount());

/*
OUtput:
Uber fare for your ride costs ₹329.70 for 44 Kilometers.
*/
