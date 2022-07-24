import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import "./Chart.css"

function ChartSection() {
  const [sellerName, setSellerName] = useState({})
  const [sellerData, setSellerData] = useState({})
  const [officialWarranty, setofficialWarranty] = useState({})


  useEffect(() => {
    const seller_name = [];
    const seller_data = [];
    const official_warranty = [];

    axios.get("./data.json")
      .then(res => {
        console.log("response", res)
        res.data.map(item => {
          console.log("item", item)
          seller_name.push(item.seller_name);
          seller_data.push(item.seller_name.length)
          seller_data.push(item.official_warranty)
        })
        setSellerName(seller_name)
        setSellerData(seller_data)
        setofficialWarranty(seller_data)
      }).catch(e => {
        alert(e);
      })
  }, [])
  return (
    <React.Fragment>
      <div className="container chartSectoin">
        <div className="row">
          <div className="col-md-6 chart_left">
            <h3 className="mt-3">Sources</h3>
            <Chart
              type="pie"
              width={500}
              height={350}
              series={sellerData}
              options={{
                labels: sellerName
              }}
            >
            </Chart>
          </div>
          <div className="col-md-6 chart_right">
            <h3 className="mt-3">Conditions</h3>
            <Chart
              type="bar"
              width={500}
              height={350}

              series={[{
                name: "Social Media Subscriber",
                data: [5000, 10000, 15000, 20000, 25000, 30000]
              }]}

              options={officialWarranty}
            >
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChartSection