import "./App.css";
function App() {
  let youtubeCardData = [
    {
      id: 1,

      title:
        "Baby Taku's World - Medicine is yuck song - ChuChu TV Sing-along Nursery Rhymes",

      thumbnailUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/213/506/desktop-wallpaper-little-bo-peep-has-lost-her-sheep-nursery-rhyme-chuchu-tv-kids-songs-chuchu-tv-thumbnail.jpg",

      likes: "812k Likes",

      views: " 267k views",

      channelName: "Chuchu TV",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKZPV4J839Rbl6HPlbmBM5RToskBd-rL5rv0CgXrkQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,

      title:
        "LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh",

      thumbnailUrl:
        "https://i.ytimg.com/vi/m9Rx47LYqlU/maxresdefault.jpg",

      likes: "2M Likes",

      views: "72M views",

      channelName: "Sony Music India",

      channelLogoUrl:
        "https://e7.pngegg.com/pngimages/669/271/png-clipart-sony-music-headline-security-entertainment-music-industry-logo-sony-music-text-logo-thumbnail.png"
    },
    {
      id: 3,

      title:
        "The Best Smartphones Under ₹30,000 - Crazy Deals🔥🔥🔥",

      thumbnailUrl:
        "https://i.ytimg.com/vi/m3tzAnn9z7U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwkwOz4eR3-pEi6SDlPyVoYqWB9Q",

      likes: "100k Likes",

      views: " 2.7M views",

      channelName: "Technical Guruji",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
    id: 4,

      title: 
      "RULES ? അത് എന്താ സാധനം - TVA VS KVA",

      thumbnailUrl:
        "https://static.ivory.getloconow.com/default_thumb/1b19248b-f464-40c7-9601-a3973b97c7f9.jpg",

      likes: "41k Likes",

      views: " 253k views",

      channelName: " Eagle Gaming",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKYghAA1cRbSpG2ZwUDO0MKKRFHywUaJhUUvl_KCDg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,

      title:
        "Real Life Trick Shots 2 | Dude Perfect",

      thumbnailUrl:
        "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/07/20/dude-perfect-cheer.jpg",

      likes: "4.8M Likes",

      views: "327M views",

      channelName: "Dude Perfect",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKZ9O4Qyit6RKSTreLr1DrAXRuuxKPf6EBHfZixKaw=s176-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 6,

      title:
        "22 CRAZY USEFUL KITCHEN HACKS",

      thumbnailUrl:
       "https://i.ytimg.com/vi/nGTQJ2Y2U00/hqdefault.jpg",

      likes: "346k Likes",

      views: " 2.1M views",

      channelName: "5 Minute Craft",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/rrMcZWXHcMJ-GikSl3uEmB2gwu9uWg4gbgvI4_tFcNEkc5ys2emF0Oz6733mDVdaxz2jQ07xzQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
    id: 7,

      title:
        "Google Pixel 8 Pro | 4 days Review | Malayalam with Eng Sub",

      thumbnailUrl:
        "https://i.ytimg.com/vi/H1D76moq5JM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjlKRgVVazLnxFxwfqm3cWLnuWSg",

      likes: "25k ikes",

      views: " 427k views",

      channelName: "CallMeShazzam VINES",

      channelLogoUrl:
        "https://yt3.ggpht.com/fSJW9y7epIA9BDfQhtdzmY7TFkZeO673oo-cLXvEc6GqEfb7mUMjYN3jFhyHKDc-JMgEPOzc=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 8,

      title:
        "Fire rain experiment | സ്റ്റീൽ കൊണ്ട് പൂത്തിരി ഉണ്ടാക്കി | simple steel wool sparkler",

      thumbnailUrl:
        "data:image/jpeg;base64,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",

      likes: "186 Likes",

      views: "920 views",

      channelName: "V3 The Creators",

      channelLogoUrl:
        "https://yt3.googleusercontent.com/BQWh_3q2rbAk-1liJ5bKu1wZ1zAl8wu2A61k_zfGWZWvM7GjyDSEPgaWzNifCK_uw9-fU-E6FbI=s176-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 9,

      title:
        "ഏറ്റവും മികച്ച 25 Best Smartphone Offers in Flipkart Big Billion Day Sale",

      thumbnailUrl:
        "https://i.ytimg.com/vi/2oqclVsTh_w/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCFerR58BWsMeT1EO84V1aklIR50w",

      likes: "13k Likes",

      views: " 298k views",

      channelName: "Mr Perfect Tech",

      channelLogoUrl:
        "https://yt3.ggpht.com/ti69dOigzpNwHb2neKnlrIBza7PJ9JN_a_CEilUKT48K6ccOvOYbsPUJgq54EBxlyYHaOGEUOhc=s176-c-k-c0x00ffffff-no-rj-mo",
    },
  ];

  return (
     <div className="ytContainer">
      {youtubeCardData.map((ytCard, i) => {

        console.log(ytCard, i);
     
       return <div className="youtube-card">
        <img className="youtube-card"
        src={ytCard.thumbnailUrl}
          alt=""
        />

        <div className=" subHeading">
          <img
            className="logo"
            src={ytCard.channelLogoUrl}
            alt=""
          />
          <h3 className="content">
           <a href=" "> {ytCard.title}</a>
          </h3>
        </div>
        <div className="likeViews">
         <a href=" "><h5> {ytCard.channelName} </h5> </a> 
          <a href=" "><h5> {ytCard.views} </h5></a>
          <a href=" "><h5>{ytCard.likes}</h5> </a>
         
        </div>
      </div>
      
     })}

    </div>
  );
}

export default App;
