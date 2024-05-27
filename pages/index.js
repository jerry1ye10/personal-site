import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import jerry from "../jerry.jpg";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <div className="flex px-5 sm:px-20 md:px-40 py-5">
        <div class="flex-2 text-auto px-2">
          <p className="py-2">
            Hi! I'm Jerry, a 22 year old dropout from UPenn based in SF. My #1 priority is meeting people and making good friends. If you think I seem cool, DM me about why you think we could be close friends. I'd love to chat!
          </p>

          <p className="py-2">
            Most recently, I worked on Archer, an AI call center for home service businesses which sadly failed because of co-founder conflict. We're being acquired by our largest partner, a human call center which was white-labeling our tech. I'm joining as their CTO and currently working there right now. Since working with them, I grew our AI product's revenue by 250K+ ARR in under a month.
          </p>

          <p className="py-2">
            I enjoy chasing after goals in life, and right now, the goal I feel most motivated to chase after is to become financially free ($20 Million). I want to go after a hard goal and succeed with a small team where we’re all close friends. So basically I’m larping as Luffy in real life. HMU to talk about anime / meaning in life!!
          </p>
        </div>
        <div className="flex-2 px-2">
          <img src={jerry.src} className="xxl:w-2 ml-auto mr-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}