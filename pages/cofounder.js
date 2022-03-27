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
          interested in similar industries to me.
        </p>

        <p>In terms of my skillset, </p> 

        <p>
          {" "}
          Below you can find some ideas I'm interested in working on. I'm not
          particularly attached to any of them and I'm very open to hearing
          other ideas. If you're even slightly interested, feel free to take a
          look around my site to see if you think we'd be a good fit and book
          time on my calendly so we can chat!
        </p>
      </div>

      <Footer />
    </div>
  );
}
