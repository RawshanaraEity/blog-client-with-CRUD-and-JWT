import Authors from "./Authors";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Newslettter from "./Newslettter";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newslettter></Newslettter>
            <Authors></Authors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;