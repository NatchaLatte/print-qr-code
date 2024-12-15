import { useState } from "react";
import "./App.css";
import Wave from "react-wavify";

export default function App() {
  const [stickerSize, setStickerSize] = useState([
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      width: 30,
      height: 30,
    },
    {
      ref_id: "40f93339-fd16-4ff8-a8a3-74d0002d3934",
      width: 45,
      height: 45,
    },
  ]);

  const [productionLine, setProductionLine] = useState([
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      name: "F1",
    },
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      name: "F2",
    },
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      name: "R1",
    },
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      name: "R2",
    },
    {
      ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
      name: "EA1",
    },
  ]);

  const [productionProcess, setProductionProcess] = useState([]);

  const handlePrintQRCode = () => {
    window.print()
  }

  const handleStickerSize = (event) => {
    console.log(event.target.value)
  }

  const handleProductionLine = (event) => {
    const results = [
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
      {
        ref_id: "f9021462-aa32-45ac-a134-39cc41c9bd0a",
        machine_code: "EA2WKP010",
        part_name: "SUPERVISOR EA2(1)",
        source_url: "https://www.youtube.com/@NatchaLatteOfficial",
      },
    ]
    setProductionProcess(results)
    console.log(event.target.value)
  }
  return (
    <div className="flex flex-col h-screen">
      <h1 className="font-bold text-5xl text-center mt-56 mb-5 text-blue-500">
        Print QR Code
      </h1>
      <div className="flex flex-row justify-center mb-56">
        <div className="flex flex-col justify-start items-center h-full">
          <label className="form-control w-full max-w-xs mb-5">
            <div className="label">
              <span className="label-text">Sticker size (CM)</span>
            </div>
            <select onChange={handleStickerSize} className="select select-bordered">
              {stickerSize.map((data, index) => {
                return (
                  <option key={index} value={`${data.width} x ${data.height}`}>
                    {data.width} x {data.height}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="form-control w-full max-w-xs mb-5">
            <div className="label">
              <span className="label-text">Production line</span>
            </div>
            <select onChange={handleProductionLine} className="select select-bordered">
              {productionLine.map((data, index) => {
                return <option key={index} value={data.name}>{data.name}</option>;
              })}
            </select>
          </label>
          <button onClick={handlePrintQRCode} className="btn w-full mb-5 btn-primary uppercase">
            Print
          </button>
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Production process</div>
              <div className="stat-value">{productionProcess.length}</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Select procress</div>
              <div className="stat-value">0</div>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal h-96"></div>
        <div className="flex flex-col justify-start items-center h-full">
          <div className="h-96 overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Machine code</th>
                  <th>Part name</th>
                </tr>
              </thead>
              <tbody>
                {productionProcess.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{data.machine_code}</td>
                      <td>{data.part_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="relative">
        <Wave
          fill="#0D92F4"
          paused={false}
          style={{ display: "flex", position: "fixed" }}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 10,
          }}
        />
      </div>
    </div>
  );
}
