// there are three options: students and businesses, admins or regusers.

function getData(userType) {
    if (userType === "s_id" || userType === "b_id") {
        let data = [];
        fetch('http://192.168.64.3/php-aws-codepipeline/getmarketplace.php?studentNo=3')
        .then(response => response.json())
        .then(res => data.push(res))
        return data

    } else if (userType === "a_id") {
        return {
            "internships": [
                {
                    "id": "1",
                    "name": "Testverdi",
                    "dato": "22-08-2020",
                    "owner": "Vinmonopolet",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                },

                {
                    "id": "3",
                    "name": "these are not the droids you are looking for",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                },

                {
                    "id": "4",
                    "name": "yoyo",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                },

                {
                    "id": "14",
                    "name": "skrukork for skrullinger",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                }
            ],



            "projects": [
                {
                    "id": "201",
                    "name": "hallo i luken",
                    "dato": "22-08-2020",
                    "owner": "vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                },

                {
                    "id": "8",
                    "name": "bachelor #1",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                },

                {
                    "id": "12",
                    "name": "stuffy",
                    "dato": "22-08-2020",
                    "owner": "vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                },

                {
                    "id": "301",
                    "name": "bachelor #2",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                },

            ],



            "Pitched": [
                {
                    "id": "201",
                    "name": "hallo i luken",
                    "dato": "22-08-2020",
                    "owner": "vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                },

                {
                    "id": "8",
                    "name": "bachelor #1",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                },
            ]
            ,
            "students": [
                {
                    "s_id": "1",
                    "name": "ola nordmann",

                    "priorities": {
                        
                        "projects": [
                            {
                                "id": "201",
                                "name": "hallo i luken"
                            },
                            {
                                "id": "8",
                                "name": "bachelor #1"
                            },
                            {
                                "id": "12",
                                "name": "stuffy"
                            },
                        ]
                    },

                },
                {
                    "s_id": "2",
                    "name": "kari",

                    "priorities": {
                        "internships": [
                            {
                                "id": "1",
                                "name": "Testverdi"
                            },
                            {
                                "id": "3",
                                "name": "These are not the droids you are looking for"
                            },
                            {
                                "id": "14",
                                "name": "skrukork for skrullinger"
                            },
                        ],
                        
                    },

                },
            ],
            "companies": [
                {
                    "b_id": "1",
                    "name": "vinmonopolet",

                    "priorities": {
                        "internships": [
                            {
                                "id": "1",
                                "name": "Ola Nordmann"
                            },
                            {
                                "id": "2",
                                "name": "kari bremnes"
                            },
                            {
                                "id": "3",
                                "name": "hermann testy"
                            },
                        ],
                        "projects": [
                            {
                                "id": "1",
                                "name": "Ola Nordmann"
                            },
                            {
                                "id": "2",
                                "name": "kari bremnes"
                            },
                            {
                                "id": "3",
                                "name": "hermann testy"
                            },
                        ]
                    },

                },
            ]
        }

    }

}
export default getData
