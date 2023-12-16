import Banner from "../../components/banner/Banner";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;