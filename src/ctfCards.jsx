import { Container, Grid } from 'semantic-ui-react';
import React from 'react';

export default [
  {
    header: 'National Cyber League',
    description: 'The National Cyber League (NCL) is the most inclusive, performance-based, learning-centered collegiate cybersecurity competition today!',
    startDate: new Date('August 23, 2021'),
    endDate: new Date('December 17, 2021'),
    status: 'Registration opens August 23',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'In 2011, a group of cybersecurity-focused academics from several public agencies got together and created an innovative way for students to apply what they were learning in class. It would be important to reduce barriers and excite young people to participate. Students would have easy access, no matter what their age, skill level or location. The NCL Competition was born. It was one of the earliest e-sports - a competitive game-meets-edutainment - and it would simulate real-life cyberthreats in a safe environment, for students to learn how to defend organizations against cyber-threats and keep them secure'}</Container></Grid.Row>
        <Grid.Row><Container text>{'NCL offers a fun way to learn and apply your skills in a safe environment - but it’s so much more than that, because with their NCL Scouting Reports you can present credible proof to employers of your hands-on expertise.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The NCL challenges are based on nine critical cybersecurity workforce categories: Open Source Intelligence, Cryptography, Password Cracking, Log Analysis, Network Traffic, Forensics, Web App Exploitation, Scanning, and Enumeration & Exploitation.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The NCL competition is open to anyone enrolled in at least one course in high school or a collegiate institution. Players are expected to commit to the entire Season. The registration fee is just $35 per individual to participate in the Preseason, Individual Game, and Team Game. Included in the fee is the virtual NCL Gymnasium and a wealth of resources to boost players’ knowledge along the way.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/NCL.png',
    regURL: 'https://cyberskyline.com/events/ncl/welcome',
    contactInfo: 'https://nationalcyberleague.org/contact-us',
  },
  {
    header: 'Cyber Patriots',
    description: 'CyberPatriot was created by the Air Force Association (AFA) to inspire K-12 students toward careers in cybersecurity or other STEM disciplines critical to our nation\'s future.',
    startDate: new Date('October 22, 2021'),
    endDate: new Date('December 12, 2021'),
    status: 'Registration is open until October 5',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'CyberPatriot\'s National Youth Cyber Defense Competition is the world\'s largest cybersecurity competition and is open to all schools and approved youth organizations. Before getting started with the registration process, review this competition overview to get a better understanding of the competition!'}</Container></Grid.Row>
        <Grid.Row><Container text>{'CyberPatriot’s National Youth Cyber Defense Competition challenges teams of high school and middle school students to find and fix cybersecurity vulnerabilities in virtual operating systems. Using a proprietary competition system, teams are scored on how secure they make the system. Top teams advance through the online round of competition, and the best of the best advance to the in-person National Finals Competition.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Each team has two challenges during their six-hour competition period. The Network Security Challenge involves finding and fixing security vulnerabilities in Windows and Linux operating systems. The Cisco Networking Challenge consists of an online quiz and a virtual networking exercise based on specific training materials.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'CyberPatriot is designed for any student, regardless of prior cybersecurity knowledge. Training materials are available through the volunteer dashboard and through Cisco Networking Academy.  Instructions for competition round preparation are emailed directly to coaches prior to each round.'}</Container></Grid.Row>
        <Grid.Row>
          <Container text>
            <b>{'Team Registration: '}</b>
            {'April 1 – October 5, 2021 (You must register a team to get access to the rounds below)'}
          </Container>
        </Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CyberPatriot.png',
    regURL: 'https://www.uscyberpatriot.org/competition/Competition-Overview/join-the-competition',
    contactInfo: 'mailto:info@uscyberpatriot.org',
  },
  {
    header: 'Panapoly',
    description: 'Panoply, a network security competition, is a network assessment and network defense competition combined into a single event. Panoply events may be played as individual or team competitions.',
    startDate: new Date('August 1, 2020'),
    endDate: new Date('August 6, 2020'),
    status: 'This year\'s event has not been anounced yet',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'Panoply, a Network Security Competition, is a network assessment and network defense competition combined into a single event. Teams of students compete for control of common resources and the critical services on those resources. Once a team takes possession of a resource, they must secure that resource against attacks from other teams and maintain the critical services running on the resource. Teams accumulate points for controlling and operating critical services such as SMTP, DNS, HTTP, HTTPS, SSH, and so on.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Panoply is a timed competition event. At the beginning of the competition, common resources are available for teams to scan, assess, and penetrate. To claim ownership of a service, teams must plant their flag, an assigned hexadecimal string, inside the banner of the service. An automated scanner detects ownership changes and awards ownership of the service to the team whose flag appears in the service banner. At random intervals, an automated scoring engine checks the status and functionality of all critical services. If a team has ownership of a functional critical service during a successful service check, that team is awarded points for owning and maintaining a critical service. Teams accumulate points for each critical service they control and continue to accumulate points as long as they own and maintain those critical services. Teams that fail to secure resources and services they have captured may have them taken away by rival teams. Throughout the competition new resources are added to the common pool, forcing teams to choose between defending existing assets and going after new assets. The team with the highest point total at the end of the competition wins.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/Panoply.jpg',
    regURL: 'http://cyberpanoply.com/event.html',
    contactInfo: 'mailto:kevin.archer@utsa.edu',
  },
  {
    header: 'CSAW CTF',
    description: 'CSAW [see-SAH] is the most comprehensive student-run cyber security event in the world, featuring 10 hacking competitions, workshops, and industry events.',
    startDate: new Date('September 10, 2021'),
    endDate: new Date('September 12, 2021'),
    status: 'Registration will open early June',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The CSAW games, founded by Professor Nasir Memon as a small contest called Cyber Security Awareness Week, have grown to become the most comprehensive set of cybersecurity challenges by and for students around the globe.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'CSAW CTF is one of the oldest and biggest CTFs with 1216 teams with 1+ points in 2020. Designed as an entry-level, jeopardy-style CTF, this competition is for students who are trying to break into the field of security, as well as for advanced students and industry professionals who want to practice their skills.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'CSAW CTF occurs over two rounds: a Qualifying Round in September and a Final Round in November. Both rounds will be online this year.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CSAW.jpg',
    regURL: 'https://www.csaw.io/ctf',
    contactInfo: 'mailto:csaw-info@nyu.edu',
  },
  {
    header: 'CSAW RED',
    description: 'CSAW [see-SAH] is the most comprehensive student-run cyber security event in the world, featuring 10 hacking competitions, workshops, and industry events.',
    startDate: new Date('September 18, 2020'),
    endDate: new Date('September 27, 2020'),
    status: 'Unfortunately the RED event has been cancelled for this year',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The CSAW games, founded by Professor Nasir Memon as a small contest called Cyber Security Awareness Week, have grown to become the most comprehensive set of cybersecurity challenges by and for students around the globe.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The Red Team Competition is designed for high-school students and occurs over two rounds, with an online Qualifying Round in September and in-person Final round in November. '}</Container></Grid.Row>
        <Grid.Row><Container text>{'The Qualification Round runs as a jeopardy-style CTF. Challenges are designed to encourage learning and skill-building in the areas of reversing, web security, forensics, crypto and pwning.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CSAW.jpg',
    regURL: 'https://www.csaw.io/RED',
    contactInfo: 'mailto:csaw-info@nyu.edu',
  },
  {
    header: 'PicoCTF',
    description: 'PicoCTF is a free computer security game with original educational content built on a capture-the-flag framework created by security and privacy experts at Carnegie Mellon University.',
    startDate: new Date('May 7, 2021'),
    endDate: new Date('May 10, 2021'),
    status: 'Check back later for updates',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'picoCTF is a free computer security game with original educational content built on a capture-the-flag framework created by security and privacy experts at Carnegie Mellon University.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Gain access to a safe and unique hands on experience where participants must reverse engineer, break, hack, decrypt, and think creatively and critically to solve the challenges and capture the flags.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'picoGym is a noncompetitive practice space where you can explore and solve challenges from previously released picoCTF competitions, find fresh never before revealed challenges, and build a knowledge base of cyber security skills in a safe environment.Whether you are a cyber security professional, competitive hacker or new to CTFs you will find interesting challenges in the picoGym that you can solve at your own pace. Team picoCTF will regularly update this challenge repository so visit the picoGym often.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/PicoCTF.png',
    regURL: 'https://picoctf.org/',
    contactInfo: 'mailto:other@picoctf.org',
  },
  {
    header: 'HSCTF',
    description: 'HSCTF ("High School Capture the Flag") is the first CTF designed by high schoolers for high schoolers. Unlike other CTFs, HSCTF isn\'t purely about computer security. It extends the CTF model of competition to other areas of computer science such as the design and analysis of algorithms and programming languages.',
    startDate: new Date('June 14, 2021'),
    endDate: new Date('June 18, 2021'),
    status: 'Starting soon',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'HSCTF ("High School Capture the Flag") is the first CTF designed by high schoolers for high schoolers. Unlike other CTFs, HSCTF isn\'t purely about computer security. It extends the CTF model of competition to other areas of computer science such as the design and analysis of algorithms and programming languages. Each challenge will still have a flag, and most of our challenges will fall into the traditional CTF categories of cryptography, reverse engineering, programming languages, forensics, and recon.Our primary goals are to educate students in computer science, and to increase their interest in computer science.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The competition is open to middle school and high school (6th to 12th grade) students from the United States. Teams can be composed of 5 or fewer students. There will be a non-competitive division for all participating teams who are disqualified by the above rules.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Challenges will vary widely in difficulty. We expect some challenges to be solved by every team, and others to be solved by only a few teams or even none. Teams should be potentially capable of performing very well in this competition with no CTF experience. We hope HSCTF will be a fun, educational experience for all competitors.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/HSCTF.png',
    regURL: 'https://ctf.hsctf.com/',
    contactInfo: 'mailto:contact@hsctf.com',
  },
  {
    header: 'US Cyber Quest',
    description: 'Cyber Quests are a series of fun but challenging online competitions allowing participants to demonstrate their knowledge in a variety of information security realms.',
    startDate: new Date('February 12, 2021'),
    endDate: new Date('March 28, 2021'),
    status: 'Competition will open soon',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'Cyber Quests are a series of fun but challenging on-line competitions allowing participants to demonstrate their knowledge in a variety of information security realms. Each quest features an artifact for analysis, along with a series of quiz questions. Some quests focus on a potentially vulnerable sample web server as the artifact, challenging participants to identify its flaws using vulnerability analysis skills. Other quests are focused around forensic analysis, packet capture analysis, and more. The quests have varying levels of difficulty and complexity, with some quests geared toward beginners, while others include more intermediate and ultimately advanced material.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Participants will be provided with a network packet capture file and other forensic artifacts that they must analyze to identify devices, network activity, and attacks. Participants will have to answer questions about devices connected to the network, as well as SCADA technology and protocols. The quiz is designed for an intermediate skill level, and questions can be answered using the Wireshark packet analysis tool, and additional reference information to be provided.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Are you ready for the challenge? Take the Cyber Quest challenge to compete for an invitation to one of the 2021 USCC Cyber Camps, which are scheduled throughout the summer around the country. '}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CyberQuest.jpg',
    regURL: 'https://uscc.cyberquests.org/',
    contactInfo: 'mailto:mccormack@uscyberchallenge.com',
  },
  {
    header: 'MITRE eCTF',
    description: 'Mitre presents it’s annual STEM Capture the Flag challenge that is open to both current students and professionals. While current professionals may compete in the competition for education and training purposes, only eligible high school and college teams will be able to obtain winning prizes, scholarships, and internships. A wide range of other competitions are presented throughout the year by Mitre.',
    startDate: new Date('January 20, 2021'),
    endDate: new Date('April 30, 2021'),
    status: 'Check back for next year\'s competition',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'MITRE\'s eCTF (embedded capture-the-flag) is an embedded security competition that puts participants through the experience of trying to create a secure system and then learning from their mistakes. The main target is a real physical (or emulated for 2021) embedded device, which opens the scope of the challenge to include physical/proximal access attacks. The eCTF is a two-phase competition with attack and defense components. In the first phase, competitors design and implement a secure system based on a set of challenge requirements. The second phase involves analyzing and attacking the other teams’ designs.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The eCTF is unique in two major ways. First, the focus is on securing embedded systems, which present an entirely new set of challenges and security issues that are not currently covered by traditional “online” CTFs. Second, this event balances offense and defense by including a significant secure-design phase in addition to an attack phase. This competition will help you develop practical skills that can be applied securing critical systems, such as medical devices, smart grids, IoT devices, and mobile devices.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'This year teams will design a secure communications system for a unmanned aerial vehicle (UAV) package delivery system. The system must be secure to prevent attackers from gaining access to the network to spy on and disrupt the UAV system.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Students at all academic levels are welcome to participate. Team sizes are unlimited (although a minimum of 4 students is recommended). Sponsorship of a faculty member is preferred.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/eCTF.png',
    regURL: 'https://mitrecyberacademy.org/competitions/embedded/',
    contactInfo: 'mailto:ectf@mitre.org',
  },
  {
    header: 'NeverLAN CTF',
    description: 'The NeverLAN CTF is a jeopardy style Capture the Flag. This middle-school focused event was created with the goal of teaching the younger generation about Computer Science and the value of critical thinking and problem solving.',
    startDate: new Date('March 12, 2021'),
    endDate: new Date('March 14, 2021'),
    status: 'Check back for the next edition of NeverLAN',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The NeverLAN CTF is a jeopardy style Capture the Flag. This event was created with the goal of teaching the younger generation about Computer Science and the value of critical thinking and problem solving.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The idea was born after five students experienced the inviting culture and community that is SaintCON. With this experience, they wanted nothing more than to show other students the awesomeness of the industry while also teaching them ways to be safe online. In their senior year of high school, these five students took on the task of building the event for their local community. Under the mentorship of Dan Daggett, the event came to life. After the unbelievable success and feedback from the first year, five students\' senior project developed into a annual event that would teach the younger generation the importance of Computer Security for years to come.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'To keep our event open to everyone, we split our scoreboard for student and non-student teams. For our event, student teams must consist of only student members, with a max of 4 members. Student members are users that are 14 years old or younger.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'To be notified when registration is up, visit our registration page.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/NeverLAN.jpg',
    regURL: 'https://neverlanctf.com/registration',
    contactInfo: 'mailto:info@neverlanctf.com',
  },
  {
    header: 'MetaCTF',
    description: 'This CTF will challenge and encourage participants to learn new techniques and concepts related to cybersecurity, with problems covering topics such as web exploitation, cryptography, binary exploitation, reverse engineering, forensics, and reconnaissance.',
    startDate: new Date('October 24, 2020'),
    endDate: new Date('October 25, 2020'),
    status: 'Check back later for the next edition of MetaCTF',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'Whether you\'re a student interested in the field or an adult thinking about changing careers, this is a great opportunity to explore the cybersecurity field, learn new skills, and compete for prizes. The event will also include a livestream with talks, problem walkthroughs, tutorials, and career advice from industry professionals. Participants will also have the opportunity to network with others in the security community. No experience is required!'}</Container></Grid.Row>
        <Grid.Row><Container text>{'This CTF will challenge and encourage participants to learn new techniques and concepts related to cybersecurity, with problems covering topics such as web exploitation, cryptography, binary exploitation, reverse engineering, forensics, and reconnaissance.'}</Container></Grid.Row>
        <Grid.Row>
          <Container text>
            <b>{'Never done a CTF? '}</b>
            {'No problem! This event does not require any previous cybersecurity experience, and CTFs are a great way to get started in cybersecurity. While there will still be plenty of hard problems for those looking for a challenge, the goal is for you to walk away with some new techniques and skills.'}
          </Container>
        </Grid.Row>
      </Grid>
    ),
    logoURL: '/images/MetaCTF.jpg',
    regURL: 'https://metactf.com/cybergames',
    contactInfo: 'mailto:contact@metactf.com',
  },
  {
    header: 'Maryland Cyber Challenge',
    description: 'The CyberMaryland Challenge & Virtual Competition 2021 took place on March 24, 2021. This year’s competition was held in an online-virtual format, normally held in-person in Baltimore, MD. Hosted and delivered by cybersecurity education powerhouse University of Maryland Global Campus (UMGC) using the tryhackme platform, the competition scenarios and platform were refereed by a team of volunteers including leading cyber practitioners, university professors, and guest hosts from across the cyber world.',
    startDate: new Date('March 24, 2021'),
    endDate: new Date('March 25, 2021'),
    status: 'Check back next year for the next Cyber Challenge',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The CyberMaryland Challenge seeks teams willing to test a range of skills in a battle of real world cyber challenges. Your team will climb a ladder of challenges demonstrating an ability to work together, and understand both simple and complex vulnerabilities, defensive operations and gamified offensive operations. Game on!'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The CyberMaryland Challenge & Virtual Competition 2021 took place on March 24, 2021. This year’s competition was held in an online-virtual format, normally held in-person in Baltimore, MD. Hosted and delivered by cybersecurity education powerhouse University of Maryland Global Campus (UMGC) using the tryhackme platform, the competition scenarios and platform were refereed by a team of volunteers including leading cyber practitioners, university professors, and guest hosts from across the cyber world.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Challenges tested skills in Scanning & Exploitation, Log Analysis, Network Captures, Passwords, Encryption and other key competencies. Students representing Maryland community colleges and 4-year universities across the country battled it out in exciting cybersecurity challenges.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CyberChallenge.png',
    regURL: 'https://www.fbcconferences.com/e/cybermdconference/challenge.aspx',
    contactInfo: 'https://www.fbcconferences.com/e/cybermdconference/contact.aspx',
  },
  {
    header: 'CyberCenturion',
    description: 'CyberCenturion is a fun competition that brings together people from all different backgrounds and with all sorts of skills. Each team must play a series of online qualifying rounds, which will challenge them to learn about networking, defence and cyber security.',
    startDate: null,
    endDate: null,
    status: 'Check back next year for the next CyberCenturion',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'CyberCenturion engages thousands of talented young individuals who are curious about cyber security and eager to put any existing cyber skills to the test. It mirrors the U.S. CyberPatriot competition, part of a global youth STEM education programme presented by the Northrop Grumman Foundation and created by the U.S. Air Force Association, aimed at inspiring youth to pursue careers in cyber security or other STEM disciplines critical to global security.'}</Container></Grid.Row>
        <Grid.Row><Container text>{''}</Container></Grid.Row>
        <Grid.Row><Container text>{''}</Container></Grid.Row>
        <Grid.Row><Container text>{''}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CyberCenturion.jpg',
    regURL: 'https://www.cybersecuritychallenge.org.uk/cybercenturion-vii-registration',
    contactInfo: 'https://www.cybersecuritychallenge.org.uk/talk-to-us',
  },
  {
    header: 'Collegiate Pentesting Competition',
    description: 'At its heart, CPTC is a bit different from several other collegiate Cybersecurity competitions. Instead of defending your network, searching for flags, or claiming ownership of systems, CPTC focuses on mimicking the activities performed during a real-world penetration testing engagement conducted by companies, professional services firms, and internal security departments around the world.',
    startDate: new Date('November 13 2021'),
    endDate: new Date('November 13 2021'),
    status: 'Registration opening soon',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'At its heart, CPTC is a bit different from several other collegiate Cybersecurity competitions. Instead of defending your network, searching for flags, or claiming ownership of systems, CPTC focuses on mimicking the activities performed during a real-world penetration testing engagement conducted by companies, professional services firms, and internal security departments around the world.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The Global Collegiate Penetration Testing Competition (CPTC) started small, in a classroom at RIT. Bill Stackpole, a professor of Defensive and Offensive Security, saw a gap between book learning and the real world that he wanted to close in order to set his students up for success after graduation. He started building a competition. Taking this classroom competition, he enlisted the help of many dedicated volunteers, spanning industry professionals, academics, and sponsors who worked tirelessly to give that same experience to all students interested in the computing security field.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'To give an idea of the level of this competition; during both the 2020-2021 and the 2019-2020 competition cycles, some teams had more than 100 students attend tryouts. During the Global Finals, competitors discovered zero-days in commercial technologies, registered them as CVEs, and designed a patch for the most critical vulnerability. Many students get co-op and career job offers as a direct result of the Sponsor Faire.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'The 2021-22 competition theme is Industrial Food Manufacturing and Sales for Le Bon Bon Croissant, a fictitious global bakery & confectionary who operates their own retail stores. We announced this at the Global Finals of 2021 so students can build expertise in manufacturing and retail technologies.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/CPC.png',
    regURL: 'https://globalcptc.org/',
    contactInfo: 'https://globalcptc.org/contact',
  },
  {
    header: 'NSA Codebreaker',
    description: 'The NSA Codebreaker Challenge provides students with a hands-on opportunity to develop their reverse-engineering / low-level code analysis skills while working on a realistic problem set centered around the NSA\'s mission.',
    startDate: new Date('August 1 2021'),
    endDate: new Date('August 1 2021'),
    status: 'Challenge starting soon',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The NSA Codebreaker Challenge provides students with a hands-on opportunity to develop their reverse-engineering / low-level code analysis skills while working on a realistic problem set centered around the NSA\'s mission.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Reverse engineering is a crucial skill for those involved in the fight against malware, advanced persistent threats, and similar malicious cyber activities. As the organization tasked with protecting U.S. government national security information systems, NSA is looking to develop these skills in university students and prospective future employees. NSA isn’t the only organization interested in these skills - many Fortune 500 companies are also looking for individuals with reverse engineering abilities, as they work to protect their corporate computer systems and networks. In addition, the same techniques used to reverse engineer an unknown binary can often be applied to diagnose and fix bugs in your own applications, especially if they are low-level / hard to find. It is important to note that reverse engineering might violate the End User License Agreement of some software packages and/or be considered illegal in certain cases. Always check with the appropriate copyright holder / legal counsel if unsure.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'While the challenge is intended for students, professors are encouraged to participate as well. Furthermore, the site was designed to make it easy for those professors interested in incorporating the challenge into their courses to do so (see the additional FAQ entries below.)'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/Codebreaker.jpeg',
    regURL: 'https://codebreaker.ltsnet.net/home',
    contactInfo: 'mailto:codebreaker@uwe.nsa.gov',
  },
  {
    header: 'SANS BootUp',
    description: 'The SANS BootUp CTF is an exciting, fun way to practice cyber security skills in a friendly environment.In this multi-disciplined Capture the Flag system with over 28 exciting content packs, you’ll experience a broad survey of engaging challenges to discover your strengths and challenge your limits. In BootUp, participants can earn prizes, play solo or as a team, and participate in interactive chat with other players.',
    startDate: null,
    endDate: null,
    status: 'BootUp events are continually added',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The SANS BootUp CTF is an exciting, fun way to practice cyber security skills in a friendly environment. In this multi-disciplined Capture the Flag system with over 28 exciting content packs, you’ll experience a broad survey of engaging challenges to discover your strengths and challenge your limits. In BootUp, participants can earn prizes, play solo or as a team, and participate in interactive chat with other players.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'If you’re new to cyber security, BootUp is a great place to start -- you’ll be surprised at how much you learn as you solve challenges using the integrated hint system. If you’re already a cyber security pro, you’ll be surprised at how much fun you have applying your knowledge and picking up some new cool tricks along the way.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'Because BootUp is open for multiple hours or even around the clock for multiple days, players can drop in any time during the game, answer a few questions, and then move on, only to come back later during the game when their schedule allows. This approach gives BootUp a casual and relaxed challenge feel. Also, if you get stuck, you can take hints or move on to any other question in the game.'}</Container></Grid.Row>
        <Grid.Row><Container text>{''}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/BootUp.jpeg',
    regURL: 'https://codebreaker.ltsnet.net/home',
    contactInfo: 'mailto:codebreaker@uwe.nsa.gov',
  },
  {
    header: 'ångstromCTF',
    description: 'ångstromCTF is run by a team of students from Montgomery Blair High School. Now in our 6th year, we are one of the largest high school-oriented CTFs, with over 1700 competing teams in 2020. To see who helped out with each competition, check the individual competition sites.',
    startDate: new Date('April 2, 2021'),
    endDate: new Date('April 7 2021'),
    status: 'Check back next year for updates',
    longDescription: (
      <Grid>
        <Grid.Row><Container text>{'The first ångstromCTF took place April 8-17, 2016. It was a phenomenal success, with almost 500 teams participating and submitting thousands of problem solutions. Since then, we\'ve run a competition every year and grown to host more than 1,500 scoring teams. As we expand our competition to an even wider audience, our chief goal remains making our competition as accessible as possible to students with little to no background knowledge in hacking and cybersecurity.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'ångstromCTF is run by a team of students from Montgomery Blair High School. Now in our 6th year, we are one of the largest high school-oriented CTFs, with over 1700 competing teams in 2020. To see who helped out with each competition, check the individual competition sites.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'ångstromCTF is a great place to start if you\'ve never done anything like this before! Our challenges are meant to guide students and help them develop their skills, even if they start off as a complete beginner. To get an idea for what the challenges will be like, be sure to try out the challenges from previous years.'}</Container></Grid.Row>
        <Grid.Row><Container text>{'You can still compete if you aren\'t a high schooler! You\'ll simply need to mark yourself as ineligible for prizes when signing up. Ineligible players will still be able to view challenges, submit flags, and see how they rank compared to other teams.'}</Container></Grid.Row>
      </Grid>
    ),
    logoURL: '/images/angstromCTF.png',
    regURL: 'https://angstromctf.com/',
    contactInfo: 'mailto:angstromctf@protonmail.com,',
  },
];
