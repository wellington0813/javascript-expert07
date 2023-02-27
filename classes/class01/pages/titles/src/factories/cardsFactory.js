import CardsController from "./../controllers/cardsController.js";
import CardsView from "./../views/cardsView.js";
import CardsService from "./../services/cardsService.js";

const cardListWorker = new Worker(`./src/workers/cardListWorker.js`, {
  type: "module",
});

cardListWorker.onmessage = (msg) => console.log("processo principal", msg);

cardListWorker.postMessage("FUNFO TRUTA");

const [rootPath] = window.location.href.split("/pages/");
const factory = {
  async initalize() {
    return CardsController.initialize({
      view: new CardsView(),
      service: new CardsService({ dbUrl: `${rootPath}/assets/database.json` }),
    });
  },
};

export default factory;