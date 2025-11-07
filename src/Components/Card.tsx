import peralImage from "../pearl.jpg"

//Component Card
const Card = () => {
  return (
    <div className="border-2 color-white w-[300px] h-[275px] bg-[#424141]">
      <h1 className="text-center text-white text-2xl font-['UnifrakturMaguntia']">Pearls</h1>
      <p className="text-center  text-white text-2xl font-['UnifrakturMaguntia']">Those are pearls</p>
      <img className="pt-10" src={peralImage}></img>
    </div>
  );
};

export default Card;
