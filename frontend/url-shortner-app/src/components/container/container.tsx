import * as React from "react";
import FormContainer from "./formContainer/formContainer";
import axios from "axios";
import { urlData } from "../../interface/urlData";
import DataTable from "./dataTable/dataTable";
import { serverUrl } from "../../helpers/constants";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  // initializes a piece of state called data which is an empty array by default
  const [data, setData] = React.useState<urlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);
  const updateReloadState = (): void => {
    setReload(true);
  };
  const fetchTableData = async () => {
    // response variable is a React.response type of object
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The Response from server is: ", response);
    // this data is not the same as the data state that we initialized
    // this is a inbuilt function of any response, that contains array of all the document objects
    setData(response.data);
  };
  // if fetchTableData was called outside the useEffect hook, it would run on each render
  // redundant loading of data which may trigger renders, effectively crashing the website
  // the second parameter in the useEffect Hook is an array
  // if this array is not passed, it will run the function on each render
  // empty array means it will run only once
  // any dependency that is passed into the array makes it so that, it runs the function everytime the dependency is updated
  React.useEffect(() => {
    fetchTableData();
    setReload(false);
  }, [reload]);
  return (
    <div>
      <FormContainer updateReloadState={updateReloadState} />
      {/* DataTable takes one parameter called props, that is this data that we are passing 
      since props is of the interface data: [], we pass data:{data} */}
      <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  );
};

export default Container;
