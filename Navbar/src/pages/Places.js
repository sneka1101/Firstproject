import React from 'react'
import '../App.css'

const Places = () => {
  return (
    <div className='container'>
      <div className='disttext'>
      <section className='d-flex mt-5'>
        <div className=' ms-3 me-4 '>
          <h4><b>Tourist Places To Visit In Tamil Nadu</b></h4><br></br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Looking forward to visiting the most stunning places to see in Tamil Nadu? Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
          </p>
        </div>
        <figure>
          <img className='image1'
            src={require("../Images/Place.jpeg")}
            alt="Tourist Place To Visit In Tamil Nadu"
            >
        </img>
          <figcaption className='text-center'>Tourist Place To Visit In Tamil Nadu</figcaption>
         </figure>
      </section>
         <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many
            offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai, Tamil Nadu is also home to the southernmost land of
            India- Kanyakumari and one of the char dhams-Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these
            places are a delight for anyone wishing to escape the hustle and bustle of life.
         </p>
      </div>


      <section className='mt-5 pb-4' id='img1'>
        <h2 className='text-center'>Chennai</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/chennai1.jpeg")}
            alt="Marina beach"
            className='image2'
            >
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Marina beach,Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. Thebeach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, secondlargest in the world and also the most crowded beach in India with almost 30,000 visitors a day.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold, The beach has a primarily sandy terrain and is dotted with plenty of mery-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even allalone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawlupwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='image2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>MGR Flim City, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but
            also a longtime CM of Tamil Nadu.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terain and is dotted with plenty of mery-go-
            rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/chennai2.jpeg")}
            alt="MGR Flim City"
            className='im2'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='image3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/chennai3...jpeg")}
            alt="Marundeeswarar Temple"
            className='im3'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Marundeeswarar Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form
            of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must
            visit for anyone visiting Chennai or nearby cities.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was
            expanded by the Chola Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been a place
            of worship especially for people with diseases and those facing various problems with their health. The prasadam here is a
            mixture of sacred ash, water, and milk which is believed to cure any ailments. One must visit the temple to encounter the
            miraculous power it is said to have.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='image'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Breezy Beach, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai, Being smaller and
            less polluted, its a perfect getaway for anyone looking for a peaceful evening.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            This beach is not as popular and known as the Elliots beach, and is hence more quiet and peaceful. Evenings
            are very pleasant and breezy here, and in the recent years, lots of tourists have been attracted towards this beach for its
            beauty. Those looking for an amiable, refreshing and breezy place to chill out and have fun, the Breezy beach of Chennai
            is the place to be.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/chennai4.jpeg")}
            alt="Breezy Beach"
            className='im5'>
          </img>
        </div>
      </section>

      <section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Rameshwaram</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/rameshwarem1.jpeg")}
            alt="Dhanushkodi Temple"
            className='im3'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Dhanushkodi Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a
            natural calamity, the cyclone, it got completely washed away.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            It holds the advantage of being on an island and is exquisitely covered by waters on all the four sides of it. It is
            sandwiched between the Bay of Bengal and Indian Ocean. When viewed from a birds eye, The seas are in the shape of bow
            and arrow. The arrow head is considered to be a sacred place for worship by the Hindus and people from far and wide come
            there to offer sacred prayers to the deity. Lord Rama has his pious foot marks in this temple and the whole story of
            Ramayana revolves around this temple island . It is a wonderful pilgrim place for the followers of Lord Rama. The place is an
            approximate of 18 kms from Rameshwaram and one can easily travel by road.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='pic'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Lakshmana Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In
            order to offer sacred prayers to lord Lakshmana, this temple has been constructed in Rameshwaram itself which indicates
            that Lord Lakshman had been given a valuable place in the dynasty of Lord Rama.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Several wonderful sculptures of Lord Lakshmana have been carved out from marble and the temple has the
            statues of lord Rama and Goddess Sita too which signifies the spirit of unitedness that exisited between them.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/rameshwarem2.jpeg")}
            alt="Lakshmana Temple">
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/rameshwarem1 (6).jpeg")}
            alt="Villoondi Tirtham"
            className='im2'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Villoondi Tirtham, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Viloondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst
            tourists. It also has a spring inside the sea which makes the attraction a unique one and is often associated with the Legend
            of Ramayana. It is believed that Lord Rama shot an arrow to create this spring to help his people with drinking water.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Villoondi Theertham is situated about 6 km from the Rameswaram main bus stand. Besides its arresting views
            and silent tides, the place is also known for its pure water spring inside the sea. A few metres from the shore, this pure water
            well beside the sea is a marvel, Devotees connect its existence to a mythological legend from the epic Ramayana. After
            rescuing Goddess Sita and bringing her back to Rameswaram from Sri Lanka, Lord Rama performed rituals by installing a
            Shiva linga on the spot.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='pic'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Rameshwaram Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also known as
            Ramanathaswamy Temple of Tamil Nadu is dedicated to Lord Shiva. It also boasts of being one of the 12 Jyotirlinga
            temples of India. Not just spiritualy, Rameshwaram Temple is appealing architecturally also. With the longest coridor of
            the world and immaculate carvings on pillars, it is definitely a treat for your eyes.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The lingam in the Rameshwaram Temple was installed by Lord Rama but, the construction was led by several
            rulers over the centuries. Inside the temple, there are two lingams- Ramalingam and Shivalingam. The latter is still
            worshipped first to preserve the words of Lord Rama. Besides daily Abhishkams and poojas performed with great zeal,
            there are absorbing festivals worth witnessing.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/Rameshwaram3..jpeg")}
            alt="Rameshwaram Temple"
            className='im3'>
          </img>
        </div>
      </section>


      <section className='mt-5 pt-1 pb-4' id='pic'>
        <h2 className='text-center'>Kodaikanal</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kodaikanal1....jpeg")}
            alt="Green Valley"
            className='im5'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Green Valley View, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep valleys and
            hills. The mesmerizing view of the Vaigai Dam is an unforgettable experience. It used to be known as suicide point because
            of the dangerous valley which is dense and deep; below the point of more than 5000 feet drop.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located at a distance of 5.5 km from the Kodaikanal Lake, the Green Valley View not just offers a gorgeous view,
            but is also surrounded by a lot of monkeys. On the way to the point, there are several shops which offer homemade
            chocolates, ornaments and a wide range of flowers.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='pic'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Kodai Lake, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera Levinge was
            the man responsible for the creativity and resources of this lake amidst Kodaikanal town. This lake was developed by the
            British and early missionaries from the USASA. 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The star-shaped lake is centrally located in Kodaikanal and is surrounded by the rich green Palani Hill' Range
            the main watershed for the lake. The lake is situated at an elevation of 2285m above sea level and has an average depth
            of 3.0m. The lake is at a distance of 3 km from the Kodai Bus stand.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kodaikanal2.jpeg")}
            alt="Kodai Lake"
            className='im4'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='pic'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/kodaikanal3..jpeg")}
            alt="Bear Shola Falls"
            className='im6'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Bear Shola Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular picnic spot
            in the region, This cascade is a seasonal attraction that comes to life in its fullest during the monsoons. An interesting
            legend behind the unique name of this place is that it was a favourite haunt of a bear who used to frequent this water body
            to drink water, hence imparting it the name Bear Shola Falls.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Wrapped with dense forests coupled with the chirping of birds, Bear Shola Falls is a little heaven. Also, the forest
            area of the Western Ghats situated near the falls is a biodiversity hotspot where you can have a rendezvous with animals like
            monkeys and deer in the wild.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='pic'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Pillar Rocks, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Situated in the "Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic spot.
            Constituting a beautiful mini garden; the place is named so as it has three vertically positioned boulders reaching up to a
            height of 400 feet. The aura here is full of affection and is evidence of a great love story. The 'white cross' which once
            existed on these rocks represented David Gell's excellent tribute to love. 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The view of rocks is not something to be missed.
            They stand as an untouched miracle for the tourists visiting Kodaikanal.
            The piars are famous for providing bird's view of nearby surroundings. The chambers between these two
            massive rocks are called the Devil's Kitchen. Fewer times you might find rocks covered with mist and clouds, but when the
            ways become clear nothing beautiful than this could be ever seen.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kodaikanal4.jpeg")}
            alt="Pillar Rockse"
            className='im3'>
          </img>
        </div>
      </section>


      <section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Ooty</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/ooty1 (1).jpeg")}
            alt="Nilgiri Mountain Railway"
            className='im6'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Nilgiri Mountain Railway, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill station
            Ooty. Such is the train's popularity and history that it was declared as a World Heritage Site by UNESCO in 2005. Started in
            the year 1899, it has continued to charm its visitors over the past many years winding its way through the best of nature.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The Toy Train covers a distance of total 46 km in a span of 5 hours and takes one through a truly spectacular
            journey filled with picturesque views en route. Another fascinating feature of the train is that its youngest X-class locomotive
            is over 50 years old and the oldest is 80 years old.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Ooty Botanical Gardens, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical Garden is a
            splendid garden in Udhagamandalam, near Coimbatore in the state of Tamil Nadu. Sprawled over an area of 22 hectares.
            the garden is divided into several sections that are trimmed beautifully to present an endearing sight. 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Visitors are greeted with astounding colourful natural beauty from the moment they pass through the gates
            For more than 160 years, foreign and local travellers have visited the lush green lawns of the garden, admiring the
            stunning variety of flowers, ferns, and orchids present here. Another highlight of the Botanical Garden is the Toda hill
            known as the Toda mund, which gives the visitors an insight into the lives and culture of Todas (a tribe of the Nilgiris).
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/ooty1 (2).jpeg")}
            alt="Ooty Botanical Gardens"
            className='im6'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/ooty1.(3).jpeg")}
            alt="Emerald Lake"
            className='im3'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Emerald Lake, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and is a part of
            the Silent Valley National Park in the Nilgiris District. Serene and away from the maddening crowd, the lake and its
            surroundings are much cleaner and offer a perfect place to enjoy a leisurely time in the vicinity of nature and quietude.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            It is one of the unexplored and virgin places of the South Indian hill station, not yet encroached by the masses of the place every year. Emerala Lake 
            tourists that visit the place every year, Emerald Lake is the ideal spot in Ooty for nature lovers. Tourists usually flock there for
            e an d 'tea nlantations surrounding i
            the picturesque scenic beauty of the lake, and the green Nilgiri slopes and tea plantations surrounding it. It is a paradise for
            nature photography enthusiasts as the delightful landscape offers a perfect subject and composition.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Dolphin's Nose, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip of
            the peak of this enormous rock resembles a dolphin's nose and this is one of the most visited tourist spots in The Nilgiris
            District of Tamil Nadu.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            It is set amidst the rolling hils of the Nilgiris Hills (or the Blue Mountains). The gigantic rock formation is
            entirely unprecedented. There are enormous canyons found on both the sides of the destination and there is a clear view
            of the Catherine Falls, another popular tourist destination with its ongoing current several thousand meters below, which
            is located at a short distance from the Dolphin's Nose. 
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/ooty1.(4).jpeg")}
            alt="Dolphin's Nose"
            className='im6'>
          </img>
        </div>
      </section>


      <section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Kanyakumari</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kanyakumari1 (1).jpeg")}
            alt="Kanyakumari Beach"
            className='im6'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Kanyakumari Beach, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located in the southernmost part of India, Kanyakumari beach with its beautiful hue-changing beaches, the
            confluence of three water bodies: Bay of Bengal, Indian Ocean, and the Arabian Sea. Miraculously, here you can see that the
            water of three seas does not mix, you can distinguish between the turquoise blue, deep blue, and sea green waters of the
            three seas, though the colors keep changing with the season and the day's weather.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The beach is not conducive to swim or surf as the water as the sea is rough and the beach is rocky.To enjoy the
            best view, you can visit the Triveni Sangam point and climb up the famous lighthouse watchtower to entirely take in its
            beauty.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Vivekananda Memorial, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. t has the
            picturesque Indian Ocean in its backdrop. t is situated on one of the two adjacent rocks projecting out of the
            Lakshadweep Sea and comprises of the 'Shripada Mandapam' and the 'Vivekananda Mandapam'.VivekanandaRock
            Memorial is located at about 500 meters east of the mainland of Vavathurai in Kanyakumari and can be accessed by
            regular ferries. 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            This statue was built in the year 1970 on the island situated in Vavathurai, built on the site where Vivekananda
            attained enlightenment. The Shripada Mandapam has a study hall and a museum, where you can explore Vivekananda's
            life and work in depth.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kanyakumari1.(2).jpeg")}
            alt="Vivekananda Memorial"
            className='im6'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/kanyakumari1.(3).jpeg")}
            alt="Thiruvalluvar Status"
            className='im2'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Thiruvalluvar Status, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself on a small
            island near Kanyakumari. Thiruvalluvar was the author of a legendary work in the world of Literature, Tirukkural, the classic
            Tamil text. In his devotion, the work for the statue started in 1990 and continued till 1999, during the year in which the figure
            finally got completed.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            This monument stands tall at a mighty height of 133 feet and is perched upon a 38-foot pedestal. The pedestal's
            height represents the 38 chapters of virtue in Thirukkural. Full of symbolism and cultural significance, this destination is awe-
            inspiring, and a must-visit. V. Ganapati Sthapati sculpted the statue, and it was unveiled on January 1, 2000. Surrounded by
            the waters, the statue is settled at an ideal location, and a short ferry ride can quickly help you reach the masterpiece.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Thirparappu Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu Falls
            make up for an enchanting sight. This waterfall is a manmade one and falls from a height of 50 feet. The water collects in
            a quaint pool below which is an ideal place to frolick around, especially for children. The falls are surrounded by thick
            green foliage and indigenous fauna, which make it a nature lover's paradise.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            These falls are a unique combination of streams that flow together to form a magnificent waterfall. The
            containment below is no less than a top tier waterpark and is perfectly safe too. The entrance of this destination has a
            small temple dedicated to Lord Shiva and is highly revered by the locals. 
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kanyakumari1 (4).jpeg")}
            alt="Thirparappu Falls"
            className='im7'>
          </img>
        </div>
</section>


      <section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Kumbakonam</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kumbakonam1 (1).jpeg")}
            alt="Sarangapani Temple"
            className='im8'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Sarangapani Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam in the
            South-Indian state of Tamil Nadu. The beautiful temple is located on the banks of River Kaveri and is frequented by
            devotees of Lord Vishnu from all over the world, Along with being a sacred place of worship, the temple is a work of art in
            itself, with several tiers of intricately carved and colourfully decorated mythological sculptures and images. The grandeur of
            the temple is breathtaking. It has the tallest tower in the town. As one explores the Sarangapani Temple, they are bound to
            feel a certain vibe as hundreds of devotees transmit energies through their prayers and the experience is surreal.
            Sarangapani is the deity who is an avatar of Lord Vishnu. The temple is considered to be one of the 108 holy temples
            dedicated to Lord Vishnu in India. It is also regarded as one of the five sacred temples
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Nageswaran Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola
            architecture, it is an important Shaivite temple The temple is a marvelous example of the Chola's architectural prowess as
            the constructed the temple in a way so that it willonly let in sunlight during the month of March-April
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            There are many inscriptions associated with the temple indicating contributions from Cholas, Thanjavur
            Nayaks and Thanjavur Maratha kingdom. The oldest parts of the present masonry structure were built during the Chola
            dynasty in the 9th century, while later expansions, including the towering gopuram gatehouses, are attributed to later
            periods, up to the Thanjavur Nayaks during the 16th century.The temple complex is one of the largest in the state and it
            houses three gateway towers known as gopurams.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kumbakonam1 (2).jpeg")}
            alt="Nageswaran Temple"
            className='im3'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/kumbakonam1 (3).jpeg")}
            alt="Adi Kumbeshwara Temple"
            className='im3'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Adi Kumbeshwara Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Believed to have been constructed in the 7th century A.D by the Cholas, Adi Kumbeshwara Temple is one of the
            grandest and the oldest Shiva temple in the town. The temple has a magnificent architecture with the trademark style style of the
            Cholas. It is dedicated to Lord Shiva and houses a unique Shiva lingam.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            TThe temple complex covers an area of 30,181 sq ft (2,803.9 m2) and houses four gateway towers known as
            gopurams. The tallest is the eastern tower, with 11 stories and a height of 128 feet (39 m) The temple has numerous shrines
            with those of Kumbeswarar and Mangalambigai Amman being the most prominent, The temple complex houses many halls;
            the most notable is the sixteen-pillared hall built during the Vijayanagara period that has all the 27 stars and 12 zodiacs
            sculpted in a single stone.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Airavatesvara Temple, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered Hindu
            temple and a UNESCO world heritage site. Part of the popular trio known as the Great Living Chola Temple along with
            Brihadeeswara Temple at Thanjavur and the Gangaikondacholisvaram Temple at Gangaikonda Cholapuram, Airavatesvara
            Temple was built by the Chola King Rajaraja Chola ll in the 12th century CE. Presided by the Hindu God Lord Shiva, the
            temple is amongst the eighteen medieval era Hindu temples in the Kumbakonam area. The shrine displays the
            Vaishnavism and Shaktism legs of Hinduism, and the traditional Nayanars- the Bhakti saints of Shaivism. Constructed in
            the chariot structure and built in stone, the temple has smaller shrines dedicated to several Vedic and Puranic deities
            including Indra, Agni, Varuna, Vayu, Brahma, Surya, Vishnu, Saptamtrikas, Durga, Saraswati, Sri devi (Lakshmi), Ganga,
            Yamuna, Subrahmanya, Ganesha, Kama, Rati and others.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/kumbakonam1 (4).jpeg")}
            alt="Airavatesvara Temple"
            className='im9'>
          </img>
        </div>
</section>

<section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Madurai</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/madurai1..jpeg")}
            alt="Vaigai Dam"
            className='im2'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Vaigai Dam, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni District
            in the South Indian State of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai and travellers on their way to
            Periyar Wildlife Sanctuary often visit this massive and wondrous dam. Over the years, the site has become a favourite picnic
            spot as it gets beautifully iluminated in the evenings especially on weekends, and one can spend hours admiring the
            splendid view. The soft and warm sunrises by the reservoir are worth experiencing too.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            On one side of the dam is a beautiful garden known as Litle Brindavan maintained by the management for the
            visitors. Little Brindavan has a variety of exotic flowers and plants and is a preferred getaway for nature lovers living nearby.
            The play area made especially for children is a relief for parents as they watch their little ones have fun in the unpolluted air.
          </p>
          </span>
        </div>
  </section>

      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Meghamalai, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Often known as the "High Wavy Mountains ", Meghamalai is a petit yet beautiful place located in the Western
            Ghats in the state of Tamil Nadu. At an elevation of 1500 meters, this place is a perfect getaway to beat the heat and
            enjoy some peaceful time relaxing amidst nature. Nestled between the evergreen forest this place is filled with the fresh
            aroma of cardamom, cinnamon and pepper. The lush green tea plantations will give you an opportunity to sip fresh
            piping tea and enjoy a lazy stroll amidst nature replete with flora and fauna
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The Meghamalai region of the Western Ghats is a paradise unexplored even by the people of Tamil Nadu. The
            local Tamil language also refers to it as Paccha Kumachi, which means 'Green Peaks ' Located at approximately 1,500
            metres above sea level, this small mountain village is surrounded by tea and cardamom plantations.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/madurai2.jpeg")}
            alt="Meghamalai"
            className='im9'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/madurai3..jpeg")}
            alt="Samanar Hills"
            className='im2'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Samanar Hills, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock complex
            which was originally home to Tamil Jain monks. The hill caves are a popular place of tourism and have elaborate carvings
            and drawings of the monks, on the interior walls. The spot also has a beautiful lotus temple located in the premises.
            surrounded by nature. Meghamalai is
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            There is no better place to escape the heat than this picturesque getaway
            one of the best places to visit in Tamilnadu if you are looking for a quiet and peaceful weekend away from the city. During
            your vacation in this hill station, you can explore the following samanar hills tourist places.The city stands out for the active
            nightlife of the people, making it the safest place to travel.Madurai which is one of the oldest temple city has lot more to
            offer than just spiritual things.
          </p>
          </span>
        </div>
      </section>

      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Thirumalai Nayakar, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak. The
            palace depicts the perfect blend of Dravidian and Rajput styles. After Independence, this palace was declared as a national
            monument and till date continues to be one of the spectacular monuments of Southern India. The magnificent palace is
            located in the vicinity of the very famous Meenakshi Amman Temple. Depicting the Saracenic style of architecture, it was
            constructed during the rule of Nayak Dynasty and is widely considered as the most ilustrious monument built by the
            Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace) is in the main city of Madurai, which is located 2 km away
            from the Meenakshi Amman temple. The Thirumalai Nayak Mahal was built by the Thirumalai Nayak king during the 16th
            century.The building that is still observable was the resident of the King Nayak and the throne of the King Nayak has been
            kept for display.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/madurai4..jpeg")}
            alt="Airavatesvara Temple"
            className='im9'>
          </img>
        </div>
</section>

<section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Yercaud</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/yercaud...(1).jpeg")}
            alt="Pagoda Point"
            className='im3'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Pagoda Point, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated to a
panoramic view of the entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21
hairpin bends of Yercaud can be seen from this spot as they envelop themselves around the hills. The mysterious piles of
stones arranged in the form of a pyramid resembling a Pagoda give the location its unique name. These stones are believed
to be placed here by local tribes.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty
of the spot and the scenery of the Eastern Ghats, with the greenery growing within the rugged terrains of the hills, entwined
with sights of the craggy cliffs
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Botanical Garden, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various
species of plants must make it a point to visit the orchid garden and the green house in the Botanical garden.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it
will bloom only once in twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide
variety of orchids which includes 30 orchid species that are exclusively found here. Many endangered species of orchids
are persevered in this orchidarium which is ranked the third largest of all the orchidariums in India
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/yercaud1 (2).jpeg")}
            alt="Botanical Garden"
            className='im4'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/yercaud1.(3).jpeg")}
            alt="Emerald lake"
            className='im5'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Emerland Lake, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The most aluring aspect of ercaud is its big yet natural lake very popularly known as the Emerald Lake.
Surrounded by some wonderful cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the
eyes.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well
as rowing boats can be chosen according to your comfort and intersts. A nominal amount is collected as caution fee before
issuing the boats and austere safety measures are followed by the authorities
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Lady's Seat, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam
and Salem town. Besides, the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful
view. This viewing tower is open for visitors only during the daytime. Lady's Seat, Gent's Seat and Children's Seat, located
to the south-west of Shevaroy Hill are the names given to a group of rocks located on the Yercaud Hills.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            It is believed that an English lady used to spend her evenings at this place watching the beautiful view of this
rock. For those interested in a closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur
Dam on the Cauvery River. Great shots of the river can be had from this spot in the late afternoon when the sun's rays are
reflected in its waters
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/yercaud1.(4).jpeg")}
            alt="lady's Seat"
            className='im9'>
          </img>
        </div>
</section>

<section className='mt-5 pt-1 pb-4' id='img1'>
        <h2 className='text-center'>Theni</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/theni1.(1).jpeg")}
            alt="Chinna Suruli Falls"
            className='im3'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Chinna Suruli Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni. It
cascades all the way down from Meghamalai to form a pool of cool, sparkling water at the foothills of the mountain.

Located around 54 kilometres away from the main centre, near the Kombaithozhu village, Chinna Suruli Falls is a lovely and
serene destination to visit in and around Theni. It can be included in your itinerary of local sightseeing if you are
Theni and its nearby attractions

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Chinna Suruli Falls is one of the beautiful waterfalls near Madurai and the top visiting places in Megamalai range.
It is also known as Cloudland Falls as it originates in the Megamalai Hills. In the local language, Chinna means small or
younger, so in a sense, it is called the younger Suruli
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Kumbakkarai Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that is
situated at the foothills of the Kodaikanal hills. The water cascades down in two layers- at the first stage, the water collects
at the rock boulders and recesses. And in the second stage, it falls down the layer of rocks. These recesses are named
after wild animals like tiger, snake, elephant, cheetah etc.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Besides boasting boasting of immense scenic beauty and the melodious tinkering of the gushing waters, the place also
offers utter peace and tranquility. Also unlike most other waterfalls, Kumbakkarai Falls also offer shallow waters where
tourists are welcomed to swim or to take a dip. The popular tourist spot is the most crowded during the rainy season
when the water level is high and the neighboring areas glows with greenery.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/theni1 (2).jpeg")}
            alt="Kumbakkarai Falls"
            className='im9'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/theni1.(3).jpeg")}
            alt="Meghamalai"
            className='im3'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Meghamalai, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise that
you read about in books, complete with exhilarating trek routes, breathtaking scenes and an excellent opportunity to take a
break from your everyday life in the lap of nature.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The Highwavys Mountain, locally called the Meghamalai, is an undulating terrain of peaks belonging to the
Varushanad Range of Western Ghats, in Theni district of Tamil Nadu. Located at an elevation of 1,500 metres above the sea
level, Meghamalai is covered in the trademark green of Sahyadri, thus earning the name "Pacha Kumachi in Tamil, meaning
'Green Peaks '. Green peaks of Meghamalai Source Up until recently, the Meghamalai Hills were restricted to private estates
of tea and coffee plantations
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Suruli Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of
Theni as well It is a perfect destination to get up close and personal with the nature and cool off in its pristine waters

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            At a distance of 123 kms from Madurai, 22 Kms from Thekkady (via Gudalur & Karuna Muthevan Patt), 10 Kms
from Kambam (via Suruli Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst rich filora fauna and serve as a
perfect picnic spot. The falls serve as the venue of Summer Festival, organized every year by the Tamil Nadu Tourism
Department. The Kailasanathar Temple Cave is also an added attraction of the place. There are also other 18 caves in and
around the Suruli Falls. The Kailasanatha temple and Suruli Velappar temple are also nearby the falls.The falls are
reachable by road from Kambam and Gudalur towns
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/theni1.(4).jpeg")}
            alt="suruli falls"
            className='im3'>
          </img>
        </div>
      </section>


      <section className='mt-5 pb-4' id='img1'>
        <h2 className='text-center'>Hogenakkal</h2> 
        <h3 className='text-center pb-5'>Tourist Places Visit</h3>
        <div className='d-flex mt-5'>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/hogenakkal1.jpeg")}
            alt="Theerthamalai temple"
            className='im2'>
          </img> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Theerthamalai Temple,Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the
Theerthamalai temple. Lord Theerthagireeswar, a form of Lord Shiva is the worshipping deity.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            It is believed that Lord Ram worshipped Lord Shiva at this temple to absolve him of the sin of killing so many
demons, after his victory over Rvana. Therefore, it is believed that a dip in these holy waters can help man rid himself of sins
committed against others. Theerthamalai Temple or Theerthagiriswarar Temple is located in smalvillage Theerthamalai, just
16 km from Harur in Dharmapuri district of Tamil Nadu. The name Theerthamalai in Tamil means hill with sacred water. The
temple is situated about one km up the steep slope of the hillock, derives its name from the five springs in the temple. This
temple was built during 7th Century when the Cholas and the Pandya's were ruling this dynasty.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img2'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Hogenakkal Falls, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of Tamil
Nadu. The place gets its name from Hogenakkal, which means 'smoking rocks', owing to the unique rock arrangement
that exists around it. The gushing beauty of this cascade is one of a kind and is often quoted as being the "Niagara falls of
India".
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The Kaveri River forks into multiple streams and falls through multiple steps, making the sight a mesmerising
thing to behold. The carbonatite rocks by these falls are the oldest of its kind in South Asia and one of the oldest in the
world. Drinking water can also be obtained from the falls, and interestingly enough, the water here is believed to possess
medicinal properties, owing to the numerous herbs that grow in its path. Known for its pristine appeal.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/hogenakkal2..jpeg")}
            alt="falls"
            className='im9'>
          </img>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img3'>
        <div className='d-flex mt-5'> 
        <img 
            style={{ width: '20%' }}
            src={require("../Images/hogenakkal3.jpeg")}
            alt="Pennagaram village"
            className='im3'>
          </img>
          <span className='ms-4 me-3 disttext '>
          <p><b>Pennagaram village, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every
month to attract tourists, The village is also know for its brightly colored giant teracotta statues, which are known as
Aiyanars.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            According to census 2011 information the sub-district code of Pennagaram Block (CD) is 05889. Total area of
pennagaram taluka is 1,130 km? including 1,117.33 km* rural area and 13.04 km* urban area. Pennagaram taluka has a
population of 2,34,853 peoples, out of which urban population is 29,654 while rural population is 2,05,199. Pennagaram
taluka has a population density of 208 inhabitants per square kilometre. There are about 57,398 houses in the sub-district,
including 7,266 urban houses and 50,132 rural houses.
          </p>
          </span>
        </div>
      </section>
      <section className='mt-5 pb-4' id='img4'>
        <div className='d-flex mt-5'> 
          <span className='ms-4 me-3 disttext '>
          <p><b>Mettur Dam, Overview</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built
across the River Cauvery at the canyon, Metur Dam was built in the year 1943 and is a sight of sheer beauty. The dam is
surrounded by verdant hills and picturesque natural beauty and is quite popular among tourists. One of the most
extraordinary features of the dam is its design, which is a testament to the country's engineering genius. Mettur Dam is a
huge human-made marvel which spans over a massive length of 1700 metres and is a major hotspot where tourists visit
from all across the country to relax and seek solitude.

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Apart from being a tourist hotspot, the dam also provides irrigation facility for 2,71,000 acres of agricultural
land around it. Another major attraction of the area is a water reservoir flanked by hilly ranges all around.
          </p>
          </span>
          <img 
            style={{ width: '20%' }}
            src={require("../Images/hokenakkal4..jpeg")}
            alt="view"
            className='im9'>
          </img>
        </div>
      </section>
    </div>
  )
}

export default Places
