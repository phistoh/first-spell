ServerEvents.recipes((event) => {
  event.remove({ id: "exposure:color_film_developing" });
  event.custom({
    type: "exposure:film_developing",
    film: {
      tag: "exposure:color_film_rolls",
    },
    ingredients: [
      {
        "item": "supplementaries:lumisene_bottle"
      }
    ],
    result: {
      id: "exposure:developed_color_film",
    },
  });

  event.remove({ id: "exposure:black_and_white_film_developing" });
  event.custom({
    type: "exposure:film_developing",
    film: {
      tag: "exposure:black_and_white_film_rolls",
    },
    ingredients: [
      {
        "item": "supplementaries:lumisene_bottle"
      }
    ],
    result: {
      id: "exposure:developed_black_and_white_film",
    },
  });
});
