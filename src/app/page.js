import LargeCard from "@/components/LargeCard";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

import Footer from "@/components/Footer";

export default function Home({ exploreData }) {
  const data = [
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];
  const data2 = [
    { img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
    { img: "https://links.papareact.com/q7j", title: "Unique stays" },
    { img: "https://links.papareact.com/s03", title: "Entire homes" },
    { img: "https://links.papareact.com/8ix", title: "Pet allowed" },
  ];
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from a sever */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {data2?.map((item) => (
            <MediumCard 
              key={item.img}
              img={item.img}
              title={item.title}
            />
          ))}
          </div>
        </section>
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoor'
          description="Wishlists curated by Airbnb"
          buttonText="Get inspired"
        />
      </main>
    <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//   console.log(exploreData);
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

// async function getData() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//   return exploreData
// }

// https://links.papareact.com/zp1
