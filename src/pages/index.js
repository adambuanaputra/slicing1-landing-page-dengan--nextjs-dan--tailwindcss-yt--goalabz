import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';

import Header from 'components/Header';
import Testimonials from 'components/Testimonials';
import DecorIntersect from 'images/decor-Intersect-1.svg';
import DecorTextUnderline from 'images/text-decor-hero.svg';
import DecorPlus1 from 'images/decor-plus-style-1.svg';
import DecorSwirl1 from 'images/decor-swirl-style-1.svg';
import DecorEllips1 from 'images/decor-ellips-style-1.svg';
import Facebook from 'images/facebook.svg';
import Instagram from 'images/instagram.svg';
import Twitter from 'images/twitter.svg';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo app travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      {/* Sections Heros Awal*/}
      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
          <DecorIntersect className="fill-accent-4" />
        </span>
        <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>
              <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
                Travel,{' '}
                <span className="relative">
                  enjoy
                  <span className="absolute left-0 top-full -mt-8 -ml-4 -z-10">
                    <DecorTextUnderline className="w-[385px] h-[12px] fill-accent-2" />
                  </span>
                </span>{' '}
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex">
                <Link href="/" legacyBehavior>
                  <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl">
                    Find out more
                  </a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                    <span class="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray500">Play Demo</span>
                </button>
              </div>
            </div>
            <div className="w-16/12 pt-24 relative">
              <div className="relative z-20 transform translate-x-12">
                <Image
                  priority
                  layout="responsive"
                  width={100}
                  height={100}
                  src="/images/hero-traveller.png"
                  alt="foto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sections Heros Akhir*/}

      {/* Sections Category Awal*/}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-10 -top-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="text-center flex flex-col mb-16" ir>
            <h1 className="uppercase text-lg mb-2 text-gray-500">Category</h1>
            <h1 className="font-serif text-5xl text-gray-900 leading-snug">
              We Offer Best Services
            </h1>
          </div>
          <div className="flex text-gray-900">
            {/* awal icon series 1 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 groub-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/illustration-radar.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Calculated Weather </h4>
                <h5 className="px-8 mb-8">
                  Built Wicket longer admire do barton vanity itself do in it.
                </h5>
              </div>
            </div>
            {/* akhir icon series 1 */}
            {/* awal icon series 2 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 groub-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-12">
                    <Image
                      layout="fixed"
                      width={137}
                      height={195}
                      src="/images/plane.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Best Flights</h4>
                <h5 className="px-8 mb-8">
                  Engrossed listening. Park gate sell they west hard for the.
                </h5>
              </div>
            </div>
            {/* akhir icon series 2*/}
            {/* awal icon series 3 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 groub-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-8 top-2">
                    <Image
                      layout="fixed"
                      width={50}
                      height={50}
                      src="/images/illustration-mic.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute top-10 left-3 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Local Events</h4>
                <h5 className="px-8 mb-8">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </h5>
              </div>
            </div>
            {/* akhir icon series 3 */}
            {/* awal icon series 4 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 groub-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-10 top-3">
                    <Image
                      layout="fixed"
                      width={500}
                      height={500}
                      src="/images/illustration-gear.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Customization</h4>
                <h5 className="px-8 mb-8">
                  We deliver outsourced aviation services for military customers
                </h5>
              </div>
            </div>
            {/* awal icon series 4 */}
          </div>
        </div>
      </section>
      {/* Sections Category Akhir*/}

      {/* sextion cards Destinations awal */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto realtive-px-4">
          <div className="text-center flex flex-col mb-16">
            <h3 className="uppercase text-lg mb-2 text-gray-900">
              Top Selling
            </h3>
            <h3 className="font-serif text-5xl text-gray-500 leading-snug">
              Top Destination
            </h3>
          </div>
          <div className="flex relative pr-10">
            <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
              <DecorSwirl1 className="stroke-gray-500" />
            </div>
            {/* Gambar card awal 1 */}
            <div className="w-4/12 px-6 relative z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image
                    layout="fill"
                    className="object-cover"
                    src="/images/destination-1.jpg"
                    alt="destination-1"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Home italy</h6>
                    <h6 className="text-lg">$5,42k</h6>
                  </div>
                  <div className="pt-4 px-5 flex items-center">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">10 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            {/* gambar card akhir */}
            {/* Gambar card awal 2 */}
            <div className="w-4/12 px-6 relative z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image
                    layout="fill"
                    className="object-cover"
                    src="/images/destination-2.jpg"
                    alt="destination-1"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">London, UK</h6>
                    <h6 className="text-lg">$4.2k</h6>
                  </div>
                  <div className="pt-4 px-5 flex items-center">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">12 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            {/* gambar card akhir */}
            {/* Gambar card awal 3 */}
            <div className="w-4/12 px-6 relative z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image
                    layout="fill"
                    className="object-cover"
                    src="/images/destination-3.jpg"
                    alt="destination-1"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Full Europe</h6>
                    <h6 className="text-lg">$15k</h6>
                  </div>
                  <div className="pt-4 px-5 flex items-center">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">28 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            {/* gambar card akhir */}
          </div>
        </div>
      </section>
      {/* sextion cards Destinations akhir */}

      {/* Sections Easy and Fast awal*/}
      <section className="mb-28 ">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex">
            <div className="w-6/12 pl-8 pr-28">
              {/* posisi text sebelah kiri awal */}
              <div className="flex flex-col mb-16">
                <h3 className="uppercase test-lg mb-2 text-gray-500">
                  Easy and Fast
                </h3>
                <h3 className="font-serif text-5xl text-gray-900 leading-snug mb-10">
                  Book your next trip in 3 easy steps
                </h3>
                <ul className="flex flex-col gap-y-10 pr-10">
                  <li className="flex items-center">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">navigation</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Choose Destination
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-2 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">credit_card</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Make Payment
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-6 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">plane</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Reach Airport on Selected Date
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* posisi text sebelah kiri akhri */}
            <div className="w-5/12 flex items-center justify-center">
              <div className="w-[370px] relative">
                <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -top-10 -right-10 bg-accent-7/40"></div>

                <div className="absolute bottom-16 right-0 transform translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7">
                  <div className="flex">
                    <span className="w-12 h-12 overflow-hidden rounded-full flex-none mr-3">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/images/destination-5.jpg"
                        alt="image destination 4"
                      />
                    </span>
                    <div className="flex flex-col w-full mb-2">
                      <span className="text-sm text-gray-500">OnGoing</span>
                      <div className="text-gray-900 mb-2">Trip to Room</div>
                      <span className="text-xs mb-1">
                        <span className="text-accent-6">40%</span>
                        <span className="text-gray-900">Completed</span>
                      </span>
                      <span className="w-full bg-gray-200 h-1 rounded-full overflow-hidden flex">
                        <span className="rounded-full bg-accent-6 w-20 h-full"></span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl w-full h-full relative z-20 shadow-great pt-4 pb-5">
                  <div className="mx-4 rounded-3xl h-40 relative overflow-hidden mb-6">
                    <Image
                      layout="fill"
                      className="object-cover"
                      src="/images/destination-4.jpg"
                      alt="destination 4"
                    />
                  </div>
                  <h6 className="font-bold text-;g text-gray-500 px-4 mb-2">
                    Trip To Greece
                  </h6>
                  <div className="flex text-gray-500 px-4 mb-4">
                    <h6 className="">14-29 June</h6>
                    <span className="mx-2">|</span>
                    <h6 className="">by Robbin joseph</h6>
                  </div>
                  <div className="flex gap-x-3 mx-4 mb-6">
                    <span className="bg-gray-300 text-gray-500 rounded-full flex flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">spa</span>
                    </span>
                    <span className="bg-gray-300 text-gray-500 rounded-full flex flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">map</span>
                    </span>
                    <span className="bg-gray-300 text-gray-500 rounded-full flex flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">near_me</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between mx-4">
                    <span className="material-icons text-gray-500 mr-3 text-xl">
                      apartment
                    </span>
                    <span className="mr-auto text-gray-500">
                      24 people going
                    </span>
                    <span className="text-xl material-icons text-axxent-6">
                      favorite_border
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sections Easy and Fast Akhir*/}

      {/* Sections Testimonial Awal*/}
      {/* Dia membuat code baru terpisah agar meminimalisir code */}
      <Testimonials />
      {/* Sections Testimonial Akhir*/}

      {/* section  client Image icon awal */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-800">
                <Image
                  className="object-none"
                  layout="fill"
                  src={'/images/image_27.png'}
                  alt="gambar_27"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-800">
                <Image
                  className="object-none"
                  layout="fill"
                  src={'/images/image_28.png'}
                  alt="gambar_28"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-800">
                <Image
                  className="object-none"
                  layout="fill"
                  src={'/images/image_29.png'}
                  alt="gambar_29"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-800">
                <Image
                  className="object-none"
                  layout="fill"
                  src={'/images/image_30.png'}
                  alt="gambar_30"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-800">
                <Image
                  className="object-none"
                  layout="fill"
                  src={'/images/image_31.png'}
                  alt="gambar_31"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section client image icon akhir */}

      {/* section subscribe newsletter awal */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-20 -bottom-20 -z-10 transform rotate-90 translate-y-2">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="w-full relative bg-white">
            <div className="relative ">
              <div className="absolute flex justify-center items-center text-white rounded-full transform -translate-y-1/2 translate-x-1/2 z-30 top-0 right-0 w-16 h-16 bg-gradient-to-b from-accent-6/60 to-accent-6">
                <span className="material-icons">near_me</span>
              </div>
              <div className="bg-accent-3/20  overflow-hidden rounded-tl-[128px] rounded-3xl relative z-20 pt-20 pb-20 mb-8">
                <div className="w-[390px] h-3990px] absolute z-0 -top-32 -right-32 transform -rotate-45">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>
                <div className="w-[390px] h-3990px] absolute z-0 -bottom-32 left-4 transform">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>
                <div className="relative ">
                  <div className="relative z-10">
                    <h5 className="text-gray-500 font-bold text-3xl px-36 text-center leading-normal mb-10">
                      Subscribe to get information, latest news and other
                      interisting offers about Cobham
                    </h5>
                    <form className="flex justify-center">
                      <fieldset className="relative mr-8">
                        <div className="w-16 h-16 flex justify-center items-center absolute">
                          <span className="material-icons text-gray-500">
                            mail_outline
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="your Email"
                          className="appearance-none rounded-lg py-4 pl-14 bg-white w-96 focus:outline-none transition duration-300 border-20 border-transparent focus:border-accent-6"
                        />
                      </fieldset>

                      <buttom className="rounded-lg text-white bg-gradient-to-b from-accent-2/90 to-accent-2 py-4 px-16">
                        Subscribe
                      </buttom>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section subscribe newsletter akhir */}

      {/* section footer awal */}
      <section className="pb-32 relative overflow-hidden">
        <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-6/20"></div>
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex mb-12">
            <div className="w-3/12 px-4">
              <h6 className="text-5xl tracking-tight text-gray-900 mb-4">
                Adam
              </h6>
              <p className="text-sm text-gray pr-8">
                Book your trip in minute, get full Control for much longer
              </p>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-1000 mt-2 mb-7">
                Company
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/carerrs" legacyBehavior>
                    <a>Carerrs</a>
                  </Link>
                </li>
                <li>
                  <Link href="mobile" legacyBehavior>
                    <a>Mobile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-1000 mt-2 mb-7">
                Contact
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/faq" legacyBehavior>
                    <a>Help/FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press" legacyBehavior>
                    <a>Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="affilates" legacyBehavior>
                    <a>Affilates</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-1000 mt-2 mb-7">
                More
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/airlinefees" legacyBehavior>
                    <a>Airlinefees</a>
                  </Link>
                </li>
                <li>
                  <Link href="/airline" legacyBehavior>
                    <a>Airline</a>
                  </Link>
                </li>
                <li>
                  <Link href="/low-fare-tips" legacyBehavior>
                    <a>Low fare tips</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              {/* icone social media awal */}
              <ul className="text-lg text-gray-500 flex gap-x-5">
                <li>
                  <a
                    href="https://www.facebook.com/adambuanaputra"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    twrget="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 treansition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Facebook className="fill-black groub-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adam_buana_putra/"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    twrget="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 treansition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Instagram className="fill-black groub-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/adambuanaputra"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    twrget="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 treansition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Twitter className="fill-black groub-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>
              {/* icone social media akhir */}
              <h6 className="text-xl tracking-tight text-gray-500 mt-7 mb-3">
                Discover our app
              </h6>
              <ul className="flex gap-x-4">
                <li className="relative w-36 h-12">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative w-full h-full flex overflow-hidden rounded-full "
                  >
                    <Image
                      className="object-contain"
                      layout="fill"
                      src="/images/google play.png"
                      alt="image_googleplay"
                    />
                  </a>
                </li>
                <li className="relative w-36 h-12">
                  <a
                    href="https://apple.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative w-full h-full flex overflow-hidden rounded-full"
                  >
                    <Image
                      className="object-contain"
                      layout="fill"
                      src="/images/Play Store.png"
                      alt="image_play_store"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            All right reserve@Adam.co
          </div>
        </div>
      </section>
      {/* section footer akhir */}
    </div>
  );
}
