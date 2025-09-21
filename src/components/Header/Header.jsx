import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <Header className="flex justify-between items-center p-4 bg-slate-200 border-b-2 border-slate-400">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
    </Header>
  );
};

export default Header;
