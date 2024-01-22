const floors = [
  {
    floor_title: "Floor 1",
    description: "Office for Software Developers",
    deskStatus: "AVAILABLE",
    image_url: "/desks/desks-main.png",
  },
];

const rooms = [
  {
    floor: {
        connect: { id: rooms[0].id },
      },
    room_title: "Private Office",
    description: "Private Office",
    image_url: "/desks/desks-prvO.png",
    deskStatus: "AVAILABLE",
  },
  {
    floor: {
        connect: { id: rooms[0].id },
      },
    room_title: "Common Office",
    description: "Common Office",
    image_url: "/desks/desks-common.png",
    deskStatus: "AVAILABLE",
  },
  {
    floor: {
        connect: { id: rooms[0].id },
      },
    room_title: "Meeting Space",
    description: "Meeting Space",
    image_url: "/desks/desks-mtngSpc.png",
    deskStatus: "AVAILABLE",
  },
  {
    floor: {
        connect: { id: rooms[0].id },
      },
    room_title: "Content Room",
    description: "For video productions.",
    image_url: "/desks/desks-cntO.png",
    deskStatus: "AVAILABLE",
  },
  {
    floor: {
        connect: { id: rooms[0].id },
      },
    room_title: "Open Office",
    description: "For Socialization",
    image_url: "/desks/desk-open.png",
    deskStatus: "AVAILABLE",
  },
];

const desks = [
  {
    room: {
      connect: { id: rooms[1].id },
    },
    desk_title: "Desk 01",
    description: "",
    image_url: "/desks-only/ca1.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[1].id },
    },
    desk_title: "Desk 02",
    description: "",
    image_url: "/desks-only/ca2.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[1].id },
    },
    desk_title: "Desk 03",
    description: "",
    image_url: "/desks-only/ca3.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[1].id },
    },
    desk_title: "Desk 04",
    description: "",
    image_url: "/desks-only/ca4.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[3].id },
    },
    desk_title: "Desk 01",
    description: "",
    image_url: "/desks-only/cr1.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[3].id },
    },
    desk_title: "Desk 02",
    description: "",
    image_url: "/desks-only/cr2.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[3].id },
    },
    desk_title: "Desk 03",
    description: "",
    image_url: "/desks-only/cr3.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[3].id },
    },
    desk_title: "Desk 04",
    description: "",
    image_url: "/desks-only/cr4.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 01",
    description: "",
    image_url: "/desks-only/ms1.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 02",
    description: "",
    image_url: "/desks-only/ms2.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 03",
    description: "",
    image_url: "/desks-only/ms3.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 04",
    description: "",
    image_url: "/desks-only/ms4.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 05",
    description: "",
    image_url: "/desks-only/ms5.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 06",
    description: "",
    image_url: "/desks-only/ms6.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 07",
    description: "",
    image_url: "/desks-only/ms7.png",
    deskStatus: "AVAILABLE",
  },
  {
    room: {
      connect: { id: rooms[2].id },
    },
    desk_title: "Desk 08",
    description: "",
    image_url: "/desks-only/ms8.png",
    deskStatus: "AVAILABLE",
  },
];

module.exports = {
  floors,
  rooms,
  desks,
};
