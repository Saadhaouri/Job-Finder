import badrequest from "../assets/badrequest.png";
const PageNotFound = () => {
  return (
    <>
      <div className=" text-center mt-8 flex grid-rows-2 justify-center">
        <img src={badrequest} alt="" />
      </div>
      <h1 className="text-[56px] text-center   font-extrabold text-blueColor">
        PAGE NO TFOUND
      </h1>
    </>
  );
};

export default PageNotFound;
