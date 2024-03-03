class RapidTestOrder {
    let item = "";
    let sauce = "";
    let beverage = "";
    let total = 0;
  constructor(sFrom) {
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
          aReturn.push(`Salmon Sashimi 4pc - $5`);
          aReturn.push(`Rock N' Roll 4pc - $7`);
          this.stateCur = this.OrderState.RESERVING;
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      ITEM: (sInput) => {
        let aReturn = [];
      
        if (sInput.toLowerCase().startsWith('s')) {
            item = "Salmon Sashimi";
            total += 5;
            aReturn.push(`Salmon Sashimi added.`);
            aReturn.push(`What sauce would you like?`);
            aReturn.push(`Soy Sauce - FREE`);
            aReturn.push(`Eel Sauce - $1`);
            this.stateCur = this.OrderState.SAUCE;
        } else if(sInput.toLowerCase() == "r") {
            item = "Rock N' Roll";
            total += 7;
            aReturn.push(`Rock N' Roll added.`);
            aReturn.push(`What sauce would you like?`);
            aReturn.push(`Soy Sauce - FREE`);
            aReturn.push(`Eel Sauce - $1`);
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
            aReturn.push(`Taro Milk Tea - $4`);
            aReturn.push(`Brown Sugar Milk Tea - $4`);
            this.stateCur = this.OrderState.BEVERAGE;
            
        } else if(sInput.toLowerCase() == "e") {
            sauce = "Eel Sauce";
            total += 1;
            aReturn.push(`Eel Sauce added.`);
            aReturn.push(`What beverage would you like?`);
            aReturn.push(`Nothing`);
            aReturn.push(`Taro Milk Tea - $4`);
            aReturn.push(`Brown Sugar Milk Tea - $4`);
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
            aReturn.push(`Your total is ${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
            
        } else if(sInput.toLowerCase() == "t") {
            aReturn.push(`Taro Milk Tea added.`);
            beverage = "Taro Milk Tea";
            total += 4;
            aReturn.push(`Your final order is ${orderedItem} with ${sauce} and a ${beverage}.`);
            aReturn.push(`Your total is ${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        } else if(sInput.toLowerCase() == "b") {
            aReturn.push(`Brown Sugar Milk Tea added.`);
            beverage = "Brown Sugar Milk Tea";
            total += 4;
            aReturn.push(`Your final order is ${orderedItem} with ${sauce} and a ${beverage}.`);
            aReturn.push(`Your total is ${total}.`);
            aReturn.push(`Would you like to place the order? Type YES if so.`);
            this.stateCur = this.OrderState.CONFIRMATION;
        } else {
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


