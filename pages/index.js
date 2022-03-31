import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import jerry from "../jerry.jpg";

export default function Home() {
  console.log(jerry);
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <div className="flex px-5 sm:px-20 md:px-40 py-5">
        <div class="flex-2 text-auto px-2">
          <p className="py-2">
            {" "}
            Hi! I'm Jerry, a 20 year old dropout from Penn. I grew up in New
            York City, but I'm currently living in the DropoutDao house in SF.
            Growing up, my parents set me up on a very traditional path that
            looked something like this: prestigious college -> Analyst at
            Mckinsey -> MD at a Fortune 500 company. When I spent all of high
            school focusing on grades and achievement over learning and
            happiness, I realized I wasn't happy. Since then, I've focused on
            living a life that brings <b>me</b> happiness and fulfillment.
          </p>

          <p className="py-2">
            My basic formula for happiness is doing something that I love and
            having people in my life who I value. In the past 3 years, I've
            worked on various side projects to experiment with what I like to do
            and I did a lot of soul searching to find out how I could find
            fulfilling social relationships.
          </p>

          <p className="py-2">
            Right now, I'm looking to start a company and actively looking for a
            cofounder. If you're interested or just wanna chat, please checkout{" "}
            <a href="/cofounder"> this page </a>.
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
