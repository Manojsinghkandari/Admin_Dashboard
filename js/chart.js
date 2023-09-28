const canvas1 = document.querySelector("#canvas-1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.querySelector("#canvas-2");
const ctx2 = canvas2.getContext("2d");

const canvas3 = document.querySelector("#canvas-3");
const ctx3 = canvas3.getContext("2d");

const canvas4 = document.querySelector("#canvas-4");
const ctx4 = canvas4.getContext("2d");

const barChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Anusha", "Manoj", "Rahul", "Shubham", "Priya"],
    datasets: [
      {
        label: "Colors",
        data: [13, 50, 25, 41, 11],
        backgroundColor: ["red", "green", "orange", "blue", "purple"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
      {
        label: "Programming",
        data: [11, 41, 30, 50, 13],
        backgroundColor: ["Java", "JavaScript", "Python", "Ruby", "Flutter"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
  },
});

const lineChart = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Red", "Green", "Orange", "Blue", "Purple"],
    datasets: [
      {
        label: "Colors",
        data: [13, 50, 25, 41, 11],
        backgroundColor: ["red", "green", "orange", "blue", "purple"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
      {
        label: "Programming",
        data: [11, 41, 30, 50, 13],
        backgroundColor: ["Java", "JavaScript", "Python", "Ruby", "Flutter"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
  },
});

const pieChart = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["Red", "Green", "Orange", "Blue", "Purple"],
    datasets: [
      {
        label: "Colors",
        data: [13, 50, 25, 41, 5],
        backgroundColor: ["red", "green", "orange", "blue", "purple"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
      // {
      //     label: 'Programming',
      //     data: [11, 41, 30, 50, 13],
      //     backgroundColor: ['Java', 'JavaScript', 'Python', 'Ruby', 'Flutter'],
      //     borderColor: [
      //         'purple',
      //         'blue',
      //         'green',
      //         'orange',
      //         'red'
      //     ],
      //     borderWidth: 1
      // },
    ],
  },
  options: {
    responsive: false,
  },
});

const doughnutChart = new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["Red", "Green", "Orange", "Blue", "Purple"],
    datasets: [
      {
        label: "Colors",
        data: [13, 50, 25, 41, 11],
        backgroundColor: ["red", "green", "orange", "blue", "purple"],
        borderColor: ["purple", "blue", "green", "orange", "red"],
        borderWidth: 1,
      },
      // {
      //     label: 'Programming',
      //     data: [11, 41, 30, 50, 13],
      //     backgroundColor: ['Java', 'JavaScript', 'Python', 'Ruby', 'Flutter'],
      //     borderColor: [
      //         'purple',
      //         'blue',
      //         'green',
      //         'orange',
      //         'red'
      //     ],
      //     borderWidth: 1
      // },
    ],
  },
  options: {
    responsive: false,
  },
});
