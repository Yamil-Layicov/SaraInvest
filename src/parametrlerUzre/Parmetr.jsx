import React from "react";
import { data } from "../buildData/data";
import { useState } from "react";

const Parmetr = () => {
  const [filtersData, setFiltersData] = useState([
    {
      title: "Bina-1",
      name: "Sara Invest MMC",
      allRommsNum: "Umumi otaq sayi: 12",
    },
  ]);
  const [floorSel, setFloorSet] = useState("");

  const handleFiltered = (e) => {
    e.preventDefault();
    setFiltersData(data.filter((d) => d.id == floorSel));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFloorSet(e.target.value);
    console.log(floorSel);
  };

  return (
    <>
      <div className="parametrContent">
        <div className="leftSide">
          <form action="" className="">
            <div className="boxSearch">
              <label htmlFor="">Bina Nomresini sec</label>
              <select onChange={(e) => handleChange(e)}>
                {data.map((d) => (
                  <option>{d.id}</option>
                ))}
              </select>
            </div>
            <button onClick={handleFiltered} className="searchBtn">
              Axtar
            </button>
          </form>
        </div>
        <div className="rightTable">
          <table className="responsiveTbl">
            <thead className="tableHead">
              <tr>
                <th>Bina No:</th>
                <th>Bina adi</th>
                <th>Otaq sayi</th>
                <th>Sahesi</th>
                <th>Sahibkar</th>
                <th>----</th>
                <th>----</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-title="Chord">a</td>
                <td data-title="1st Note">C</td>
                <td data-title="2nd Note">G</td>
                <td data-title="3rd Note">C</td>
                <td data-title="4th Note">-</td>
                <td data-title="5th Note">-</td>
                <td data-title="6th Note">-</td>
              </tr>
              <tr>
                <td>G</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td data-title="3rd Note">G</td>
                <td data-title="4th Note">A</td>
                <td data-title="5th Note">-</td>
                <td data-title="6th Note">-</td>
                <td data-title="Equal Chord1">-</td>
                <td data-title="Equal Chord2">-</td>
                <td data-title="Equal Chord3">-</td>
              </tr>
              <tr>
                <td data-title="3rd Note">G</td>
                <td data-title="4th Note">D</td>
                <td data-title="5th Note">-</td>
                <td data-title="6th Note">-</td>
                <td data-title="Equal Chord1">-</td>
                <td data-title="Equal Chord2">-</td>
                <td data-title="Equal Chord3">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        {filtersData.map((fil) => (
          <ul key={fil.id}>
            <li>{fil.title}</li>
            <li>{fil.name}</li>
            <li>{fil.allRommsNum}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Parmetr;
