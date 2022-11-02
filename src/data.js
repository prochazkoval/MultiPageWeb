const topics = [
    {
        name: "Dorty",
        id: "dorty",
        description: "",
        wave: "../svg/wave-cakes4.svg",
        resources: [
            {
                name: "Mascarpone dort s ovocem",
                id: "mascarpone-dort-s-ovocem",
                image: "../images/cake_fruit_sum.png",
                image_detail: ["../images/cake_fruit_detail.JPG"],
                description: "Lehký letní dort.",
                specingred: "Marcarpone, ovoce, cokolada",
                ingred_cream: "",
                number_ingred_cream: "",
                ingred_corpus: "",
                number_ingred_corpus: "",
                process: [""],
                advice: "",
                qr: "",
                column: "one_col",
            },
            {
                name: "ZRCADLOVÁ POLEVA A OVOCE",
                id: "zrcadlova-poleva",
                image: "../images/zrcadlo_sum.png",
                image_detail: ["../images/zrcadlo_detail.JPG"],
                description: "Všechny barvy co si představíš.",
                specingred: "",
                ingred_cream: "poleva",
                number_ingred_cream: "1 ks",
                ingred_corpus: "dort",
                number_ingred_corpus: "1 ks",
                process: [
                    "1.\tPolevu rozehřeji\n2.\tNaliji na dort\n3.\tDort nechám zmrazit",
                ],
                advice:
                    "Je vhodné dopředu dort zchladit, nejlépe zamrazit abz se poleva lépe držela na korpusu. Chce to spoustu nervů a času na následný úklid pracovního místa.",
                qr: "",
                column: "one_col",
            },
            {
                name: "Dort zdobeny marcipanem",
                id: "marcipanovy-dort",
                image: "../images/marcipan_sum.png",
                image_detail: ["../images/marcipan_sum.png"],
                description: "Marcipanove silenstvi.",
                specingred: "",
                process: [""],
                qr: "",
                column: "one_col",
                advice: "",
            },
            {
                name: "Ovocny dort s ovocem",
                id: "ovocny-dort",
                image: "../images/cake_fruit3_sum.png",
                image_detail: ["../images/cake_fruit2_sum.png"],
                description: "Svezi ovocny dort.",
                specingred: "Marcarpone, ovoce, cokolada",
                process: [""],
                qr: "",
                column: "one_col",
                advice: "",
            },
        ],
    },
    {
        name: "Vanocni cukrovi",
        id: "vanocni-cukrovi",
        description: "",
        resources: [
            {
                name: "Medove pernicky",
                id: "medove-pernicky",
                image: "../images/pernik_sum.png",
                image_detail: ["../images/pernik_detail.JPG"],
                specingred: "",
                process: ["x"],
                description: "Jedno s nejcastejsich vanocnich cukrovi.",
                qr: "",
                column: "one_col",
                advice: "",
            },
            {
                name: "Kokosky",
                id: "kokosky",
                image: "../images/kokoska_sum.png",
                image_detail: ["../images/linecke_detail.JPG"],
                specingred: "",
                process: ["x"],
                description: "Cukrovi pro milovniky kokosu.",
                qr: "",
                column: "one_col",
                advice: "",
            },
            {
                name: "Linecke cukrovi",
                id: "linecke-cukrovi",
                image: "../images/linecke_sum.png",
                image_detail: ["../images/linecke_detail.JPG"],
                specingred: "",
                process: ["x"],
                description: "Idealni kombinace je linecke a domaci marmelada.",
                qr: "",
                column: "one_col",
                advice: "",
            },
            {
                name: "Pernicky s reliefem",
                id: "pernicky-s-reliefem",
                image: "../images/pernik_rel_sum.png",
                image_detail: ["../images/pernik_rel_detail2.JPG"],
                specingred: "",
                process: ["x"],
                description: "Nejsnadneji ozdobene pernicky.",
                qr: "",
                column: "one_col",
                advice: "",
            },
        ],
    },
    {
        name: "Ostatni",
        id: "ostatni",
        description: "",
        resources: [
            {
                name: "Vánočka",
                id: "vanocka",
                description: "Snídaně šampionů.",
                image: "../images/vanocka_sum.png",
                image_detail: [
                    "../images/vanocka_detail1.JPG",
                    "../images/vanocka_detail2.JPG",
                    "../images/vanocka_detail3.JPG",
                    "../images/vanocka_detail4.JPG",
                ],
                column: "two_col",
                specingred: "Kvasnice, mandle a rozinky",
                ingred:
                    "hladká mouka\ntcukr krupice\nžloudky\nvejce na potření\nkvasnic\nmléko\nmáslo\nSůl, citronová kůra, vanilkový cukr, mandle (nejlépe plátky), rozinky",
                qr: "../svg/vanocka_QR.svg",
                process: [
                    "Tento recept není můj originální, ale peču podle tohoto videa.",
                    "Ve zkratce: vše smýchám a nechám kynout. Až je těsto dostatečně vykynuté (cca 1 hodina čekání) vánočku zapletu, potřu vejcem a posypu mandlemi. Peču na horký vzduch na 180°C cca 45 minut.",
                ],
                number: "500 g\n110 g\n2\n1\n30 g\n250 ml\n110 g",

                advice:
                    "V receptu je uvedený i rum, ale já ho do vánočky nedávám. ",
            },
            {
                name: "Marcipanove saliny",
                id: "marcipanove_saliny",
                description: "Neco chytryho :D",
                image: "../images/saliny_sum.png",
                image_detail: ["../images/saliny_detail.jpg"],
                specingred: "Marcipan a jedny fix",
                process: [""],
                qr: "",
                column: "one_col",
                advice: "",
            },
            {
                name: "KYNUTÉ POVIDLOVÉ BUCHTY",
                id: "kynute_buchty",
                image: "../images/kynuty_sum.png",
                image_detail: ["../images/kynuty_detail.JPG"],
                specingred: "",
                process: [""],
                description: "Jako od babičky.",
                qr: "",
                column: "one_col",
                advice: "",
            },
        ],
    },
];

export function getResource({ resourceId, topicId }) {
    return topics
        .find(({ id }) => id === topicId)
        .resources.find(({ id }) => id === resourceId);
}

export function getTopic(topicId) {
    return topics.find(({ id }) => id === topicId);
}

export function getTopics() {
    return topics;
}
