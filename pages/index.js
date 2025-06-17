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
          Hi! I'm Jerry! I'm 23, born & raised in NYC where I went to Stuyvesant High School. I went to the University of Pennsylvania & dropped out of college after my freshman year to explore what I wanted to do in life. I'm currently the CTO & Co-founder at <a href="https://www.free-2-grow.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Free2Grow</a>, where I've scaled the business to $1M+ ARR. I own all things product, client success, and email marketing.
          </p>


          <p className="py-2">
            Some things I'm proud of:
          </p>
          <ul className="py-2 list-disc list-inside space-y-1">
            <li>As a kid, I sold Yu-Gi-Oh! cards to make money. My parents wouldn't let me order online, so I had to ship everything to a friend's house and pay him a "handling fee"—still turned $20 into $10K.</li>
            <li>I've been top ranked at many games (1200 LP Challenger / Rank 80 NA in TFT, Top 10 DN ranking in yugioh, top 100 backyard monsters player worldwide, Diamond 2 in league of legends)</li>
            <li>I built <a href="https://www.founderschoicevc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Founder's Choice</a>, a vc ranking website which aggregated data from 1077 venture back founders and was covered by journalists like <a href="https://www.newcomer.co/p/founders-choice-vc-rankings-revealed" target="_blank" rel="noopener noreferrer" className="text-blue-500">Eric Newcomer</a>. We were sponsored by AngelList, Crunchbase, 2.12 Angels, BBG Ventures, Bloomberg Beta, Precursor ventures, & SignalFire.</li>
          </ul>
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