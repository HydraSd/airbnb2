import LargeCard from "@/components/LargeCard";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";


import Footer from "@/components/Footer";

export default async function Home() {
    const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  
  const exploreData2 = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return (
    <div>
      {/* done */}
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from a sever */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
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
          {exploreData2?.map((item) => (
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

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  console.log(exploreData);
  return {
    props: {
      exploreData,
    },
  };
}

// async function getData() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//   return exploreData
// }

// https://links.papareact.com/zp1
