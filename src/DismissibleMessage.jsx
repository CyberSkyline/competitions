import React from 'react';
import { Message, Header } from 'semantic-ui-react';

function DismissibleMessage() {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <Message textAlign='center' style={{ 'margin-left': '10em', 'margin-right': '10em' }} visible='true' onDismiss={() => setVisible(false)}>
        <Message.Header>
          <Header as='h1' textAlign='center' color='red'>
            What is a CTF?
          </Header>
        </Message.Header>
        <p>{'CTF (Capture The Flag) is a kind of information security competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on wikipedia to basic programming exercises, to hacking your way into a server to steal data. In these challenges, the contestant is usually asked to find a specific piece of text that may be hidden on the server or behind a webpage. This goal is called the flag, hence the name!'}</p>
        <p>{'Like many competitions, the skill level for CTFs varies between the events. Some are targeted towards professionals with experience operating on cyber security teams. This site focuses on events that target the high school and college student range, sometimes offering monetary support for education to those that place highly in the competition! Many challenges do not require programming knowledge and are simply a matter of problem solving and creative thinking.'}</p>
        <p>{'Jeopardy CTFs are the most common kind of CTF. They revolve around a set of challenges which are provided by competition organizers to competitors. Competitors form teams and then work on the challenges together. Each challenge is designed so that when the competitor solves it, a small piece of text or "flag" is revealed. The flag is then submitted to a website or scoring engine in exchange for points. The amount of points rewarded is typically relative to the perceived difficulty of the challenge. Competitors usually receive about 72 hours (typically the course of a weekend) to solve as many challenges as possible.'}</p>
        <p>{'Attack & Defense CTFs are a less common kind of CTF with more moving parts. They\'re rarely done for the general public because of their complexity. In an A&D CTF, teams are each given the same set of vulnerable server software. Teams are to setup & audit this software before the competition. At the start of the competition, teams will connect their servers to an isolated network to join the CTF. Within this network, teams will launch attacks against each others servers hoping to exploit the vulnerabilities they\'ve found. Likewise, teams will need to properly patch their software so that it is protected against these exploits and functions normally. Teams receive points for extracting flags, properly defending their flags, and keeping their servers operating normally.'}</p>
      </Message>
    );
  }
  return (
    null
  );
}

export default DismissibleMessage;
