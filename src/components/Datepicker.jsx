// 日期选择器组件
import { DatePicker } from "antd";
import { Space } from "antd/lib";
////////////////////时间选择器,考虑单独封装成一个组件！//////////
const {RangePicker}=DatePicker;


const DateRangepicker=({dateFliter})=>{
    return<Space style={{marginBottom:"25px"}}>
       <div style={{fontWeight:"700",marginRight:"20px",fontSize:"20px"}}>选择查看时间段</div>
       <RangePicker
         placeholder={["开始时间","结束时间"]}
         showTime={{
         format: 'HH:mm',
         }}
         format="YYYY-MM-DD HH:mm:ss"
         onChange={(value, dateString) => {
         dateFliter(dateString);
        }}
      />
    </Space>
}

export default DateRangepicker;