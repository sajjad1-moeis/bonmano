import {Card, CardBody} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import React from "react";

const chartConfig = {
   height: 240,
   series: [{name: "Sales", data: [90, 100, 300, 320, 500, 350, 200, 230, 500]}],
   options: {
      chart: {toolbar: {show: true}},
      dataLabels: {enabled: false},
      colors: ["#A9DFD8"],
      plotOptions: {bar: {columnWidth: "40%", borderRadius: 6}},
      xaxis: {
         axisTicks: {show: false},
         axisBorder: {show: false},
         labels: {
            style: {
               colors: "#616161",
               fontSize: "12px",
               fontFamily: "inherit",
               fontWeight: 400,
            },
         },
         categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      yaxis: {
         labels: {
            style: {
               colors: "#616161",
               fontSize: "12px",
               fontFamily: "inherit",
               fontWeight: 400,
            },
         },
      },
      grid: {show: false},
      fill: {opacity: 0.2},
      tooltip: {theme: "dark"},
   },
};

export default function Charts({type, title}) {
   return (
      <Card className='bg-grayAdmin h-full rounded-md'>
         {title ? <div className='p-5 text-white '>فروش فروردین</div> : ""}
         <CardBody className='px-2 pb-0'>
            <Chart {...chartConfig} type={type} />
         </CardBody>
      </Card>
   );
}
