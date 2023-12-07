// MÉTODOS AVANZADOS

// Hemos aprendido a iterar sobre arrays con bucles for tradicionales y bucles for of

// For tradicional
const pakoHobbies = ["4chan", "Forocoches", "4chan", "Fishing", "As"]

for (let i = 0; i < pakoHobbies.length; i++) {
  const hobby = pakoHobbies[i] // Accedemos a cada elementos de nuestro array a través de índices
}

for (const hobby of pakoHobbies) {
  // la variable hobby en nuestro bucle for of es cada elemento del array directamente
  // El problema es que aquí perdemos acceso a los índices de nuestro array
}

// 1) forEach(): Empezamos la intro a métodos avanzados. El método forEach() también nos permite iterar sobre un array (es un método PROPIO de los arrays)
// Estos métodos avanzados se conocen como funciones de segundo orden, en la medida en que reciben como argumento otra función...
pakoHobbies.forEach((hobby) => console.log("EL HOBBY ==>", hobby)) // En este caso, le estamos pasando esta función a nuestro método forEach: (hobby) => console.log("EL HOBBY ==>", hobby)
// Estas funciones que actúan como argumentos de otras funciones se conocen como CALLBACKS.

// El método forEach ejecutará la callback que pasemos por cada elemento del array sobre el cual estemos iterando.
// Generalmente (el 99.99% de las veces) para crear callbacks se utiliza la sintaxis de las arrow functions pero también podríamos pasar una función tradicional

// Revisión de ejercicios pasados con forEach()
const modifiedUsernames = []

const pakoUsernames = [
  "goblin729", // Queremos transformar cada usuario => goblin729@gmail.com
  "elXokasIstheBest",
  "furbitol98",
  "forocarros98",
]

// Iteramos sobre cada username y directamente lo metemos en nuestro array de usernames modificados
const result = pakoUsernames.forEach((username) =>
  modifiedUsernames.push(`${username}@gmail.com`)
)

const filteredUsers = []

const tinderUsers = [
  {
    username: "carlitos_crypto",
    age: 18,
    hobbies: ["boxing", "anime", "llados_fitness"],
  },
  {
    username: "glitter_guru",
    age: 25,
    hobbies: [
      "DIY glitter bombs",
      "competitive karaoke",
      "language learning meetups",
    ],
  },
  {
    username: "alien_agronomist",
    age: 30,
    hobbies: ["crop circle designing", "UFO spotting", "anime"],
  },
  {
    username: "sassy_queen",
    age: 27,
    hobbies: ["hide-and-seek championships", "cats", "vlogging"],
  },
  {
    username: "time_traveling_chef",
    age: 35,
    hobbies: [
      "medieval cooking",
      "collecting vintage cookbooks",
      "participating in historical reenactments",
    ],
  },
  {
    username: "Joselu",
    age: 22,
    hobbies: ["Dogs", "Berserk", "BJJ"],
  },
  {
    username: "mystic_mermaid",
    age: 17,
    hobbies: ["50 Shades ;P", "Nana", "Twilight"],
  },
  {
    username: "cosmic_cowboy",
    age: 33,
    hobbies: [
      "cowboy bebop",
      "writing space western stories",
      "lunar landscape painting",
    ],
  },
  {
    username: "el_Chulo",
    age: 17,
    hobbies: ["Naruto", "Crossfit", "Ropita 😜"],
  },
]

// Por supuesto, dentro de nuestras callbacks, podemos ejecutar la lógica que nos plazca:
tinderUsers.forEach((tinderUser) => {
  const modifiedUser = {
    ...tinderUser, // Nos servimos de la sintaxis del spread operator para tomar todos los contenidos previos de nuestro objeto
    hasRedFlags: false,
  }
  if (tinderUser.hobbies.includes("anime")) modifiedUser.hasRedFlags = true // Fans del anime, sabéis que os veo como personas de cultura
  filteredUsers.push(modifiedUser)
})

