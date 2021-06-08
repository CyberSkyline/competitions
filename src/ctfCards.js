import { Container, Grid } from "semantic-ui-react";

export const ctfCards = [
    {
      header: 'National Cyber League',
      description: 'The National Cyber League (NCL) is the most inclusive, performance-based, learning-centered collegiate cybersecurity competition today!',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'Registration opens August 23',
      longDescription: <Grid>
          <Grid.Row><Container text='true'>In 2011, a group of cybersecurity-focused academics from several public agencies got together and created an innovative way for students to apply what they were learning in class. It would be important to reduce barriers and excite young people to participate. Students would have easy access, no matter what their age, skill level or location. The NCL Competition was born. It was one of the earliest e-sports - a competitive game-meets-edutainment - and it would simulate real-life cyberthreats in a safe environment, for students to learn how to defend organizations against cyber-threats and keep them secure.</Container></Grid.Row>
          <Grid.Row><Container text='true'>NCL offers a fun way to learn and apply your skills in a safe environment - but it’s so much more than that, because with their NCL Scouting Reports you can present credible proof to employers of your hands-on expertise.</Container></Grid.Row>
          <Grid.Row><Container text='true'>The NCL challenges are based on nine critical cybersecurity workforce categories: Open Source Intelligence, Cryptography, Password Cracking, Log Analysis, Network Traffic, Forensics, Web App Exploitation, Scanning, and Enumeration & Exploitation.</Container></Grid.Row>
          <Grid.Row><Container text='true'>The NCL competition is open to anyone enrolled in at least one course in high school or a collegiate institution. Players are expected to commit to the entire Season. The registration fee is just $35 per individual to participate in the Preseason, Individual Game, and Team Game. Included in the fee is the virtual NCL Gymnasium and a wealth of resources to boost players’ knowledge along the way.</Container></Grid.Row>      
        </Grid>,
      logoURL: 'https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng',
      regURL: 'https://cyberskyline.com/events/ncl/welcome',
      contactInfo: 'https://nationalcyberleague.org/contact-us'
    },
    {
      header: 'Cyber Patriots',
      description: 'CyberPatriot was created by the Air Force Association (AFA) to inspire K-12 students toward careers in cybersecurity or other STEM disciplines critical to our nation\'s future.',
      ctfStartDate: new Date('October 22, 2021'),
      ctfEndDate: new Date('December 12, 2021'),
      status: 'Registration is open until October 5',
      longDescription: 'Longer Description',
      logoURL: 'https://www.uscyberpatriot.org/SiteCollectionImages/Program%20Logos/CYBERPATRIOT_Education%20Program_black.png',
      regURL: 'https://www.uscyberpatriot.org/competition/Competition-Overview/join-the-competition',
      contactInfo: 'mailto:info@uscyberpatriot.org'
    },
    {
      header: 'Panapoly',
      description: 'Panoply, a network security competition, is a network assessment and network defense competition combined into a single event. Panoply events may be played as individual or team competitions.',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'This year\'s event has not been anounced yet',
      longDescription: 'Longer Description',
      logoURL: 'https://cias.utsa.edu/images/panoply-logo.jpg',
      regURL: 'http://cyberpanoply.com/event.html',
      contactInfo: 'mailto:kevin.archer@utsa.edu'
    },
    {
      header: 'CSAW',
      description: 'CSAW [see-SAH] is the most comprehensive student-run cyber security event in the world, featuring 10 hacking competitions, workshops, and industry events.',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'Registration will open early June',
      longDescription: 'Longer Description',
      logoURL: 'https://pbs.twimg.com/profile_images/1253002244653490178/GQ3EaO7r.jpg',
      regURL: 'https://www.csaw.io/ctf',
      contactInfo: 'mailto:csaw-info@nyu.edu'
    },
    {
      header: 'PicoCTF',
      description: 'PicoCTF is a free computer security game with original educational content built on a capture-the-flag framework created by security and privacy experts at Carnegie Mellon University.',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'Check back later for updates',
      longDescription: 'Longer Description',
      logoURL: 'https://picoctf.org/img/logos/picoctf-logo-og.png',
      regURL: 'https://picoctf.org/',
      contactInfo: 'mailto:other@picoctf.org'
    },
    {
      header: 'HSCTF',
      description: 'HSCTF ("High School Capture the Flag") is the first CTF designed by high schoolers for high schoolers. Unlike other CTFs, HSCTF isn\'t purely about computer security. It extends the CTF model of competition to other areas of computer science such as the design and analysis of algorithms and programming languages.',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'Check back later for updates',
      longDescription: 'Longer Description',
      logoURL: 'https://storage.googleapis.com/hsctf/branding/logo.png',
      regURL: 'https://ctf.hsctf.com/',
      contactInfo: 'mailto:contact@hsctf.com'
    },
    {
      header: 'US Cyber Quest',
      description: 'Cyber Quests are a series of fun but challenging online competitions allowing participants to demonstrate their knowledge in a variety of information security realms.',
      ctfStartDate: new Date('August 23, 2021'),
      ctfEndDate: new Date('December 17, 2021'),
      status: 'Competition will open soon',
      longDescription: 'Longer Description',
      logoURL: 'https://pbs.twimg.com/media/Exi10KFU8AUKnEM.jpg',
      regURL: 'https://uscc.cyberquests.org/',
      contactInfo: 'mailto:mccormack@uscyberchallenge.com'
    },
    {
      header: 'MITRE Cyber Academy',
      description: 'Mitre presents it’s annual STEM Capture the Flag challenge that is open to both current students and professionals. While current professionals may compete in the competition for education and training purposes, only eligible high school and college teams will be able to obtain winning prizes, scholarships, and internships. A wide range of other competitions are presented throughout the year by Mitre.',
      ctfStartDate: null,
      ctfEndDate: null,
      status: 'Varius competitions year round',
      longDescription: 'Longer Description',
      logoURL: 'https://avatars.githubusercontent.com/u/7783301?s=280&v=4',
      regURL: 'https://mitrecyberacademy.org/competitions/',
      contactInfo: 'mailto:ctf@mitre.org'
    },
    {
      header: 'NeverLAN CTF',
      description: 'The NeverLAN CTF is a jeopardy style Capture the Flag. This event was created with the goal of teaching the younger generation about Computer Science and the value of critical thinking and problem solving.',
      ctfStartDate: null,
      ctfEndDate: null,
      status: 'Check back for dates',
      longDescription: 'Longer Description',
      logoURL: 'https://pbs.twimg.com/profile_images/957021338660581377/qSHulWFz_400x400.jpg',
      regURL: 'https://neverlanctf.com/registration',
      contactInfo: 'mailto:info@neverlanctf.com'
    },
    {
      header: 'MetaCTF',
      description: 'This CTF will challenge and encourage participants to learn new techniques and concepts related to cybersecurity, with problems covering topics such as web exploitation, cryptography, binary exploitation, reverse engineering, forensics, and reconnaissance.',
      ctfStartDate: null,
      ctfEndDate: null,
      status: 'Check back for dates',
      longDescription: 'Longer Description',
      logoURL: 'https://pbs.twimg.com/profile_images/1020750912392921090/mOlummdv_400x400.jpg',
      regURL: 'https://metactf.com/cybergames',
      contactInfo: 'mailto:contact@metactf.com'
    },
    {
      header: 'Maryland Cyber Challenge',
      description: 'The CyberMaryland Challenge & Virtual Competition 2021 took place on March 24, 2021. This year’s competition was held in an online-virtual format, normally held in-person in Baltimore, MD. Hosted and delivered by cybersecurity education powerhouse University of Maryland Global Campus (UMGC) using the tryhackme platform, the competition scenarios and platform were refereed by a team of volunteers including leading cyber practitioners, university professors, and guest hosts from across the cyber world.',
      ctfStartDate: null,
      ctfEndDate: null,
      status: 'Check back next year for the next Cyber Challenge',
      longDescription: 'Longer Description',
      logoURL: 'https://www.fbcconferences.com/e/cybermdconference/images/events/cyberchallenge.png',
      regURL: 'https://www.fbcconferences.com/e/cybermdconference/challenge.aspx',
      contactInfo: 'https://www.fbcconferences.com/e/cybermdconference/contact.aspx'
    },
    {
      header: 'CyberCenturion',
      description: 'CyberCenturion is a fun competition that brings together people from all different backgrounds and with all sorts of skills. Each team must play a series of online qualifying rounds, which will challenge them to learn about networking, defence and cyber security.',
      ctfStartDate: null,
      ctfEndDate: null,
      status: 'Check back next year for the next CyberCenturion',
      longDescription: 'Longer Description',
      logoURL: 'https://s3.amazonaws.com/cms.ipressroom.com/295/files/201710/59fa476a2cfac22a2016e649_featured-cybercenturion/featured-cybercenturion_mid.jpg',
      regURL: 'https://www.cybersecuritychallenge.org.uk/cybercenturion-vii-registration',
      contactInfo: 'https://www.cybersecuritychallenge.org.uk/talk-to-us'
    },
  ];