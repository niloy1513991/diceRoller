import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        className="h-[600px] w-[300px] xl:w-[1400px] lg:w-[1000px]  md:w-[700px] bg-[#f2f2f2]  mx-auto mt-2 rounded-lg
      flex flex-col"
      >
        <div
          className="title w-[290px]  h-32 mx-auto mb-8 mt-12 flex flex-col
        "
        >
          <h1 className="font-semibold text-5xl text-center mt-4 mb-2">
            DICE ROLL
          </h1>
          <h2 className="text-center text-xs">
            Don&apos;t have a physical dice?
          </h2>
          <h4 className="text-md text-center">Chill Human, Roll here!</h4>
        </div>
        <div className="image  h-auto w-72 mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}/images/landingPage.png`}
            alt="Landing Page"
          />
        </div>
        <div className="playBtn  h-20 w-72 mx-auto flex justify-center items-center">
          <Link to="/game">
            <button className="bg-[#000000] text-white h-auto w-auto p-3 rounded-lg text-lg font-semibold hover:bg-[#2d2d2d] active:text-slate-200">
              Play Now
            </button>
          </Link>
        </div>
        <div className="copyright  text-slate-600 text-center h-10 w-72 b mx-auto mt-8 flex justify-center items-center">
          <a href="http://niloykm.me/profileLinks/" target="_blank">
            Connect with &copy;Niloy
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
