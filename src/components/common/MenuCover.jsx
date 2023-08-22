const MenuCover = ({ backgroundURL, heading }) => {
  return (
    <section
      style={{
        height: "300px",
        width: "100%",
        backgroundImage: `url(${backgroundURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black text-white bg-opacity-60">
        <h1 className="text-4xl uppercase">{heading}</h1>
      </div>
    </section>
  );
};

export default MenuCover;
