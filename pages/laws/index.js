import LawSection2 from "../../comps/lawSection2/LawSection2";
import SectionHeader from "../../comps/sectionHeader/SectionHeader";
import { sortByLawNumber } from '../../utils'
  
const laws = ({ laws }) => {
  return (
    <>
      <SectionHeader text1='all' text2='48 laws' />
      <LawSection2 laws={laws} />
    </>
  );
};
export default laws;





export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const files = fs.readdirSync(path.join("laws"));

  const laws = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("laws", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);

    return {
       frontmatter: data,
       slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      laws: laws.sort(sortByLawNumber),
    },
  };
};