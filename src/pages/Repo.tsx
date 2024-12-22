import AllRepos from '../components/AllRepos';
import SideBar from '../components/SideBar';

const Repo = () => {
  return (
    <main className="w-screen h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Top Bar (Hamburger + Sidebar) */}
      <section className="w-full lg:h-full xl:h-full md:w-[17%] md:h-full h-16">
        <SideBar />
      </section>

      {/* Main Content */}
      <section className="flex-1 h-full p-2">
        <AllRepos />
      </section>
    </main>
  );
};

export default Repo;
