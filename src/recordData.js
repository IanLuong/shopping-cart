const recordData = [
    {
        id: 0,
        title: "Fearless (Taylor's Version)",
        artist: "Taylor Swift",
        price: 49.99,
        image: "https://i.discogs.com/1O38RhEPWpgHcIks_MZYU1Tb_jGxTGnSeFXRFSMQOGk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDE0/ODEyLTE2NDUzNzQ4/NTctNTg3Ni5qcGVn.jpeg",
        description: "Since 2019, Taylor Swift has promised that she would re-record her first six albums in an attempt to regain ownership of her music after Scooter Braun bought her masters. And now comes the 2008 album Fearless in re-recorded form, now expanded to 26 songs and titled Fearless (Taylor’s Version)."
    },
    {
        id: 1,
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        price: 19.99,
        image: "https://i.discogs.com/dxeA-L9GA62asKKRC_5fUhgmVt1lkEjAI9Pis5yhV9U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2MzU5/Ny0xNTYwMzY5NTM2/LTgzMDIuanBlZw.jpeg",
        description: "On its release in 1975 Wish You Were Here topped the album charts in both the UK and the USA. Reflecting the band's thoughts of the time on the music business, and exploring themes of absence, Wish You Were Here contains the classic cut Shine on You Crazy Diamond, a tribute to founder member Syd Barrett.",
        tracklist: [
            "Shine On You Crazy Diamond (Parts I–V)",
            "Welcome to the Machine",
            "Have a Cigar (ft. Roy Harper)",
            "Wish You Were Here",
            "Shine On You Crazy Diamond (Parts VI-IX)"
        ]
    },
    {
        id: 2,
        title: "Sob Rock",
        artist: "John Mayer",
        price: 24.99,
        image: "https://i.discogs.com/bJ5HzJMruKBeuUBJfuayieeuv_8SKf4I8G0IEHK-_Yc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NTA2/MTQ4LTE2Mjc2OTMz/NTUtNTg3Ni5qcGVn.jpeg",
        description: "Sob Rock is the eighth studio album by American singer-songwriter John Mayer on Columbia Records. On the album John Mayer embraces his '80s-dad aesthetic.",
        tracklist: [
            "Last Train Home",
            "Shouldn't Matter but It Does",
            "New Light",
            "Why You No Love Me",
            "Wild Blue",
            "Shot in the Dark",
            "I Guess I Just Feel Like",
            "Til the Right One Comes",
            "Carry Me Away",
            "All I Want Is to Be with You",
        ]
    },
    {
        id: 3,
        title: "Unlimited Love",
        artist: "Red Hot Chili Peppers",
        price: 24.99,
        image: "https://i.discogs.com/Cvfh3uEfMCQKjAtYpNqtcJor4ZdaBXh-4KwzfhIvUM4/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNzI5/NDU0LTE2NDg5MTEx/NTUtNTA3OC5qcGVn.jpeg",
        description: "Red Hot Chili Peppers release their twelfth full-length offering, Unlimited Love. It notably marks their first recording with guitarist John Frusciante since 2006 and first with producer and longtime collaborator Rick Rubin since 2011."
    },
    {
        id: 4,
        title: "Shang-Chi and the Legend of the Ten Rings",
        artist: "Marvel",
        price: 24.99,
        image: "https://i.discogs.com/vUpk-CpjaqmFe2qK3-rFRXGmcVpdKF11haBIWRNA0jU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTgx/OTAxLTE2MzEyODIz/NTUtMzMyMS5qcGVn.jpeg",
        description: "Interscope Records have partnered with Disney, Marvel and 88Rising to deliver the soundtrack for the new Marvel Studios film Shang-Chi and The Legend of The Ten Rings that features 21 Savage, JJ Lin, Saweetie, Rick Ross, Anderson Paak, Rich Brian and many more.",
        tracklist: [
            "In the Dark - Swae Lee & Jhené Aiko",
            "Lazy Susan (Feat. Warren Hue and Masiwei) - 21 Savage & Rich Brian",
            "Fire in the Sky - Anderson .Paak",
            "Lose Control - JJ Lin",
            "Never Gonna Come Down - Mark Tuan & BIBI",
            "Foolish - Rich Brian, Warren Hue, Guapdad 4000",
            "Clocked Out! - Audrey Nuna & NIKI",
            "Act Up - Rich Brian & Earthgang",
            "Baba Says - Adawa, Shayiting El & Henry Lau",
            "Run It (Feat. Rick Ross & Rich Brian) - DJ Snake",
            "Swan Song - Saweetie & NIKI",
            "Warriors - Warren Hue & Seori"
        ]
    },
    {
        id: 5,
        title: "FFXIV Vinyl LP Box",
        artist: "Square Enix",
        price: 86.99,
        image: "https://i.discogs.com/sXUY9msPzoYKQJUz2iU7TjTIsPYzoywjaCNdLBRUQ4I/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTI2/MzUzLTE2MzE1NzE0/MjMtMjU2OS5qcGVn.jpeg",
        description: "This set contains all four FFXIV vinyl collections: A REALM REBORN Vinyl LP, HEAVENSWARD Vinyl LP, STORMBLOOD Vinyl LP, and SHADOWBRINGERS Vinyl LP.\nEach LP jacket features gorgeous illustrations by KUROIMORI.\nThe vinyl cutting was done in Los Angeles by mastering virtuoso, Bernie Grundman! Bernie Grundman is an audio mastering engineer who started his career at Contemporary Records in 1966, then continued on to A&M Records as head of their mastering department in 1968, earning his reputation working on albums with artists including Carole King, Michael Jackson, Steely Dan, and more. He has also been nominated for various Grammy awards and has won many prestigious awards."
    }
]

export default recordData