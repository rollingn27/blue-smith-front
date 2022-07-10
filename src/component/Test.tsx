import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Test() {
  const notify = () => {
    toast.success('Login Success', {
      // type: 'success',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });

    // toast.("Wow so easy!")
  }
  return(<button onClick={notify}>Notify!</button>);
}



