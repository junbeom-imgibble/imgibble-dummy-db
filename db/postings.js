const serverURL = "http://localhost:3001"
export const drafts = [
  {
    id: "1",
    thumbnail: serverURL + "/thumbnails/1.jpg",
    name: "TITLE1",
    label: "EVENT",
    feeds: [
      {
        id: "1",
        name: "FEED1",
        duration: 5,
        type: "VIDEO",
        content: serverURL + "/feeds/1.mp4",
        position: {
          width: 100,
          position_x: 0,
          position_y: 0,
          rotate: 30
        },
        elements: [
          {
            id: "1",
            position_x: 10,
            position_y: 0,
            width: 12,
            height: 12,
            sticker: serverURL + "/stickers/1.svg"
          },
          {
            id: "2",
            position_x: 12,
            position_y: 12,
            width: 20,
            height: 20,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "2",
        name: "FEED2",
        duration: 3,
        type: "VIDEO",
        content: serverURL + "/feeds/2.mp4",
        position: {
          width: 100,
          position_x: 0,
          position_y: 0,
          rotate: -30
        },
        elements: [
          {
            id: "1",
            position_x: 0,
            position_y: 20,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 80,
            position_y: 80,
            width: 8,
            height: 8,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "3",
        name: "FEED3",
        duration: 2,
        type: "VIDEO",
        content: serverURL + "/feeds/3.mp4",
        position: {
          width: 50,
          position_x: 10,
          position_y: 20,
          rotate: 45
        },
        elements: [
          {
            id: "1",
            position_x: 40,
            position_y: 0,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 50,
            position_y: 50,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/1.svg"
          },
        ]
      }
    ]
  },
  {
    id: "2",
    thumbnail: serverURL + "/thumbnails/2.jpg",
    feeds: [
      {
        id: "1",
        name: "FEED1",
        duration: 2,
        type: "VIDEO",
        content: serverURL + "/feeds/4.mp4",
        position: {
          width: 50,
          height: 50,
          position_x: 10,
          position_y: 20,
          rotate: 45
        },
        elements: [
          {
            id: "1",
            position_x: 10,
            position_y: 0,
            width: 12,
            height: 12,
            sticker: serverURL + "/stickers/1.svg"
          },
          {
            id: "2",
            position_x: 12,
            position_y: 12,
            width: 20,
            height: 20,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "2",
        name: "FEED2",
        duration: 3,
        type: "VIDEO",
        content: serverURL + "/feeds/5.mp4",
        position: {
          height: 40,
          width: 40,
          position_x: 0,
          position_y: 30,
          rotate: -20
        },
        elements: [
          {
            id: "1",
            position_x: 0,
            position_y: 20,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 80,
            position_y: 80,
            width: 8,
            height: 8,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "3",
        name: "FEED3",
        duration: 5,
        type: "IMAGE",
        content: serverURL + "/feeds/2.jpg",
        position: {
          height: 100,
          width: 100,
          position_x: 0,
          position_y: 0,
          rotate: 0
        },
        elements: [
          {
            id: "1",
            position_x: 40,
            position_y: 0,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 50,
            position_y: 50,
            width: 70,
            height: 40,
            sticker: serverURL + "/stickers/1.svg"
          },
        ]
      }
    ]
  },
  {
    id: "3",
    thumbnail: serverURL + "/thumbnails/3.jpg",
    name: "TITLE1",
    label: "EVENT",
    feeds: [
      {
        id: "1",
        name: "FEED1",
        duration: 8,
        type: "VIDEO",
        content: serverURL + "/feeds/7.mp4",
        position: {
          height: 100,
          width: 100,
          position_x: 5,
          position_y: 5,
          rotate: 20
        },
        elements: [
          {
            id: "1",
            position_x: 10,
            position_y: 0,
            width: 12,
            height: 12,
            sticker: serverURL + "/stickers/1.svg"
          },
          {
            id: "2",
            position_x: 12,
            position_y: 12,
            width: 20,
            height: 20,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "2",
        name: "FEED2",
        duration: 1,
        type: "VIDEO",
        content: serverURL + "/feeds/8.mp4",
        position: {
          height: 100,
          width: 100,
          position_x: 15,
          position_y: 15,
          rotate: 60
        },
        elements: [
          {
            id: "1",
            position_x: 0,
            position_y: 20,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 80,
            position_y: 80,
            width: 8,
            height: 8,
            sticker: serverURL + "/stickers/2.svg"
          },
        ]
      },
      {
        id: "3",
        name: "FEED3",
        duration: 1,
        type: "VIDEO",
        content: serverURL + "/feeds/6.mp4",
        position: {
          height: 80,
          position_x: 10,
          position_y: 30,
          rotate: -20
        },
        elements: [
          {
            id: "1",
            position_x: 40,
            position_y: 0,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/3.svg"
          },
          {
            id: "2",
            position_x: 50,
            position_y: 50,
            width: 40,
            height: 40,
            sticker: serverURL + "/stickers/1.svg"
          },
        ]
      }
    ]
  },
]

export const publish = []