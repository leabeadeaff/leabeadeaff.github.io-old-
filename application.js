const { createApp } = Vue

  createApp({
    data() {
      return {
        ruble: 0,
        euro: 0,
        dollar: 0,
        showMenu: true,
        showDeposit: false,
        showSWIFT: false,
        showWithdraw: false,
        result: '',
        select: '',
        swiftGo: false,
        yes: '',
        commision: '',
      }
    },
    methods : {

      calcChange (amount, changeMode) {
        let amount5000 = 0;
        let amount2000 = 0;
        let amount1000 = 0;
        let amount500 = 0;
        let amount200 = 0;
        let amount100 = 0;
        let amount50 = 0;
        let amount10 = 0;
        let amount5 = 0;
        if (amount === 0) {
          this.result = 'У вас нет денег на счету ¯\\_(ツ)_/¯'
          return '';
        }
        if (changeMode === 'Крупными 😎') {
          while (amount > 4) {
            if (amount >= 5000) {
              amount -= 5000;
              amount5000++;
            } else if (amount >= 2000){
              amount -= 2000;
              amount2000++;
            } else if (amount >= 1000) {
              amount -= 1000;
              amount1000++;
            } else if (amount >= 500) {
              amount -= 500;
              amount500++;
            } else if (amount >= 200) {
              amount -= 200;
              amount200++;
            } else if (amount >= 100) {
              amount -= 100;
              amount100++;
            } else if (amount >= 50) {
              amount -= 50;
              amount50++;
            } else if (amount >= 10) {
              amount -= 10;
              amount10++;
            } else if (amount >= 5) {
              amount -= 5;
              amount5++;
            }
          }
          this.result = `Выдача 5000: ${amount5000}, 2000: ${amount2000}, 1000: ${amount1000}, 500: ${amount500}, 200: ${amount200}, 100: ${amount100}, 50: ${amount50}, 10: ${amount10}, 5: ${amount5}, и ${amount} ${amount  >= 2 ? 'рубля' : amount >= 1 ? 'рубль' : 'рублей'}`;
          this.ruble = 0;
        } else if (changeMode === 'Мелкими') {
          while (amount > 4) {
            if (amount >= 200) {
              amount -= 200;
              amount200++;
            } else if (amount >= 100) {
              amount -= 100;
              amount100++;
            } else if (amount >= 50) {
              amount -= 50;
              amount50++;
            } else if (amount >= 10) {
              amount -= 10;
              amount10++;
            } else if (amount >= 5) {
              amount -= 5;
              amount5++;
            }
          }
          this.result = `Выдача 200: ${amount200}, 100: ${amount100}, 50: ${amount50}, 10: ${amount10}, 5: ${amount5}, и ${amount} ${amount >= 2 ? 'рубля' : amount >= 1 ? 'рубль' : 'рублей'}`;
          this.ruble = 0;
        }
      },
      showMeme() {
        if (this.ruble === 0) {
          this.commision = 'У вас нет денег на счету ¯\\_(ツ)_/¯'
          return;
        }
        this.yes = 'yes.jpg';
        this.commision = `Ваша комиссия составила ${this.ruble} ₽`
        this.ruble = 0;
      }
    },
    computed: {
    }

  }).mount('#app')