import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Misc() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <div className="px-5 sm:px-20 md:px-40 py-5 flex-col">
        <h1 className="!font-bold !text-5xl py-5"> Miscellaneous </h1>
        <p>
          Just listing out a few random personal details about me. Will add on
          to this as I think of more details that are pretty integral to who I
          am.
        </p>

        <hr />

        <ul className="py-2">
          <li className="py-2">
            {" "}
            <h3 className="!font-bold !text-xl py-1">Communities</h3>{" "}
            <p>
              <ul className="list-disc">
                <a href="https://sparc-camp.org/">
                  <li>SPARC</li>{" "}
                </a>
                <a href="https://reboothq.substack.com/">
                  {" "}
                  <li>Reboot</li>{" "}
                </a>
                <a href="https://twitter.com/dropout_dao">
                  {" "}
                  <li>Dropout Dao</li>
                </a>
                <a href="https://stuy.enschool.org/">
                  <li>Stuyvesant High School Alumni Group</li>
                </a>
              </ul>
            </p>
          </li>
          <li className="py-2">
            <h3 className="!font-bold !text-xl py-1">Favorite Shows</h3>
            <ul className="list-disc">
              <li>Code Geass</li>
              <li>One Piece</li>
              <li>How I Met Your Mother</li>
              <li>Hunter X Hunter</li>
              <li>Naruto</li>
            </ul>
          </li>
          <li className="py-2">
            <h3 className="!font-bold !text-xl py-1">Favorite Books </h3>
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
