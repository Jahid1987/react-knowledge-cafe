import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <>
      <div className="p-3 md:flex max-w-7xl justify-between mx-auto">
        <h3 className="text-2xl font-bold">Knowledge Cafe</h3>
        <img className="w-12" src={profile} alt="profile" />
      </div>
    </>
  );
};

export default Header;
