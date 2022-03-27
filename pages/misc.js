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
            <ul className="list-disc">
              <li>Nonviolent Communication - Marshall Rosenburg</li>
              <li>Zen and the Art of Motorcycle Maintenance - Robert Pirsig</li>
              <li>Zero To One - Peter Thiel </li>
              <li>When Breadth Becomes Air - Paul Kalanithi</li>
              <li>Actionable Gamification - Yu-Kai Chou</li>
              <li>The Gifts of Imperfection - Brene Brown </li>
              <li>The Lonely American - Jacqueline Olds</li>
            </ul>
          </li>
          <li className="py-2">
            <h3 className="!font-bold !text-xl py-1">Favorite Talks </h3>
            <ul className="list-disc">
              <a href="https://www.youtube.com/watch?v=8CrOL-ydFMI&t=573s">
                {" "}
                <li>This is Water </li>{" "}
              </a>
              <a href="https://www.youtube.com/watch?v=9vJRopau0g0&t=644s">
                {" "}
                <li>The Super Mario Effect</li>{" "}
              </a>
              <a href="https://www.youtube.com/watch?v=UF8uR6Z6KLc&t=607s">
                {" "}
                <li>Steve Jobs 2005 Commencement Speech</li>{" "}
              </a>
            </ul>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
