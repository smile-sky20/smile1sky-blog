import Link from 'next/link'
import MochaBtn from '../MochaBtn'

export function HomeCenter() {
  return (
    <>
      <div className="favorite flex items-center text-mocha text-[42px] font-[700] tracking-[3px] max-md:text-[24px]">
        My Favorites
      </div>
      <div
        className="favoBd mt-[60px] w-[1050px] flex flex-col justify-center
        max-md:mt-[30px] max-md:w-[90vw]
      "
      >
        <div
          className="favoTop flex justify-center 
          max-lg:flex-col"
        >
          <div className="favotopL flex-1 flex justify-center items-center">
            <div
              className="favotopLin animate__animated animate__fadeInDown flex  flex-col justify-around items-end text-right w-[400px] h-[200px] text-accents8
              max-lg:justify-evenly max-lg:items-center max-lg:text-center
            "
            >
              <h1 className="max-md:text-[16px]">努力向上</h1>
              <p>探索新颖之事物，开拓明亮之眼界，端正自身之修养</p>
              <div className="btn mt-6 w-[180px] h-[50px] max-md:w-[120px] max-md:h-[30px]">
                <MochaBtn>
                  <Link href="/">探索</Link>
                </MochaBtn>
              </div>
            </div>
          </div>
          <div
            className="favotopR flex-1 overflow-hidden
            max-lg:flex max-lg:justify-center"
          >
            <div className="favoOut w-[490px] flex justify-center items-center transition-transform duration-500 hover:scale-125">
              <img
                src="/home/center1.jpg"
                className="img_box animate__animated animate__fadeInDown"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="favoBt mt-[60px] w-[1050px] flex justify-center
        max-lg:flex-col-reverse"
      >
        <div className="favoBtL flex-1 flex justify-end overflow-hidden max-lg:justify-center">
          <div className="favoOut w-[490px] flex justify-center items-center transition-transform duration-500 hover:scale-125">
            <img
              src="/home/center2.jpg"
              className="img_box animate__animated animate__fadeInDown transition-all duration-500"
              alt=""
            />
          </div>
        </div>
        <div className="favoBtR flex-1 flex justify-center items-center">
          <div
            className="favoBtRin animate__animated animate__fadeInDown flex  flex-col justify-around text-left w-[400px] h-[200px] text-accents8
            max-lg:justify-evenly max-lg:items-center"
          >
            <h1 className="max-md:text-[16px]">与梦前行</h1>
            <p>新时代青年扬帆起航，昂扬奋进！</p>

            <div className="btn mt-6 w-[180px] h-[50px] max-md:w-[120px] max-md:h-[30px]">
              <MochaBtn>
                <Link href="/">前进！</Link>
              </MochaBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeCenter
