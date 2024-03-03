class RapidTestOrder {
    
  constructor(sFrom) {
    let orderedItem = "";
    let amount = 0;
    let sauce = "";
    let beverage = "";
    let total = 0;
    this.OrderState = {
      WELCOMING: () => {
        total = 0;
        let aReturn = [];
        this.stateCur = this.OrderState.ORDERING;
        aReturn.push("Welcome to Blossom Cuisine.");
        aReturn.push("Would you like to place an order?");
        return aReturn;
      },
      ORDERING: (sInput) => {
        let aReturn = [];
       
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Great! What item would you like?`);
          aReturn.push(`Our takeout menu includes:`);
          aReturn.push(`Salmon Sashimi - $5.00`);
          aReturn.push(`Rock N Roll - $7.00`);
          this.stateCur = this.OrderState.ITEM;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      ITEM: (sInput) => {
        let aReturn = [];
      
        if (sInput.toLowerCase().startsWith('s')) {
            orderedItem = "Salmon Sashimi";
            total += 5;
            aReturn.push(`Salmon Sashimi selected.`);
            aReturn.push(`How many pieces would you like? Percentage shown is what the price of the roll is multiplied by.`);
            aReturn.push(`4pc - 100%`);
            aReturn.push(`8pc - 180%`);
            aReturn.push(`12pc - 260%`);
            this.stateCur = this.OrderState.AMOUNT;
        } else if(sInput.toLowerCase().startsWith('r')) {
            orderedItem = "Rock N Roll";
            total += 7;
            aReturn.push(`Rock N Roll selected.`);
            aReturn.push(`How many pieces would you like? Percentage shown is what the price of the roll is multiplied by.`);
            aReturn.push(`4pc - 100%`);
            aReturn.push(`8pc - 180%`);
            aReturn.push(`12pc - 260%`);
            this.stateCur = this.OrderState.AMOUNT;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      AMOUNT: (sInput) => {
        let aReturn = [];

        if (sInput.startsWith('4')) {
            amount = 4;
            aReturn.push(`4pc ${orderedItem} added.`);
            aReturn.push(`What sauce would you like?`);
            aReturn.push(`Soy Sauce - FREE`);
            aReturn.push(`Eel Sauce - $1.00`);
            this.stateCur = this.OrderState.SAUCE;
            
        } else if(sInput.startsWith('8')) {
            amount = 8;
            total *= 1.8;
            aReturn.push(`8pc ${orderedItem} added.`);
            aReturn.push(`What sauce would you like?`);
            aReturn.push(`Soy Sauce - FREE`);
            aReturn.push(`Eel Sauce - $1.00`);
            this.stateCur = this.OrderState.SAUCE;
        } else if(sInput.startsWith('1')) {
            amount = 12;
            total *= 2.6;
            aReturn.push(`12pc ${orderedItem} added.`);
            aReturn.push(`What sauce would you like?`);
            aReturn.push(`Soy Sauce - FREE`);
            aReturn.push(`Eel Sauce - $1.00`);
            this.stateCur = this.OrderState.SAUCE;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      SAUCE: (sInput) => {
        let aReturn = [];

        if (sInput.toLowerCase().startsWith('s')) {
            sauce = "Soy Sauce";
            aReturn.push(`Soy Sauce added.`);
            aReturn.push(`What beverage would you like?`);
            aReturn.push(`Nothing`);
            aReturn.push(`Taro Milk Tea - $4.00`);
            aReturn.push(`Brown Sugar Milk Tea - $4.00`);
            this.stateCur = this.OrderState.BEVERAGE;
            
        } else if(sInput.toLowerCase().startsWith('e')) {
            sauce = "Eel Sauce";
            total += 1;
            aReturn.push(`Eel Sauce added.`);
            aReturn.push(`What beverage would you like?`);
            aReturn.push(`Nothing`);
            aReturn.push(`Taro Milk Tea - $4.00`);
            aReturn.push(`Brown Sugar Milk Tea - $4.00`);
            this.stateCur = this.OrderState.BEVERAGE;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      BEVERAGE: (sInput) => {
        let aReturn = [];
       // this.isDone = true;
        if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push(`No beverage added.`);
            beverage = "Nothing";
            aReturn.push(`Your final order is ${orderedItem} with ${sauce}.`);
            aReturn.push(`Your total is $${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
            
        } else if(sInput.toLowerCase().startsWith('t')) {
            aReturn.push(`Taro Milk Tea added.`);
            beverage = "Taro Milk Tea";
            total += 4;
            aReturn.push(`What beverage topping would you like?`);
            aReturn.push(`Nothing`);
            aReturn.push(`Boba - $1.50`);
            aReturn.push(`Rainbow Boba - $1.50`);
            aReturn.push(`Popping Pearls - $2.00`);
            this.stateCur = this.OrderState.BEVERAGE_TOPPING;
        } else if(sInput.toLowerCase().startsWith('b')) {
            aReturn.push(`Brown Sugar Milk Tea added.`);
            beverage = "Brown Sugar Milk Tea";
            total += 4;
            aReturn.push(`What beverage topping would you like?`);
            aReturn.push(`Nothing`);
            aReturn.push(`Boba - $1.50`);
            aReturn.push(`Rainbow Boba - $1.50`);
            aReturn.push(`Popping Pearls - $2.00`);
            this.stateCur = this.OrderState.BEVERAGE_TOPPING;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      BEVERAGE_TOPPING: (sInput) => {
        let aReturn = [];
       // this.isDone = true;
        if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push(`No topping added.`);
            aReturn.push(`Your final order is ${orderedItem} with ${sauce}.`);
            aReturn.push(`Your total is $${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        } else if(sInput.toLowerCase().startsWith('b')) {
            aReturn.push(`Boba added.`);
            total += 1.5;
            aReturn.push(`Your final order is ${orderedItem} with ${sauce} and a ${beverage}.`);
            aReturn.push(`Your total is $${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        } else if(sInput.toLowerCase().startsWith('r')) {
            aReturn.push(`Rainbow Boba added.`);
            total += 1.5;
            aReturn.push(`Your final order is ${orderedItem} with ${sauce} and a ${beverage}.`);
            aReturn.push(`Your total is $${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        } else if(sInput.toLowerCase().startsWith('p')) {
            aReturn.push(`Popping Pearls added.`);
            total += 2;
            aReturn.push(`Your final order is ${orderedItem} with ${sauce} and a ${beverage}.`);
            aReturn.push(`Your total is $${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        }else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      CONFIRMATION: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Order placed! See you soon!`);
            aReturn.push(`Please pick it up at 213 Fish St., Brantford before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }


