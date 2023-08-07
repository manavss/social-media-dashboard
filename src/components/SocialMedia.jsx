import Card from "./Card";
import data from "./data";

function SocialMedia() {
  return (
    <div className="my-14 flex flex-col  gap-x-10 gap-y-6 md:flex-row">
      {data.map((p, i) => {
        // console.log(p.un);
        return (
          <Card
            key={i}
            border={p.border}
            un={p.un}
            followers={p.followers}
            fors={p.fors}
            number={p.number}
            iconUpDown={p.iconUpDown}
            iconSm={p.iconSm}
            textClr={p.textClr}
          />
        );
      })}
    </div>
  );
}

export default SocialMedia;
// @nathanf
// 1987
// Followers
// 12 Today

// @nathanf
// 1044
// Followers
// 99 Today

// @realnathanf
// 11k
// Followers
// 1099 Today

// Nathan F.
// 8239
// Subscribers
// 144 Today
