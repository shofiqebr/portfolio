import Banner from "../../components/banner/Banner";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;