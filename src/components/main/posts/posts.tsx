const posts = {
    1: {
      id: 1,
      name: "Drake",
      picture: "https://source.unsplash.com/sibVwORYqs0",
      image:
        "https://source.unsplash.com/5Lw1U5BIumE",
      hashtag: ["#nature", "#winter"],
      comments: [
        {
          commentName: "Dalton",
          commentPicture: "https://source.unsplash.com/VVEwJJRRHgk",
          commentText: "Amazing!",
          commentID: 1,
        },
        {
          commentName: "Flynn",
          commentPicture: "https://source.unsplash.com/rDEOVtE7vOs",
          commentText: "What a beautiful place!",
          commentID: 2,
        },
      ],
    },
    2: {
        id: 2,
        name: "Vienna",
        picture: "https://source.unsplash.com/_H6wpor9mjs",
        image:
          "https://source.unsplash.com/kbc8fp9TcfA",
        hashtag: ["#winter", "#snow", "#sledge"],
        comments: [
          {
            commentName: "Pearl",
            commentPicture: "https://source.unsplash.com/VVEwJJRRHgk",
            commentText: "Time to sledge!",
            commentID: 1,
          },
          {
            commentName: "Clay",
            commentPicture: "https://source.unsplash.com/sibVwORYqs0",
            commentText: "Andy looks beautiful!",
            commentID: 2,
          },
        ],
      },
      3: {
        id: 3,
        name: "Jenson",
        picture: "https://source.unsplash.com/DItYlc26zVI",
        image:
          "https://source.unsplash.com/aN21jB8GfKs",
        hashtag: ["#christmas", "#christmastree"],
        comments: [
          {
            commentName: "Bryce",
            commentPicture: "https://source.unsplash.com/6anudmpILw4",
            commentText: "Nice decoration!",
            commentID: 1,
          },
          {
            commentName: "Jesicca",
            commentPicture: "https://source.unsplash.com/kvKSL7B6eTo",
            commentText: "Just wow!",
            commentID: 2,
          },
        ],
      },
      4: {
        id: 4,
        name: "Hanna",
        picture: "https://source.unsplash.com/rDEOVtE7vOs",
        image:
          "https://source.unsplash.com/SYx3UCHZJlo",
        hashtag: ["#summer", "#beach"],
        comments: [
          {
            commentName: "Alex",
            commentPicture: "https://source.unsplash.com/DItYlc26zVI",
            commentText: "Nice!",
            commentID: 1,
          },
          {
            commentName: "Monty",
            commentPicture: "https://source.unsplash.com/6anudmpILw4",
            commentText: "Holiday!",
            commentID: 2,
          },
        ],
      },
      5: {
        id: 5,
        name: "Marcus",
        picture: "https://source.unsplash.com/EQFtEzJGERg",
        image:
          "https://source.unsplash.com/NMLv5HQZnK4",
        hashtag: ["#spring", "#leaves"],
        comments: [
          {
            commentName: "Louise",
            commentPicture: "https://source.unsplash.com/_H6wpor9mjs",
            commentText: "Spring Time!",
            commentID: 1,
          },
          {
            commentName: "Nate",
            commentPicture: "https://source.unsplash.com/kvKSL7B6eTo",
            commentText: "Nature!",
            commentID: 2,
          },
        ],
      },
      6: {
        id: 6,
        name: "Zoya",
        picture: "https://source.unsplash.com/RQ2dvd2FUV4",
        image:
          "https://source.unsplash.com/oIuDXlOJSiE",
        hashtag: ["#northernlights"],
        comments: [
          {
            commentName: "Eric",
            commentPicture: "https://source.unsplash.com/DItYlc26zVI",
            commentText: "Wow!",
            commentID: 1,
          },
          {
            commentName: "Chirstina",
            commentPicture: "https://source.unsplash.com/0fN7Fxv1eWA",
            commentText: "The color though!",
            commentID: 2,
          },
        ],
      },
      7: {
        id: 7,
        name: "Denver",
        picture: "https://source.unsplash.com/6anudmpILw4",
        image:
          "https://source.unsplash.com/M4EcjtmE01k",
        hashtag: ["#amsterdam", "#boat"],
        comments: [
          {
            commentName: "Tabitha",
            commentPicture: "https://source.unsplash.com/RQ2dvd2FUV4",
            commentText: "Enjoy!",
            commentID: 1,
          },
          {
            commentName: "Winnie",
            commentPicture: "https://source.unsplash.com/EQFtEzJGERg",
            commentText: "Nice shot!",
            commentID: 2,
          },
        ],
      },
      8: {
        id: 8,
        name: "Olivia",
        picture: "https://source.unsplash.com/gxgGo5vk9Jw",
        image:
          "https://source.unsplash.com/0G01UI1MQhg",
        hashtag: ["#coral", "#coralreef"],
        comments: [
          {
            commentName: "Macbeth",
            commentPicture: "https://source.unsplash.com/VVEwJJRRHgk",
            commentText: "Wow!",
            commentID: 1,
          },
          {
            commentName: "Andy",
            commentPicture: "https://source.unsplash.com/6anudmpILw4",
            commentText: "Nice shot!",
            commentID: 2,
          },
        ],
      },
      9: {
        id: 9,
        name: "Yusuf",
        picture: "https://source.unsplash.com/XHVpWcr5grQ",
        image:
          "https://source.unsplash.com/6PTiDHHnQrY",
        hashtag: ["#netherlands", "#tulip"],
        comments: [
          {
            commentName: "Joel",
            commentPicture: "https://source.unsplash.com/gxgGo5vk9Jw",
            commentText: "The color though!",
            commentID: 1,
          },
          {
            commentName: "Micky",
            commentPicture: "https://source.unsplash.com/EQFtEzJGERg",
            commentText: "Mind Blowing!",
            commentID: 2,
          },
        ],
      },
      10: {
        id: 10,
        name: "Iva",
        picture: "https://source.unsplash.com/kvKSL7B6eTo",
        image:
          "https://source.unsplash.com/-UWtb-3v6jQ",
        hashtag: ["#paris", "#night"],
        comments: [
          {
            commentName: "John",
            commentPicture: "https://source.unsplash.com/XHVpWcr5grQ",
            commentText: "Lovely!",
            commentID: 1,
          },
          {
            commentName: "Jackie",
            commentPicture: "https://source.unsplash.com/6anudmpILw4",
            commentText: "Nice shot!",
            commentID: 2,
          },
        ],
      },
      11: {
        id: 11,
        name: "Albert",
        picture: "https://source.unsplash.com/EQFtEzJGERg",
        image:
          "https://source.unsplash.com/7QjU_u2vGDs",
        hashtag: ["#dog", "#cat"],
        comments: [
          {
            commentName: "Daisy",
            commentPicture: "https://source.unsplash.com/gxgGo5vk9Jw",
            commentText: "Friends!",
            commentID: 1,
          },
          {
            commentName: "Jane",
            commentPicture: "https://source.unsplash.com/0fN7Fxv1eWA",
            commentText: "Family!",
            commentID: 2,
          },
        ],
      },
      12: {
        id: 12,
        name: "Amelie",
        picture: "https://source.unsplash.com/RQ2dvd2FUV4",
        image:
          "https://source.unsplash.com/1MO9VGUC138",
        hashtag: ["#sunset", "#dog"],
        comments: [
          {
            commentName: "Cleo",
            commentPicture: "https://source.unsplash.com/EQFtEzJGERg",
            commentText: "Nice shot!",
            commentID: 1,
          },
          {
            commentName: "Dori",
            commentPicture: "https://source.unsplash.com/kvKSL7B6eTo",
            commentText: "Picture perfect!",
            commentID: 2,
          },
        ],
      },
    
};

export default posts;