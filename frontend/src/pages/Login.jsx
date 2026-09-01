import { useContext, useState } from "react";
import { ShopContext } from "../context/Products";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLoginShow } = useContext(ShopContext);
  const [move, setMove] = useState(false);
  const [up, setUp] = useState(false);
  const [upp, setUpp] = useState(false);
  const [upr, setUpr] = useState(false);
  const [uppr, setUppr] = useState(false);
  const [upn, setUpn] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [name, setName] = useState("");

  const setOff = () => {
    setUp(false);
    setUpp(false);
    setMove(true);
    setEmail("");
    setPass("");
  };
  const setOffs = () => {
    setUpr(false);
    setUppr(false);
    setUpn(false);
    setMove(false);
    setNewEmail("");
    setNewPass("");
    setName("");
  };
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate("/")}
      className={`h-full w-full left-0 z-50 top-0 items-center flex justify-center absolute backdrop-blur-xs bg-accent/70`}
    >
      <div onClick={(e)=>e.stopPropagation()} className="text-[#222222] gap-8 flex justify-center overflow-hidden  p-5 items-center bg-white opacity-100 text-[5px] relative">
        <div
          className={`bg-[#202122] z-50 absolute h-120 duration-[800ms] ${
            move ? "translate-x-[-400px] pl-200" : "translate-x-[400px] pr-200"
          }`}
        ></div>
        <div
          className={`text-white z-50 top-20 absolute h-120 duration-[200ms] ${move ? "translate-x-[450px] opacity-0" : "translate-x-[170px] "}`}
        >
          <h1 className="text-2xl">Welcome Back</h1>
          <br />
          <h3 className="text-[10px] w-50">
            To keep connected with us please login with your personal info
          </h3>
        </div>
        <div
          className={`text-white z-50 top-20 absolute h-120 duration-[200ms] ${move ? "translate-x-[-170px] " : "translate-x-[-450px] opacity-0"}`}
        >
          <h1 className="text-2xl w-40">Continue with Venanco</h1>
          <br />
          <h3 className="text-[10px] w-50">
            Enter your personal details and start journey with us
          </h3>
        </div>
        <button
          onClick={()=>navigate("/")}
          className="text-[#222222] hover:text-gray-800 z-50 ease-in-out duration-150 bg-gray-50  hover:bg-gray-300 text-[15px] w-4 h-4 justify-center flex items-center rounded absolute top-[25px] right-[25px] "
        >
          <X />
        </button>
        <div className="login flex flex-col justify-start gap-5 w-75 bg-white h-100 relative">
          <div className="text-[20px] w-fit flex flex-col items-center font-bold">
            Login <hr className="border-2 rounded w-[50%]" />
          </div>
          <div className="mt-8 flex justify-center gap-6 flex-col">
            <div className=" relative">
              <p
                onClick={() => setUp(true)}
                className={`select-none absolute duration-300 top-[-30px] ${up ? "translate-y-[10px] left-0 text-[#222222] select-none text-[10px]" : "translate-y-[41px] cursor-pointer text-[12px] left-4 text-[#666666]"}`}
              >
                Enter Email
              </p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => setUp(true)}
                className="cursor-pointer text-[14px] py-2 w-full border-1 border-input outline-none p-[3px]"
                type="email"
              />
            </div>
            <div className=" relative">
              <p
                onClick={() => setUpp(true)}
                className={`select-none absolute duration-300  top-[-30px] ${upp ? "translate-y-[10px] left-0 text-[#222222] select-none text-[10px]" : "translate-y-[41px] cursor-pointer text-[12px] left-4 text-[#666666]"}`}
              >
                Enter Password
              </p>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onClick={() => setUpp(true)}
                className="cursor-pointer text-[14px] py-2 border-1 border-input w-full  outline-none p-[3px]"
                type="password"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-2 bottom-0 flex-col absolute">
            <button className="uppercase text-[12px] h-10 border-[0.9px] ease-in-out duration-150 text-[10px]  hover:bg-[#333333] border-border p-[3px] outline-none w-full bg-primary text-primary-foreground">
              Login
            </button>
            <button
              onClick={() => setOff()}
              className="uppercase text-[12px] h-10 text-[10px] bg-secondary text-secondary-foreground hover:bg-[#eaeaea] ease-in-out duration-150 p-[3px] outline-none w-full"
            >
              SignUp
            </button>
          </div>
        </div>

        <div className="login flex flex-col justify-start gap-5 w-75 bg-white h-100 relative">
          <div className="text-[20px] w-fit flex flex-col items-center font-bold">
            Sign Up <hr className="border-2 rounded w-[50%]" />
          </div>
          <div className="mt-8 flex justify-center gap-6 flex-col">
            <div className=" relative">
              <p
                onClick={() => setUpn(true)}
                className={`select-none absolute duration-300 top-[-30px] ${upn ? "translate-y-[10px] left-0 text-[#222222] select-none text-[10px]" : "translate-y-[41px] cursor-pointer text-[12px] left-4 text-[#666666]"}`}
              >
                Enter Name
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={() => setUpn(true)}
                className="cursor-pointer text-[14px] py-2  w-full border-1 border-input outline-none p-[3px]"
                type="text"
              />
            </div>
            <div className=" relative">
              <p
                onClick={() => setUppr(true)}
                className={`select-none absolute duration-300 top-[-30px] ${uppr ? "translate-y-[10px] left-0 text-[#222222] select-none text-[10px]" : "translate-y-[41px] cursor-pointer text-[12px] left-4 text-[#666666]"}`}
              >
                Enter Email
              </p>
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onClick={() => setUppr(true)}
                className="cursor-pointer text-[14px] py-2  w-full border-1 border-input outline-none p-[3px]"
                type="email"
              />
            </div>
            <div className=" relative">
              <p
                onClick={() => setUpr(true)}
                className={`select-none absolute duration-300 top-[-30px] ${upr ? "translate-y-[10px] left-0 text-[#222222] select-none text-[10px]" : "translate-y-[41px] cursor-pointer text-[12px] left-4 text-[#666666]"}`}
              >
                Enter Password
              </p>
              <input
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                onClick={() => setUpr(true)}
                className="cursor-pointer text-[14px] py-2  w-full border-1 border-input outline-none p-[3px]"
                type="password"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-2 bottom-0 flex-col absolute">
            <button className="uppercase text-[12px] h-10 border-[0.9px] ease-in-out duration-150 text-primary  hover:bg-[#333333] border-primary p-[3px] outline-none w-full bg-primary text-white">
              SignUp
            </button>
            <button
              onClick={() => setOffs()}
              className="uppercase text-[12px] h-10 text-secondary-foreground te bg-secondary hover:bg-[#eaeaea] ease-in-out duration-150 p-[3px] outline-none w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
