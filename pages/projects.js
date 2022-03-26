import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <div className="px-5 sm:px-20 md:px-40 py-5 flex-col">
        <h1 className="!font-bold !text-5xl py-5"> Projects </h1>
        <p>
          Below are a few projects I worked on over the past few years that I
          feel particulalry proud of. Feel free to reach out about any of them
          or let me know if you have any questions! In general, I really enjoyed
          working on projects, but I'm looking for something to commit my full
          time to. If you wanna work with me on something full time, please get
          in touch with me.{" "}
        </p>

        <hr />

        <ul className="py-2">
          <li className="py-2">
            <a href="https://www.getperkify.com/">
              {" "}
              <h3 className="!font-bold !text-xl py-1"> Perkify</h3>{" "}
            </a>
            <p>
              Perkify is a software project that helps businesses offer
              subscription-based perks to their employees. I worked on building
              out the admin front-end dashboard using React and Material UI.{" "}
            </p>
          </li>
          <li className="py-2">
            <h3 className="!font-bold !text-xl py-1">
              <a href="https://docs.google.com/document/d/1Now5cWX0OvCgOlKEOH20tTfFhNByazGYHsgrWV-QYyo/edit?usp=sharing">
                Guide to Making Friends on the Internet{" "}
              </a>
            </h3>
            <p>
              Throughout most of 2020 and 2021, my primary focus was to figure
              out how to be fulfilled socially. I never had a playbook to go by,
              so all of it seemed so impossibly hard when I first started to
              focus on it. These days, I realized I was giving a lot of people
              advice on this topic, so I decided to write up a collaborative
              guide on this for others to learn from and contribute to.
            </p>
          </li>
          <li className="py-2">
            <h3 className="!font-bold !text-xl py-1">Gamma House </h3>
            <p>
              In Summer of 2021, I co-organized a group house for 12 people in
              Palo Alto California.{" "}
            </p>
          </li>
          <li className="py-2">
            {" "}
            <a href="https://liberated-arts.com/">
              <h3 className="!font-bold !text-xl py-1">Liberated Arts</h3>
            </a>
            <p>
              Liberated Arts is a program for people outside of college to take
              discounted college-like liberal arts classes from real college
              professors.
            </p>
          </li>
          <li className="py-2">
            {" "}
            <h3 className="!font-bold !text-xl py-1"> Founder's Choice </h3>
            <p>
              {" "}
              Founder's Choice is a web app I'm building that's "Hot or Not for
              VC's". It's meant to provide a comprehensive qualitative ranking
              of VC firms. The project is sponsored by Crunchbase, angel list,
              and a few VC firms, with partnership led particularly by Bloomberg
              Beta. MVP has been built, but isn't out for public release. If
              you're a founder and want to give it a try, reach out to me!{" "}
            </p>
          </li>
          <li className="py-2">
            {" "}
            <h3 className="!font-bold !text-xl py-1">CIS195 </h3>
            <p>
              At Penn, I taught an iOS development course, where students
              learned the basics of UIKit and firebase to build fullstack final
              projects.{" "}
            </p>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
