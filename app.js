(function() {

  angular.module("ShoppingListCheckOff",[])
          .controller("ToBuyController",ToBuyController)
          .controller("AlreadyBoughtController",AlreadyBoughtController)
          .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

          ToBuyController.$inject = ["ShoppingListCheckOffService"];
          function ToBuyController(ShoppingListCheckOffService) {
            var toBuy = this;

            toBuy.items = ShoppingListCheckOffService.getitemsToBuy();

            toBuy.moveToBoughtList = function(itemIndex) {
              ShoppingListCheckOffService.moveToBoughtList(itemIndex);
            }

          };

          AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
          function AlreadyBoughtController(ShoppingListCheckOffService) {
            var alreadyBought = this;

            alreadyBought.items = ShoppingListCheckOffService.getitemsAlreadyBought();
          };


          function ShoppingListCheckOffService() {
            var itemToBuy = [{ name: "cookies", quantity: 4 },
                              { name: "chips", quantity: 2 },
                              { name: "apple", quantity: 12 },
                              { name: "Almond bar", quantity: 5 },
                              { name: "chocolate bar", quantity: 3 }];
            var itemBought = [];

            this.getitemsToBuy = function () {
              return itemToBuy;
            }

            this.getitemsAlreadyBought = function () {
              return itemBought;
            }

            this.moveToBoughtList = function(itemIndex){

              itemBought.push(itemToBuy[itemIndex]);
              itemToBuy.splice(itemIndex,1);
            }
          };


















})();
