import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../../helpers/constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  // creates a state called fullUrl which is binded to setFullUrl function
  // when something is passed into setFullUrl, it changes the value of fullUrl
  const [fullUrl, setFullUrl] = React.useState<string>("");

  // creating a handleSumbit async function that takes in an event e
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // this prevents the form from reloading when we submit
    // this gives time for the async function to take place
    e.preventDefault();
    try {
      // axios is a library used to perform http requests easily
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      // reseting the input box
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="h-full w-full rounded-xl p-20 backdrop-brightness-100">
          <h2 className="text-gray-700 text-5xl text-center pb-2">
            URL Shortner
          </h2>
          <p className="text-gray-700 text-center pb-2 text-xl font-extralight">
            Please paste your untidy link here
          </p>
          <p className="text-gray-700 text-center pb-4 text-sm font-thin">
            free tool to shorten a URL or reduce link
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500"
                  // This input field is a controlled component in React.
                  // Controlled components bind the input's value to React state,
                  // making React the single source of truth for the input's value.
                  //
                  // Without `value`, the input field would manage its own state, independent of React.
                  // By specifying `value={fullUrl}`, we ensure that React fully controls and reflects changes in the input's value.
                  //
                  // `e.target` represents the entire DOM element, which is unnecessary to store in React state.
                  // React state should be kept simple and store only the specific data we care about, like `e.target.value` in this case.
                  value={fullUrl} // Ties the input field's value directly to React state
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setFullUrl(e.target.value) // Updates React state with the value typed by the user
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
