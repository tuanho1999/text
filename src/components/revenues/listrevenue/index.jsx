import React from "react";
import "./index.css";
import { CanvasJSChart } from "canvasjs-react-charts";

function Rev(props) {
  const option1 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Báo Cáo Thống Kê Doanh Số năm 2022",
    },
    axisX: {
      title: "",
      reversed: true,
    },
    axisY: {
      title: "",
      includeZero: true,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: 315286266, label: "Doanh Thu" },
          { y: 228587206, label: "Chi Phí" },
          { y: 86699060, label: "Lợi Nhuận" },
        ],
      },
    ],
  };
  return (
    <div className="container-fluid">
      <div id="header-bar">
        <div id="task4">
          <b>Bảng thống kê doanh thu</b>
        </div>
        <div></div>
      </div>
      <div id="container-parents">
        <div id="rev-total">
          <div id="title-rev">
            <h1>315,286,266</h1>
            <h3 id="word">Doanh Thu</h3>
          </div>
          <div id="title-detail">
            <h3 id="sta-total">Thực tế: 62,692,485 đ </h3>
            <p>Dự kiến: 245,938,536 đ</p>
            <p>Đơn hàng huỷ: 7,374,773 đ (2.3%) </p>
          </div>
        </div>

        <div id="exp-total">
          <div id="title-exp">
            <h1>228,587,206 </h1>
            <h4>(72,5%)</h4>
            <h3 id="word-exp">Chi Phí</h3>
          </div>
          <div id="title-detail">
            <h3 id="sta-total">Giá vốn: 228,587,206 đ (72,5%)</h3>
            <p>Chi phí Ads: 4,000,000 đ (1,75%)</p>
          </div>
        </div>

        <div id="profit-total">
          <div id="title-profit">
            <h1>86,699,060 </h1>
            <h4>(27,4%)</h4>
            <h3 id="word-profit">Lợi nhuận</h3>
          </div>
          <div id="title-detail">
            <h3 id="sta-total">Thực tế: 71,345,234 đ</h3>
            <p>Dự kiến: 92,765,434 đ</p>
          </div>
        </div>
      </div>
      <div id="pie-chart">
        <CanvasJSChart options={option1} />
      </div>
      
      
      
    </div>
  );
}

export default Rev;
