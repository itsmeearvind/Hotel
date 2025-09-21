import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[90vh]">
        {/* Background Image */}
        <Image
          src="/images/hero/about-bg.png"
          alt="Thar Tribe Hostel"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          {/* Glow effect heading */}
          <h1 className="text-[100px] font-normal tracking-wide text-[#4A2B24] drop-shadow-lg 
            [text-shadow:_0_0_10px_#FF9933,_0_0_20px_#FF9933,_0_0_30px_#FF9933]">
            about us
          </h1>
        </div>
      </section>

      {/* Added horizontal padding to entire page sections */}
      <section className="bg-[#FFF8E5] py-20 px-6 md:px-6">
        <div className="max-w-[1441px] mx-auto">
          <div className="flex-1 mx-auto"></div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/*  Left - Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium text-[#4B2E2E] mb-4">
                thar tribe hostel
              </h3>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                At Thar Tribe Hostels, we offer more than just accommodation —
                we offer connection. Situated in the historic heart of
                Jaisalmer, our hostel is inspired by the rich traditions of the
                Thar Desert and the modern needs of today’s global travelers.
                Each corner of our space reflects the earthy warmth of Rajasthan
                — from handcrafted décor to authentic community experiences. We
                host curated tours, desert safaris, cooking sessions, and
                rooftop gatherings — all designed to help you experience
                Jaisalmer beyond the guidebooks. Whether you're a solo traveler,
                a couple, or a crew of adventurers, Thar Tribe Hostels provides
                a welcoming environment where cultures meet, friendships begin,
                and memories are made.
              </p>

              <button className="bg-[#FF9933] hover:bg-[#e37f1a] text-black px-6 py-3 rounded-lg text-lg font-semibold transition">
                Read more
              </button>
            </div>
            {/*Right - Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/component 5.png"
                alt="Thar Tribe Hostel building"
                width={500}
                height={600}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E5] py-20 px-6 md:px-6">
        <div className="max-w-[1441px] mx-auto">
          <div className="flex-1 mx-auto"></div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/*  Left -  */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/component 2.png"
                alt="Thar Tribe Hostel building"
                width={500}
                height={600}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/*Right - Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium text-[#4B2E2E] mb-4">
                thar tribe hostel
              </h3>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                🌟 Why Choose Thar Tribe Hostels? 1. ✨ Authentic Rajasthani
                Vibes Every corner of our hostel is inspired by the soul of the
                Thar Desert — from locally crafted interiors to cultural touches
                that make you feel connected to Jaisalmer’s roots. 2. 🧭 Perfect
                Location Just minutes from the iconic Golden Fort and local
                markets, we’re right where the action is — yet tucked away for
                peaceful nights under the stars. 3. 💰 Budget-Friendly, No
                Compromise Enjoy affordable stays without cutting back on
                comfort, cleanliness, or experience. Solo traveler? Group trip?
                We’ve got your back (and your backpack). 4. 🏕️ Rooftop Hangouts
                & Desert Vibes Chill with fellow travelers over chai, jam
                sessions, or sunset views — and when you're ready, we’ll help
                you plan that unforgettable camel safari. 5. 🌍 A Tribe That
                Feels Like Home We’re more than staff — we’re locals who love
                sharing our culture. Here, you’ll meet real people, make real
                connections, and probably extend your stay. 6. 🌐 Work, Travel,
                Repeat With free Wi-Fi, cozy common areas, and flexible vibes —
                we’re perfect for digital nomads and remote hustlers too.
              </p>

              <button className="bg-[#FF9933] hover:bg-[#e37f1a] text-black px-6 py-3 rounded-lg text-lg font-semibold transition">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
