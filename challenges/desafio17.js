db.produtos.updateMany(
  { },
  {
    $set: {
      resumoProdutos: {
        franquia: "McDonalds",
        totalProdutos: db.produtos.countDocuments({}),
      },
    },
  },
);

db.produtos.aggregate([
  { $replaceRoot: { newRoot: "$resumoProdutos" } },
  { $limit: 1 },
]);