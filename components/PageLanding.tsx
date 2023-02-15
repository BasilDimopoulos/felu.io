export default function PageLanding(props) {
  return (
    <div className="w-screen h-screen bg-[#201E1E] flex flex-col items-center pt-14">
      <div className="h-[776px] bg-[#201E1E] p-14 container flex flex-col justify-center items-center">
        <div
          style={{ backgroundImage: `url(${props.srcImage})` }}
          className="w-full bg-slate-500 h-full bg-cover bg-center rounded-xl"
        ></div>
        <div className="lg:w-[68%] sm:w-[80%] w-[105%] h-32 mt-[-60px] bg-[#201E1E] flex flex-col justify-center rounded-xl">
          <h1 className="text-white lg:text-5xl text-4xl uppercase font-anton text-center mb-1 sm:mt-2 mt-10">
            {props.title}
          </h1>
          <p className="lg:text-lg text-md text-white text-center">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
