var car = [
  {
    Make: "Mazada",

    Model: "Rx7",

    Year: "1991",

    Price: "18,687"
  },

  {
    Make: "Nissan",

    Model: "GT-R Premium",

    Year: "2020",

    Price: "119,991"
  },

  {
    Make: "Dodge",

    Model: "Challenger",

    Year: "2021",

    Price: "29,788"
  },

  {
    Make: "Jeep",

    Model: "Renegade Latitude",

    Year: "2022",

    Price: "26,991"
  },

  {
    Make: "Mazada",

    Model: "MX-5 Miata",

    Year: "2023",

    Price: "34,490"
  }
];

function loadData() {
  var body = document.getElementById("tBodyData");

  car.forEach((x) => {
    var tr =
      `<tr>

<td>` +
      x.Make +
      `</td>

<td>` +
      x.Model +
      `</td>

<td>` +
      x.Year +
      `</td>

<td>` +
      x.Price +
      `</td>

</tr>`;

    body.innerHTML += tr;
  });
}