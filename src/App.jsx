import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      <div className='w-screen min-h-screen  pl-[200px] pr-[200px] bg-[#353738] flex justify-center items-center'>
        <SignIn/>
        <SignUp/>
      </div>
    </>
  );
}

export default App;