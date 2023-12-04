export default function RegisterPage() {
  return (
    <div className="">
        <section className="mt-8 h-full flex flex-wrap justify-center ">
            <form className="grid place-items-center" action="">
                <h1 className="text-center text-primary text-4xl">
                    Register
                </h1><input className="h-10 items-center m-1 w-72 border-2 rounded-lg" type="email" name="" id="" placeholder=" Email" />
                <input className="h-10 items-center m-1 w-72 border-2 rounded-lg" type="password" name="" id="" placeholder=" Password" />
                <button className="h-10 items-center m-1 w-72 border-2  rounded-lg flex justify-center gap-4 bg-primary" type="submit">Register</button>
                <div className="text-gray-400">
                    Or login with provider
                </div>
                <button className="h-10 items-center m-1 w-72 border-2 rounded-lg flex justify-center gap-4">
                    <img src="/google.png" height={24} width={24} alt="..." />
                    Login with google
                </button>
            </form>
        </section>
    </div>

    // <div className="mt-8">
    //   <section className="">
    //     <h1 className="text-center text-primary text-4xl">Register</h1>
    //     <form className="block max-w-xs mx-auto" action="">
    //       <input className="" type="email" name="" id="" placeholder=" Email" />
    //       <input
    //         className=""
    //         type="password"
    //         name=""
    //         id=""
    //         placeholder=" Password"
    //       />
    //       <button type="submit">Register</button>
    //       <div className="">Or login with provider</div>
    //       <button className="flex gap-4 justify-center">
    //         <img src="/google.png" height={24} width={24} alt="..." />
    //         Login with google
    //       </button>
    //     </form>
    //   </section>
    // </div>
  );
}
