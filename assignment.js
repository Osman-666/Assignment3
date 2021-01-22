


//this program show you kilometer to meter conversion.

function kilometerToMeter(kilo){
    if(kilo<0){
        return "kono distance nai"  //if kilometer less than or equal 0 then print this message.
    }
    else{
        var meter=kilo*1000;
        return meter;
    }
}

//this program show you budgetCalculator.

function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        return 'price can not be negative';   //if price less than or equal 0 then print this message.
    }
    else{
        var watchPrice=watch*50;
        var phonePrice=phone*100;
        var laptopPrice=laptop*500;
        var price=watchPrice+phonePrice+laptopPrice;
    }
    return price;         
    }

//this program show you hotelCost.

function hotelCost(days){
    var money;
    if(days<=0){
        return '1din o thakoni,Abar takar kotha bolco kno'; //if days less than or equal 0 then print this.
    }
    else if(days<=10){
        money=days*100;
    }
    else if(days<=20){
        var firstTenDays=10*100;
        var remaining=days-10;
        var secondTenDays=remaining*80;
        money=firstTenDays+secondTenDays;
    }
    else{
        var firstTenDays=10*100;
        var secondTenDays=10*80;
        var remaining=days-20;
        var afterDays=remaining*50;
        money=firstTenDays+secondTenDays+afterDays;
    }
    return money;
}

//this program show you largest name of an Array.

function megaFriend(names) {
    var maxName = '';
    for (var i = 0; i < names.length; i++) {
    if (names[i].length > maxName.length)
    maxName = names[i];
    }
    return maxName;
    }