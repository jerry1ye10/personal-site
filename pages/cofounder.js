import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function CoFounder() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <div className="px-5 sm:px-20 md:px-40 py-5 flex-col">
        <h1 className="!font-bold !text-5xl py-5"> Be My Co-Founder </h1>
        <p className="py-2">
          I want to start a company sometime in the next month and I'm looking
          for a cofounder! I really want to be 100% committed (working on
          weekends, irregular hours, etc) to what I'm working on, and that's the
          only thing I really need out of a cofounder. I'd prefer working with
          others who are technical, able to work in person (SF or NY), and are
          passionate about the same issues as I am.
        </p>

        <p className="py-2">
          Particularly, I'm interested in these specific industries: education,
          mental health, and social. Recently, I've also been a lot more bullish
          on certain web3 defi projects, so feel free to reach out regardless. I
          have a few ideas that I'm passionate about, but I'm very open to
          hearing other ideas as well.
        </p>

        <p className="py-2">
          To describe my skillset: I'm a generalist who is pretty much willing
          to sync his teeth into anything. In the past, I've thought/read a lot
          about marketing and product design and have a heavy technical
          background. If you're interested in working with me, please schedule
          time on my calendly or email me.
        </p>
      </div>

      <Footer />
    </div>
  );
}
