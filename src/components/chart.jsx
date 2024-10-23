// 图表组件
//使用库：echarts
import * as echarts from 'echarts';
import { useEffect } from 'react';

const  Chart = ({books}) => {
  /////////////////////////////////////////下面区域需要做区域数据替换////////////////////////////////
  useEffect(
   ()=>{
    var chartDom = document.getElementById('mainchart');
    var myChart = echarts.init(chartDom, 'dark');
    var option;
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '销量统计',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data:books
        }
      ]
    };
    
    option && myChart.setOption(option);
    }
    ,[books]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  return <div id='mainchart' style={{width:"900px",height:"600px",margin:"10px auto"}}></div>
}
export default Chart;