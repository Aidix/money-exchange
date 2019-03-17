// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coin = {};
    var H, Q, D, N, P;
    if(currency <= 0){
        return (coin);
    } else if(currency > 10000){
        coin.error =  "You are rich, my friend! We don't have so much coins for exchange";
        return(coin)
    } else {
        if (currency/50 >= 1){
            H = Math.floor(currency/50);
            currency = currency - H*50;
            coin.H = H;
        }
        if (currency/25 >= 1){
            Q = Math.floor(currency/25);
            currency = currency - Q*25;
            coin.Q = Q;
        }
        if (currency/10 >= 1){
            D = Math.floor(currency/10);
            currency = currency - D*10;
            coin.D = D;
        }
        if (currency/5 >= 1){
            N = Math.floor(currency/5);
            currency = currency - N*5;
            coin.N = N;
        }
        if (currency >= 1){
            P = currency
            coin.P = P;
        }    
        return(coin);
        
    }
   
}