// Vamos a jugar ahora con un ejemplo de la API de Google Places (Las "mejores" discotecas de Madrid)
// Para mayor conveniencia, podéis encontrar esta criatura en el archivo de consts.js
const places = [
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Atocha, 125, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.4097138,
        lng: -3.6931118,
      },
      viewport: {
        northeast: {
          lat: 40.41103282989272,
          lng: -3.691771220107279,
        },
        southwest: {
          lat: 40.40833317010728,
          lng: -3.694470879892723,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Teatro Kapital",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113778761633912463455">Andrea anza&#39;</a>',
        ],
        photo_reference:
          "AeJbb3dgl3ktxbtovIPsQYaLrWVKI3sUpIsIEAA0asWn3UHGQ64KP5TUc4JI19NXkHXGmT7RX7_9QXHAw8pWbwgXJ0U3so5NdmiRe7dr08pqeMjh-r4htIm8BExbq2AaDKyjdXOCFBHWVoBCGHsH8HZ7oHae3bkhdkZKac2sI7TUhu9N_HcX",
        width: 4032,
      },
    ],
    place_id: "ChIJ4RUenCgmQg0RdI4x7geRUEA",
    plus_code: {
      compound_code: "C854+WQ Madrid",
      global_code: "8CGRC854+WQ",
    },
    price_level: 3,
    rating: 3.7,
    reference: "ChIJ4RUenCgmQg0RdI4x7geRUEA",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 6914,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Jacometrezo, 6, 28013 Madrid, España",
    geometry: {
      location: {
        lat: 40.4203124,
        lng: -3.7073311,
      },
      viewport: {
        northeast: {
          lat: 40.42160697989272,
          lng: -3.705895120107278,
        },
        southwest: {
          lat: 40.41890732010728,
          lng: -3.708594779892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Discoteca Velvet",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114981244123916279975">Laura Chaves</a>',
        ],
        photo_reference:
          "AeJbb3cSFLg_m-VwwU56pk13kBbdD_Xr3gbkiS1Mqh0ZcSrVnT2ynavF0KMX1kPW2U_kqHrSbgXeHltDYrFnrskFyT3_O0_CR291ZmEGFzRX9I5Pf1Xn-2KNKqCESfQiMOX_bpGjVl9WOzvSGwYfckaDMXsymYgyAvZBwCt3YCPE-bc20NEg",
        width: 4032,
      },
    ],
    place_id: "ChIJ2xUxfnwoQg0RjciyxCJXXso",
    plus_code: {
      compound_code: "C7CV+43 Madrid",
      global_code: "8CGRC7CV+43",
    },
    price_level: 2,
    rating: 3.6,
    reference: "ChIJ2xUxfnwoQg0RjciyxCJXXso",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1495,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Toledo, 86, 28005 Madrid, España",
    geometry: {
      location: {
        lat: 40.4087463,
        lng: -3.7106359,
      },
      viewport: {
        northeast: {
          lat: 40.41006812989272,
          lng: -3.709209320107278,
        },
        southwest: {
          lat: 40.40736847010728,
          lng: -3.711908979892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Shoko Madrid",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 1335,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100161549541227993164">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3fmPdM56N4f7knXvdgEMMvV4TQg9VG6VCV4fteFdHZ6lRMi3IdIbRcn37ZGkpjRlWDol_Mj5ukbczkafdKfSm4DyvYa3lX6qtLbiNNgVVm5MtniuFp0rFEgg-EAzw_Icya8I1tY7E9gVx5WbcTHDicVrvmDs8hzFCDOh-ZFPNmZ0VGQ",
        width: 2000,
      },
    ],
    place_id: "ChIJc9qE39YnQg0RyeCi9ciRHLQ",
    plus_code: {
      compound_code: "C75Q+FP Madrid",
      global_code: "8CGRC75Q+FP",
    },
    rating: 3.5,
    reference: "ChIJc9qE39YnQg0RyeCi9ciRHLQ",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 3620,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "Calle de José Abascal, 56, 28003 Madrid, España",
    geometry: {
      location: {
        lat: 40.437878,
        lng: -3.692209,
      },
      viewport: {
        northeast: {
          lat: 40.43933722989271,
          lng: -3.690812370107278,
        },
        southwest: {
          lat: 40.43663757010727,
          lng: -3.693512029892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Opium Madrid",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 445,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/106159245280736732926">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3ePzMP3G5cIn6-OrsYYvcZt8KAS8hGYlH-9AbkzplDDP7g4mRFPTVDmZXXpk72iuZ5Ocd_Ngc5rhKqqMdZFi5wjU8QqDb1qaCB8DSBYOik0kVO2OCJoKvi9PrE0fxOStE2DsWU3pi9ptEA0JTx7j_8frV1ZLf34kpAd960Wo35mdjq2",
        width: 800,
      },
    ],
    place_id: "ChIJAS_E7-0oQg0RbyuDwsHvriQ",
    plus_code: {
      compound_code: "C8Q5+54 Madrid",
      global_code: "8CGRC8Q5+54",
    },
    price_level: 3,
    rating: 3.7,
    reference: "ChIJAS_E7-0oQg0RbyuDwsHvriQ",
    types: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 2638,
  },
  {
    business_status: "CLOSED_TEMPORARILY",
    formatted_address: "C. del Arenal, 11, 28013 Madrid, España",
    geometry: {
      location: {
        lat: 40.4171637,
        lng: -3.7065661,
      },
      viewport: {
        northeast: {
          lat: 40.41853482989272,
          lng: -3.704942420107277,
        },
        southwest: {
          lat: 40.41583517010728,
          lng: -3.707642079892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#13B5C7",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Teatro Eslava",
    permanently_closed: true,
    photos: [
      {
        height: 2448,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/105913765703943959347">mario perez</a>',
        ],
        photo_reference:
          "AeJbb3eMAHtyYFwX2WzFQp4t1sn16jNJpNy0Qquchszz6sWjL_GStuIXdy19EPv7uKl_JwTP7QGS1mzMhNOvUfjpQUb-45hR_AfleHQiS_OARCYf5qldhCRrbDIib3ISKEJ9HuDQZRjydERN8AoMijWwBiFxv6qzDPYakvYYsLEnVFhxGuZl",
        width: 3264,
      },
    ],
    place_id: "ChIJ3edGl34oQg0RiMwsMcIHmAk",
    plus_code: {
      compound_code: "C78V+V9 Madrid",
      global_code: "8CGRC78V+V9",
    },
    price_level: 3,
    rating: 3.8,
    reference: "ChIJ3edGl34oQg0RiMwsMcIHmAk",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 4908,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "Pl. de Tirso de Molina, 1, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.41234910000001,
        lng: -3.7034333,
      },
      viewport: {
        northeast: {
          lat: 40.41372952989273,
          lng: -3.701992570107278,
        },
        southwest: {
          lat: 40.41102987010728,
          lng: -3.704692229892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Medias Puri",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3265,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114402429349133948499">Jesus Pardo</a>',
        ],
        photo_reference:
          "AeJbb3f-0b8duxmHjocGrj_NOi7G7cln45rBp4jiOFo1Qidf7VyLK1AxxW7Laa00ww1kagCrbEicC9EvMlrwr8Ji_WLR1JhkZayh7DL28RueVA5_wgcQYChPheZBk0IFekWsxwaurmJFmoNF2XUhtDHS0Q43MbJK-o2a1nzJzHinrqHmo1CG",
        width: 4898,
      },
    ],
    place_id: "ChIJN1ywUdUnQg0RE34DRg2lbu8",
    plus_code: {
      compound_code: "C76W+WJ Madrid",
      global_code: "8CGRC76W+WJ",
    },
    price_level: 2,
    rating: 3.9,
    reference: "ChIJN1ywUdUnQg0RE34DRg2lbu8",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 4994,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "P.º de Recoletos, 16, 28001 Madrid, España",
    geometry: {
      location: {
        lat: 40.4226066,
        lng: -3.6910073,
      },
      viewport: {
        northeast: {
          lat: 40.42396237989272,
          lng: -3.689741670107278,
        },
        southwest: {
          lat: 40.42126272010727,
          lng: -3.692441329892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "GUNILLA CLUB",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 913,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/105428548323487199910">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3f9PAsMyDoBDaj4YGAT4XZc6_FrrSiDqLGHoOKRY2-xyZR9mqyw-5NN_Kj0gY6QdplUbQviCSWNSKmEm68GoOsr8ab18TQdQCmKFeHtxFMc03QKL1Tvjq4irHXWqJ0HWkrqn8WTmvTBvaRRaez3esSsDz9YNA1sZsZ9Cw2AxW2LTR3b",
        width: 1600,
      },
    ],
    place_id: "ChIJX_CnkZooQg0RxzG0-ogWb_c",
    plus_code: {
      compound_code: "C8F5+2H Madrid",
      global_code: "8CGRC8F5+2H",
    },
    price_level: 3,
    rating: 3.4,
    reference: "ChIJX_CnkZooQg0RxzG0-ogWb_c",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1037,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Barceló, 11, 28004 Madrid, España",
    geometry: {
      location: {
        lat: 40.4270028,
        lng: -3.6997019,
      },
      viewport: {
        northeast: {
          lat: 40.42824417989272,
          lng: -3.698439070107277,
        },
        southwest: {
          lat: 40.42554452010728,
          lng: -3.701138729892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Teatro Barceló",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 560,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104317949858261423392">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3fJXq1PbkAy1_2wP3ikqRNXzQ-Dw8aO7zu7uS5iHAKWy8HQaYNspJ6dY10_myNb9G6Rs3f4KVjeYwkFbxaACyHKOgMkeCimjKHdQWeTpGavcr8W3RYrhnzE8lWYazgW91gvVyuP9X5VpHHeW_efrXWRKnhto7n48x23xlMzJbw4OhnY",
        width: 1000,
      },
    ],
    place_id: "ChIJA5VHDIkoQg0RMkWdiO8dc3o",
    plus_code: {
      compound_code: "C8G2+R4 Madrid",
      global_code: "8CGRC8G2+R4",
    },
    price_level: 3,
    rating: 3.7,
    reference: "ChIJA5VHDIkoQg0RMkWdiO8dc3o",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 5142,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "Calle de Génova, 28, 28004 Madrid, España",
    geometry: {
      location: {
        lat: 40.4254044,
        lng: -3.6916222,
      },
      viewport: {
        northeast: {
          lat: 40.42679952989273,
          lng: -3.690222820107278,
        },
        southwest: {
          lat: 40.42409987010728,
          lng: -3.692922479892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Bling Bling Madrid",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 2250,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/116412615656006322587">Jose Pablo Hernanz de Antonio</a>',
        ],
        photo_reference:
          "AeJbb3cys_svVy8ZQprb2-Xa77aMoCpEtaJXNSMjQjjkte-0BqLtNlkGqniXJwMhRF0ygv1fcBvJ2CbYasnKZseOBrrrajTV2lW6MQ8YA9g1tMp22pwUoCatUho34wt9pf2tL5IWzWLJeoy-NsazlGS9EUv6_nN-BP_irMDry0bhjHMwLvzl",
        width: 4000,
      },
    ],
    place_id: "ChIJG7BRN5AoQg0RNRomK08lzT8",
    plus_code: {
      compound_code: "C8G5+59 Madrid",
      global_code: "8CGRC8G5+59",
    },
    price_level: 3,
    rating: 3.3,
    reference: "ChIJG7BRN5AoQg0RNRomK08lzT8",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1125,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de la Aduana, 21, 28012 679013092, Madrid, España",
    geometry: {
      location: {
        lat: 40.418402,
        lng: -3.701058,
      },
      viewport: {
        northeast: {
          lat: 40.41972837989272,
          lng: -3.699706220107278,
        },
        southwest: {
          lat: 40.41702872010728,
          lng: -3.702405879892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Moondance Club",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 4160,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100197832019012367428">Eliezer Ruiz</a>',
        ],
        photo_reference:
          "AeJbb3ct6ANW8rD4bckmMVgLIwM5Uzv4dxRhy33OYNOZpqtKnKrr3o0MPNNo54CPURR18ZMOxMQppWFWGZSsqf0cK5_8Xiy8y_0qu_pEcmHb9stZMnrCOiacnwjUCAKVWTll3Y2EiiHwCUQJge4u_vc0c4rSyOTj-nKc0AvryG9ReescDHvJ",
        width: 3120,
      },
    ],
    place_id: "ChIJF8fjMYcoQg0R81Qj5Jahfro",
    plus_code: {
      compound_code: "C79X+9H Madrid",
      global_code: "8CGRC79X+9H",
    },
    price_level: 1,
    rating: 3.5,
    reference: "ChIJF8fjMYcoQg0R81Qj5Jahfro",
    types: ["night_club", "bar", "point_of_interest", "establishment"],
    user_ratings_total: 2046,
  },
  {
    business_status: "CLOSED_TEMPORARILY",
    formatted_address: "Calle de Lagasca, 31, 28001 Madrid, España",
    geometry: {
      location: {
        lat: 40.4254943,
        lng: -3.6855155,
      },
      viewport: {
        northeast: {
          lat: 40.42690862989272,
          lng: -3.684059220107278,
        },
        southwest: {
          lat: 40.42420897010728,
          lng: -3.686758879892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "La Posada de las Ánimas",
    permanently_closed: true,
    photos: [
      {
        height: 500,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100046538835341708591">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3d5uKGiKlKS4oQybg0sC2ZMsR_vbcl3Bt41ffDpzO5np7sNDeoJNn-IyLQzgbvXrkq05nK2LjHCyhNz14qpK37fRh6tef2D2Bzu1VIxCxGNtNYNh_b7sPE6YwrkOJHPypm1dm3AZ5rK0pFLB0o2vJre3fmIgLrzh1mOD53DdQfF1uNI",
        width: 1500,
      },
    ],
    place_id: "ChIJNRhMD5coQg0Rou-zlifL7ok",
    plus_code: {
      compound_code: "C8G7+5R Madrid",
      global_code: "8CGRC8G7+5R",
    },
    price_level: 2,
    rating: 3.3,
    reference: "ChIJNRhMD5coQg0Rou-zlifL7ok",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1444,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Atocha, 127, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.4097336,
        lng: -3.6931658,
      },
      viewport: {
        northeast: {
          lat: 40.41104522989272,
          lng: -3.691848920107277,
        },
        southwest: {
          lat: 40.40834557010728,
          lng: -3.694548579892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Independance Club",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1500,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111368611695123441770">Camila Viondi</a>',
        ],
        photo_reference:
          "AeJbb3cRxTxZXLgBmL4lvj6t85dXPAYc6NnM5MQ15moGGh998WJgXALRCc0bWIYmDfCg1pSn70lBncgnXENKGZBHewJFR32Kl-l0AVv4yv-xZ9ZeoG6CgFOS0OgPB6y-dNdeLA2FD3NL94cN5t-Lf7C8uhnDYLTGgSfbiR1_IPQgf7AKAkag",
        width: 2000,
      },
    ],
    place_id: "ChIJw39Rb4woQg0RmuQFbk5wQh8",
    plus_code: {
      compound_code: "C854+WP Madrid",
      global_code: "8CGRC854+WP",
    },
    price_level: 1,
    rating: 3.8,
    reference: "ChIJw39Rb4woQg0RmuQFbk5wQh8",
    types: ["night_club", "bar", "point_of_interest", "establishment"],
    user_ratings_total: 1911,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Rosario Pino, 14, 28020 Madrid, España",
    geometry: {
      location: {
        lat: 40.4626472,
        lng: -3.692972299999999,
      },
      viewport: {
        northeast: {
          lat: 40.46376387989272,
          lng: -3.691611820107277,
        },
        southwest: {
          lat: 40.46106422010727,
          lng: -3.694311479892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Oh My Club",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 4624,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113558831855861739636">Sandra Moreno</a>',
        ],
        photo_reference:
          "AeJbb3eyQcNA3Nq_B6Dz6uZwNRXzUdOSRxNAjBliYsa5Ry944ssv-WZaVR2D5V1C68E98f8IQgAK-jTXQlC4KG-hq3bwN4ne1aWxyivzTdkyb3sSmzOl_tO_2ps6IJ4abb5Hq9E64RPeCVi5CflxHd-9o8OFxhZvIcwmG8CjLNBynX7c78l_",
        width: 3472,
      },
    ],
    place_id: "ChIJh-2zptcpQg0Rcj3D14JLJfc",
    plus_code: {
      compound_code: "F874+3R Madrid",
      global_code: "8CGRF874+3R",
    },
    price_level: 4,
    rating: 3.6,
    reference: "ChIJh-2zptcpQg0Rcj3D14JLJfc",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1278,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "Av. Dr. Arce, 10, 28002 Madrid, España",
    geometry: {
      location: {
        lat: 40.4455806,
        lng: -3.6833062,
      },
      viewport: {
        northeast: {
          lat: 40.44706752989271,
          lng: -3.681933220107279,
        },
        southwest: {
          lat: 40.44436787010727,
          lng: -3.684632879892723,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Tiffany's The Club",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 3000,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104610507241670043570">Mario Barderas Fernandez</a>',
        ],
        photo_reference:
          "AeJbb3d16FaVMJPfhm5UEyc91BUcHMquNZT_p2dgV0yiEw_h-i_1w3mNOa7Jaa85n2OpLcqFhhnsqmvrQwlv1zceDuCqw3HP-KgX4la_AcZbpThp-tRRL1ps_LX7sYCLQmLwnXGKz8l9z1z91RVWWFDStrRSdfWANBGtMAq9VN7ZpjdHQhWg",
        width: 4000,
      },
    ],
    place_id: "ChIJPwielucoQg0RBX_fwL6pkKs",
    plus_code: {
      compound_code: "C8W8+6M Madrid",
      global_code: "8CGRC8W8+6M",
    },
    price_level: 2,
    rating: 3.1,
    reference: "ChIJPwielucoQg0RBX_fwL6pkKs",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1180,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Hilarión Eslava, 38, 28015 Madrid, España",
    geometry: {
      location: {
        lat: 40.4360398,
        lng: -3.7164921,
      },
      viewport: {
        northeast: {
          lat: 40.43739152989272,
          lng: -3.715188070107279,
        },
        southwest: {
          lat: 40.43469187010728,
          lng: -3.717887729892723,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Uñas Chung Lee",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1200,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/108464657901912746902">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3fDR-VqYQAPrA6-pbMoH3CSAekm2esMNmTWGNS69m-Iz1TKAyUzVJdnRK2GRB5NbpXhvUF-Urx7SWWJHLfjy84UlsW_n61aS7-psIZDCtYA7F0i_PVtNcFpuIqOfL-iCnK2-KvlzOqS5EhavaDy_S3o0h2lmJYFFzMKMZP7EaF0QNUR",
        width: 1800,
      },
    ],
    place_id: "ChIJv3xL3RQpQg0RMPdI8_mvSrc",
    plus_code: {
      compound_code: "C7PM+CC Madrid",
      global_code: "8CGRC7PM+CC",
    },
    rating: 3.6,
    reference: "ChIJv3xL3RQpQg0RMPdI8_mvSrc",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 868,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "28012, C. de Atocha, 107, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.4106506,
        lng: -3.6952522,
      },
      viewport: {
        northeast: {
          lat: 40.41192197989272,
          lng: -3.693968770107279,
        },
        southwest: {
          lat: 40.40922232010727,
          lng: -3.696668429892723,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Discoteca Azúcar",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 2251,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/105894896156126259736">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3fAIqC-G3mXrHzePIvW4RzJHC40lJZ1bBIV35FxeotjIhhWIpwwckJl6ANJ8xapzv6U7nuYHFWAf06q_kgyCV7cL9N20ykycVJa4DXZQ6LcvS_rjURgNiYSGSnk1steQynWvQ_-cuj5UPNNaFmYogKhpAqjSEo-Wclhm5JfV1ndMB2u",
        width: 1500,
      },
    ],
    place_id: "ChIJ3f-xqikmQg0RafMskPNqzYI",
    plus_code: {
      compound_code: "C863+7V Madrid",
      global_code: "8CGRC863+7V",
    },
    price_level: 1,
    rating: 3.8,
    reference: "ChIJ3f-xqikmQg0RafMskPNqzYI",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 267,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de la Victoria, 6, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.4159519,
        lng: -3.7017293,
      },
      viewport: {
        northeast: {
          lat: 40.41714652989273,
          lng: -3.700355220107279,
        },
        southwest: {
          lat: 40.41444687010728,
          lng: -3.703054879892723,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Discoteca El Son",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/107804119849261100331">Alex Saavedra</a>',
        ],
        photo_reference:
          "AeJbb3du_zZZJpvB_bj6U3guD9kYp-FnS6-MZNq9YglkxWk_RL35IECfeZBOHpRShaszI7_rTSbNFWbnk4s-8FCV4jOrUOaBhDjQvVh9qfi0zn5rKk5tvGh1VP2NzuDYCitx0C3SoxyxhLEamNPBZv60c4clw3nBtqCi57ug2hjeyg6xS-V5",
        width: 4032,
      },
    ],
    place_id: "ChIJwa9GjYAoQg0RFiWA_qmzVVE",
    plus_code: {
      compound_code: "C78X+98 Madrid",
      global_code: "8CGRC78X+98",
    },
    price_level: 2,
    rating: 3.9,
    reference: "ChIJwa9GjYAoQg0RFiWA_qmzVVE",
    types: ["night_club", "bar", "point_of_interest", "establishment"],
    user_ratings_total: 2151,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de Joaquín Costa, 27, 28002 Madrid, España",
    geometry: {
      location: {
        lat: 40.4461793,
        lng: -3.6865883,
      },
      viewport: {
        northeast: {
          lat: 40.44747862989272,
          lng: -3.685243370107277,
        },
        southwest: {
          lat: 40.44477897010728,
          lng: -3.687943029892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Discoteca B12 Madrid",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/110774180437078988127">Javier</a>',
        ],
        photo_reference:
          "AeJbb3f6FLHib5zE-0933cexBzreAUUGjRClHlzG7SyY81xk-vr019Z8mJ4IGs5lz5DUYmvifwJG7BvkQsZoELevmBXEfGLZ1To6xkyGr-_ArTarA8f9KlneN8oSDSFr4zMR7j_bTpeAVa7JDoh4pcWd2yPfinSVkRfdFskvaOqe3D2ejVeh",
        width: 4032,
      },
    ],
    place_id: "ChIJDenWYOYoQg0RuUZO1234Ung",
    plus_code: {
      compound_code: "C8W7+F9 Madrid",
      global_code: "8CGRC8W7+F9",
    },
    price_level: 1,
    rating: 3.8,
    reference: "ChIJDenWYOYoQg0RuUZO1234Ung",
    types: ["night_club", "bar", "point_of_interest", "establishment"],
    user_ratings_total: 965,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de las Hileras, 17, 28013 Madrid, España",
    geometry: {
      location: {
        lat: 40.4179152,
        lng: -3.7075792,
      },
      viewport: {
        northeast: {
          lat: 40.41927762989272,
          lng: -3.706171620107278,
        },
        southwest: {
          lat: 40.41657797010728,
          lng: -3.708871279892722,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "CIBELES Madrid",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 900,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/108164734633659656765">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3dJij0WtbdIMynD4ptuFNSttmoq-YxGMK9XBnd4Eo8SABLQ8OpdP-DYTo6mm_tdJ2UG0eqks8pgEChOnFcJ6Z5PRXBGopxKSzfi-V8qMimVt7A-A0qHPq_wqd9jSPWIt8gh7U2T0BEIhhDTtZtvX47913YLs7J2qwS--SAVXMhhjEZF",
        width: 1600,
      },
    ],
    place_id: "ChIJcWR6AnwoQg0Rdl8HdT6781g",
    plus_code: {
      compound_code: "C79R+5X Madrid",
      global_code: "8CGRC79R+5X",
    },
    price_level: 1,
    rating: 3.7,
    reference: "ChIJcWR6AnwoQg0Rdl8HdT6781g",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 695,
  },
  {
    business_status: "OPERATIONAL",
    formatted_address: "C. de la Cruz, 7, 28012 Madrid, España",
    geometry: {
      location: {
        lat: 40.4159966,
        lng: -3.7009025,
      },
      viewport: {
        northeast: {
          lat: 40.41738692989272,
          lng: -3.699621320107277,
        },
        southwest: {
          lat: 40.41468727010728,
          lng: -3.702320979892721,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
    name: "Samsara",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3889,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100214090870530392438">A Google User</a>',
        ],
        photo_reference:
          "AeJbb3c1qxV2zvKM2hykoM3Xmb1tvB3r7UfjGDp_A1bqyzdkqNaZLlH7g-Q1PIyhKey4GCeBsRqEsef2VobOxsTKDls1rATiA29GRG7mYoQOEJCnJSeljwwvOmXpscf-mXChPS7FYDNzk5ySiVmOuFKaHOaK3gJokKxMGpAneW_gYqFe2SUi",
        width: 5833,
      },
    ],
    place_id: "ChIJ3bly8IAoQg0R5BjLhhkCQpw",
    plus_code: {
      compound_code: "C78X+9J Madrid",
      global_code: "8CGRC78X+9J",
    },
    price_level: 2,
    rating: 4,
    reference: "ChIJ3bly8IAoQg0R5BjLhhkCQpw",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 1811,
  },
]

// Tenemos un array de objetos (cada uno de los cuales representa una discoteca)
// Cada objeto tiene una propiedad de "rating"

// Vamos a extraer la puntuación media de ratings:

let sum = 0

places.forEach((place) => {
  sum += place.rating
})

const average = sum / places.length // Creamos un sumatorio y finalmente dividimos por el número total de places.

// ¿Devuelve algo el método forEach()?
// La respuesta es NO. No devuelve ninguna estructura de datos ni nada parecido, luego su valor es "undefined"

// 2) Map: vamos a pasar a otro método avanzado de los arrays.
// El metodo map() devuelve un array cuyo número de elementos es igual que el array sobre el que iteramos.
// El valor de cada elemento en nuestro array será el que retornemos en nuestra callback

// MAP ==> DEVOLVER UNA COPIA MAPEADA/REPRESENTADA DE NUESTRO ORIGINAL...
const pakoOriginalUsernames = [
  "goblin729", // goblin729@gmail.com
  "elXokasIstheBest",
  "furbitol98",
  "forocarros98",
]

const userEmails = pakoOriginalUsernames.map(
  (username) => `${username}@gmail.com` // `${username}@gmail.com` es el valor que retornamos en nuestra callback
  // "=>" esto es un retorno implícito
)

// También lo podríamos haber escrito así:

const mappedUserEmails = pakoOriginalUsernames.map((username) => {
  return `${username}@gmail.com`
})

// En el mundo de software existe una diferencia clara entre méotodos destructivos y no destructivos.
// Los métodos destructivos son aquellos que modifican el input original con el que estamos jugando.
// En este caso, el método map NO es un método destructivo: el array original no se ve alterado de ninguna forma

const completeEmails = pakoUsernames.map(() => 5) // [5,5,5,5]
// No tenemos por qué devolver un array donde nos sirvamos de los elementos del mismo.
// Podemos retornar lo que queramos...

// Ejercicio: Tomando el ejemplo de places, vamos a retornar un array de objetos modificado
// donde solo tengamos en cuenta el rating y la dirección completa formateada => "Teatro Kapital, C. de Atocha, 125, 28012 Madrid, España"
const namedPlaces = places.map(({ name, formatted_address, rating }) => {
  return {
    completeAddress: `${name}, ${formatted_address}`,
    rating: rating,
  }
})

// Si quisiéramos devolver el objeto directamente sirviéndonos de la sintaxis de las funciones flecha, tendríamos que hacer esto:

const namedPlacesV2 = places.map(({ name, formatted_address, rating }) => ({
  // Envuelvo el objeto entre paréntesis
  completeAddress: `${name}, ${formatted_address}`,
  rating: rating,
}))
// Si no envuelvo el objeto entre paréntesis, Javascript interpreta las llaves como un nuevo bloque

// Ejercicio: tomando el array de places, devuelve una array de las ids (referencias) de cada foto
const photoIds = places.map(({ photos }) => photos[0].photo_reference)
