import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import format from "date-fns/format";
import InfoCard from "@/components/InfoCard";

// export async function  getServerSideProps() {
//   const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
//     (res) => res.json()
//   );
//   console.log("searchResults")
//   return {
//     props: {
//       searchResults:searchResults
//     }
//   }
// }

// const getAPI = async () => {
//   const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
//   if (res.ok) {
//     const data = await res.json();
//     console.log(data)
//     // console.log(data);
//     // return data
//   }
// };

async function Search({ params }) {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  const data = {
    startDate: Date(params.slug[0]),
    endDate: Date(params.slug[1]),
    location: decodeURI(params.slug[2]),
    noOfGuests: params.slug[3],
  };

  // console.log(searchResults)

  const formatedStartDate = format(new Date(data.startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(data.endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${data.location} | ${range} | ${data.noOfGuests}`}
      />
      <main className="">
        <section className="flex-grow pt-14 px-6">
          {data.noOfGuests > 1 ? (
            <p className="text-xs">
              300+ stays - {range} - for {data.noOfGuests} guests
            </p>
          ) : (
            <p className="text-xs">
              300+ stays - {range} - for {data.noOfGuests} guest
            </p>
          )}
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {data.location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">

        {searchResults?.map(
          ({ img, location, title, description, star, price, total }) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
        </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default Search;
