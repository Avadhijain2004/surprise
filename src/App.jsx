import { Link } from "react-router-dom";
function App() {

  return (
   <>
   <div className="flex items-center justify-center h-screen">
    <Link to='/one'>
    <button className="text-xl border border-black p-4 bg-black text-white rounded-full font-medium hover:bg-slate-900"
    >
      Click me
      </button>
    </Link>
   </div>
   </>
  );
}

export default App;
