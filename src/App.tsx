import RoutesMain from "./RoutesMain/RoutesMain";
import { Flip, ToastContainer } from "react-toastify";
import Global from "./styles/global";

function App() {
  return (
    <div>
      <RoutesMain />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme={"dark"}
        transition={Flip}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Global />
    </div>
  );
}

export default App;
