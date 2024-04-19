import React, { useEffect, useState } from "react";
import { TableData } from "../data/TableData";
import { useSelector } from "react-redux";

const Table = () => {
  const [tableDetails, setTableDetails] = useState(TableData);
  const [searchParameters, setSearchParameters] = useState(TableData);

  const { query } = useSelector((state) => state.searchReducer);

  console.log(query);

  const filterData = () => {
    if (searchParameters.length == 0) setTableDetails(TableData);
    let filteredData = tableDetails.filter(({ id, name }) => name == query);
    setSearchParameters(filteredData);
  };

  useEffect(() => {
    filterData();
  }, [query.length > 0, query]);

  //   console.log("Filtered Data", searchParameters);

  return (
    <div>
      {/* <p>{query}</p> */}
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        {/* <tr> */}
        {searchParameters.map(({ id, name, age }) => (
          <tr key={id}>
            <td style={{ padding: "10px" }}>{id}</td>
            <td style={{ padding: "10px" }}>{name}</td>
            <td style={{ padding: "10px" }}>{age}</td>
          </tr>
        ))}
        {/* </tr> */}
      </table>
    </div>
  );
};

export default Table;

// Need to filter based on name,
// store it in a diff varibale and map that variable
