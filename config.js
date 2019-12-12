var config = {
    style: 'mapbox://styles/mjdanielson/ck3z3ssho1na11cjqcllxtdpx',
    accessToken: 'pk.eyJ1IjoibWpkYW5pZWxzb24iLCJhIjoiY2p2bzFlbnZ5MW5pbTN5cGJ2YWp2MW9vaiJ9.kAaZq3iyJwvrMLK7XDs_qw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Follow the Atlas Field Kit',
    subtitle: 'Bringing the functionality of Mapbox Atlas into any situation',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'introduction',
            title: 'Atlas Field Kit',
            description: 'Natural disasters and humanitarian crises may disrupt critical infrastructure, but relief efforts will require location information to help coordinate the response. So Mapbox took everything necessary to run Atlas and packed it into a ruggedized case to take into the field. #Followthefieldkit around the globe to see where Mapbox is enabling location data.',
            location: {
              center: [-29.88281, 26.74996],
              zoom: 1.5,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                 // {
                 //      layer: 'layer-name',
                 //   opacity: 1
                 //  }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'DC',
            location: {
                center: [-77.021439, 38.894961],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'gov summit',
            title: 'March 26, 2019 - #GovSummit',
            image: '/images/GovSummit.jpg/',

            description: 'Understanding "the where" in a disaster zone is crucial to effecively developing and deploying a timely response. <br> - Where is the extent of the damage? <br> - Where do we establish command posts? <br> - Where are the safe zones? <br> - Where are the supplies located? <br> - Where do we send rescue teams? <br> During the GovSummit in DC Mapboxers showed off how the field kit enables users to quickly establish a GIS command center to understand "the where" in a disaster zone.',
            location: {
                center: [-77.04542, 38.89925],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Netherlands',
            location: {
                center: [4.891, 52.376],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Amsterdamz',
            location: {
                center: [4.891, 52.376],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'Amsterdam',
            title: 'September 28, 2019 - Amsterdam',
            image: '/images/fronteers.png',

            description: 'Anjana travelled with the field kit to Amsterdam to attend the Mozilla TechSpeakers meetup and speak at the Fronteers Conference. She delivered a show stopping presentation on Lambda calculus before jetsetting to Lagos, Nigeria for the Concatenate Conference',
            location: {
                center:  [4.891, 52.376],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'West-Africa',
            location: {
                center:  [3.39271545, 6.4585990],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Nigeria',
            location: {
                center:  [3.39271545, 6.4585990],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'Lagos',
            title: 'October 9, 2019 - Lagos, Nigeria',
            image: '/images/Concatenate.png',

            description: 'Quick stop over in Lagos, Nigeria for Concatenate - A free conference for African developers.',
            location: {
                center:  [3.39271545, 6.4585990],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'East-Africa',
            location: {
                center:  [36.81683, -1.27799],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Kenya',
            location: {
                center:  [36.81683, -1.27799],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Nairobi',
            title: 'October 15, 2019 - Nairobi, Kenya',
            image: '/images/fronteers.png',

            description: "Can't stop, won't stop! Anjana delivered a presentation to another Concatenate conference, this time in Nairobi, Kenya!",
            location: {
                center:  [36.78782, -1.28446],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Africa',
            location: {
                center:  [15.30943, -4.29546],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'DRC',

            location: {
                center:  [15.30943, -4.29546],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Kinshasa',
            title: 'October 17, 2019 - Kinshasa, Democratic Republic of Congo',
            image: '/images/Kinshasa.png',

            description: "Anjana delivered the field kit and training sessions to the Democratic Republic of Congo in order to assist community partners HOT/OSM DRC and PATH in their work mapping the Ebola response. In regions such as the DRC, wifi capabilities are not always guarenteed and this lack of connectivity can be crippling as aid workers continue to fight both the Ebola virus and the outbreaks of violence in the region. Tools like the Atlas field kit, which allow aid workers to access location services offline, are critical for helping to support the response.",
            location: {
                center:  [15.26080, -4.32953],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'W-Africa',
            location: {
                center:  [-4.01635, 5.32085],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Ivory-Coast',
            location: {
                center:  [-4.01635, 5.32085],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Abidjan',
            title: "November 20, 2019 - Abidjan, Cote d'Ivoire",
            image: '/images/Olaf-Ve.png',

            description: "Olaf Veerman of Development Seed brought the field kit to Abidjan to deliver a training to disaster risk management and mapping experts in the region. Thanks Olaf for helping to demonstrate the power of the Atlas field kit as an offline decision support tool.",
            location: {
                center:  [-4.01635, 5.32085],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'Ending',
            title: 'Where in the world will the Atlas field kit go next?',
            image: '/images/Development_seed.jpeg',
            description: ' #Followthefieldkit around the globe to see where and how Mapbox is enabling location data.',
            location: {
              center: [-29.88281, 26.74996],
              zoom: 1.5,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                 // {
                 //      layer: 'layer-name',
                 //   opacity: 1
                 //  }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }

    ]
};
