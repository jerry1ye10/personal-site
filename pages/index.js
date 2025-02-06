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
          Hi! I'm Jerry, a 23 year old UPenn dropout based in SF. I was born & raised in NYC where I went to Stuyvesant High School. 
          </p>

          <p className="py-2">
          I dropped out of college after my freshman year to explore what I wanted to do in life. Most recently,  I worked on Archer, an AI call center for home service businesses backed by Bloomberg Beta & 1984 Ventures.  We were acquired by our largest partner, a human based call center named <a href="https://www.free-2-grow.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Free2Grow</a>, where I'm now the CTO. 
          </p>

       

          <p className="py-2">
            In the past, I also built <a href="https://www.founderschoicevc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Founder's Choice</a>, a vc ranking website which aggregated data from 1077 venture back founders. We were sponsored by AngelList, Crunchbase, 2.12 Angels, BBG Ventures, Bloomberg Beta, Precursor ventures, & SignalFire. 
          </p>

          <p className="py-2">
          For fun, I like anime + have always been a huge gamer. I hit challenger (rank 85, top .01%) in Teamfight tactics recently. I also enjoy playing poker and am actively hosting games in SF. Hit me up if you'd like to play some time! 
          </p>
          <p className="py-2">
            These days, I'm in SF actively exploring & looking to meet more people. If you think I'm cool, hit me up and let's grab food or play poker some time! 
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