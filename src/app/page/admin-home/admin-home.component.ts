import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { element } from 'protractor';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
//  import 'rxjs/add/observable/throw';
//import { throwError } from 'rxjs';
import { throwError, throwError as _throw } from 'rxjs';
// import { EChartOption } from 'echarts';
// import { Observable } from 'rxjs/internal/Observable';
import * as echarts from 'echarts';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  adminShopName:any
  chart: any;
  smallChart:any;
  smallChart1:any;
  piechart:any;
  // RequestOptions:any
  constructor(private httpclient:HttpClient,public router: Router) { }

  ngOnInit() {
    let newAdminDetails = JSON.parse(window.localStorage.getItem("formdata"));
    this.adminShopName = _.cloneDeep(newAdminDetails.userName);
    this.Charts();
    // Set the chart options and render the chart    
  }
  Charts(){
    this.chart = echarts.init(document.getElementById('line-chart')as HTMLCanvasElement);
    this.smallChart = echarts.init(document.getElementById('order-chart')as HTMLCanvasElement);
    this.smallChart1 = echarts.init(document.getElementById('order-chart1')as HTMLCanvasElement);
    this.piechart = echarts.init(document.getElementById('pie-chart')as HTMLCanvasElement);
    // Configure the chart options
    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      legend: {
          textStyle: {
            color: 'rgb(70, 105, 250)' // red
          }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 30,
            textStyle: {
              color: 'rgb(203 213 225)',
            }
          },
          data: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          nameTextStyle: {
            color: 'rgb(203, 213, 225)' // red
          },
          position: 'right',
          axisLabel: {
            formatter: '{value} ml',
            textStyle: {
                       color: 'rgb(203 213 225)',
            }, 
          }
          
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          nameTextStyle: {
            color: 'rgb(203, 213, 225)' // red
          },
          position: 'left',
          axisLabel: {
            formatter: '{value} °C',
            textStyle: {
              color: 'rgb(203 213 225)',
            }
          }
        }
      ],
     
      series: [
        {
          name: 'Precipitation',
          type: 'bar',
          itemStyle: {
            color: "rgb(12, 231, 250)" // red
          },
          
          yAxisIndex: 0,
          data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 100.7, 112.8, 124.0, 149.3]
        },
        {
          name: 'Temperature2',
          type: 'line',
          itemStyle: {
            color: 'rgb(70, 105, 250)' // red
          },
           
          smooth: true,
          yAxisIndex: 1,
          data: [
            6.0,
            10.2,
            10.3,
            11.5,
            10.3,
            13.2,
            14.3,
            16.4,
            18.0,
            19.5,
            20.0,
            21.2
          ]
        }
        
      ]
    };
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          rotate: 30,
          textStyle: {
            color: 'rgb(203 213 225)',
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgb(203 213 225)',
          }
        },
      },
      grid: { //left: '100%',
              //right: '100%',
               bottom: '20%',
               top: '20%',
              containLabel: true
         },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
    const option1 = {
      grid: { 
        bottom: '20%',
        top: '20%',
             containLabel: true
        },
     dataset: {
       dimensions: ['product', '2015', '2016', '2017'],
       source: [
         { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
         { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
         { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
         { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
       ]
     },
     xAxis: { type: 'category',
     axisLabel: {
      textStyle: {
        color: 'rgb(203 213 225)',
      }
    }, },
     yAxis: {
      axisLabel: {
        textStyle: {
          color: 'rgb(203 213 225)',
        }
      },
     },
     // Declare several bar series, each will be mapped
     // to a column of dataset.source by default.
     series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
   };
   const option2 = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      textStyle: {
        color:"#cbd5e1" // set the color of the title text
      },
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
   
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '30%',
        center: ['15%', '50%'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: '30%',
        center: ['50%', '50%'],
        data: [
          { value: 1501, name: 'Search Engine' },
          { value: 455, name: 'Direct' },
          { value: 780, name: 'Email' },
          { value: 984, name: 'Union Ads' },
          { value: 400, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: '30%',
        center: ['85%', '50%'],
        data: [
          { value: 1602, name: 'Search Engine' },
          { value: 635, name: 'Direct' },
          { value: 680, name: 'Email' },
          { value: 384, name: 'Union Ads' },
          { value: 400, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
   }
    //this.piechart.setOption
     this.piechart.setOption(option2);
     this.smallChart1.setOption(option1);
     this.smallChart.setOption(option);
     this.chart.setOption(options);
     
  }

  
 }
