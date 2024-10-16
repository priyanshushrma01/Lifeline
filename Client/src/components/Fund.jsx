import Button from './Button'; 

export function Fund() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="https://s3-img.pixpa.com/com/large/629887/1655105668-289151-rizvi-rahman-lucidexplorecom-2.jpg"
        alt="People helping each other"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          A Little Care Can Change the World
        </h1>
        {/* Button with onClick handler */}
        <Button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg"
          onClick={handleButtonClick}
        >
          Start a Fundraiser!
        </Button>
        <p className="mt-6 text-center text-lg">
          For Individuals and charities. No startup fees. No hidden fees.
        </p>
      </div>
    </div>
  );
}

export default Fund;
