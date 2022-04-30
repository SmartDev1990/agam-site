import ApexCharts from "apexcharts";

class Chart {
  static init() {
    var options = {
      series: [16, 25, 7, 7, 45],
      labels: [
        "Token Sale : 16% (80,000,000 AGA)",
        "Liquidity : 25% (125,000,000 AGA)",
        "Team & Partner : 7% (35,000,000 AGA)",
        "Airdrop : 7% (35,000,000 AGA)",
        "Ecosystem : 45% (225,000,000 AGA)",
      ],
      chart: {
        width: 530,
        type: "donut",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#0662c5",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var options2 = {
      series: [33.3, 33.3, 33.3],
      labels: [
        "33.3% Marketing & Development",
        "33.3% Investors Reward",
        "33.3% Liquidity Providers"
      ],
      chart: {
        width: 470,
        type: "donut",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#0662c5",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "97%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();
  }
}

export default Chart;
