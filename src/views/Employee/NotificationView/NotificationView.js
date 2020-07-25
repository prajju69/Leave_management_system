import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
//import "../NotificationView/NotificationView.css";

export default class NotificationView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailsList: [
        {
          from: "laaazyyy@gmail.com",
          topic: "Hello, Mykola!",
          read: false,
          id: 1,
          date: "12-02-2020"
        },
        {
          from: "johnson@doe.com",
          topic: "New proposal...",
          read: true,
          id: 2,
          date: "13-02-2020"
        },
        {
          from: "lorem@ipsum.com",
          topic: "Lorem ipsum dolor sit amet",
          read: true,
          id: 3,
          date: "14-02-2020"
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {/* <h4>Inbox</h4>
        <ul className="abc">
          {this.state.emailsList.map((email) => (
            <li className="email">
              <div className={email.read ? "read" : "unread"}>
                {email.topic}
              </div>
            </li>
          ))}
        </ul> */}
        {this.state.emailsList.map((email, index) => (
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                <li>{email.from} <span style={{ marginLeft: 800 }}>{email.date}</span></li>

              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>{email.topic}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    );
  }
}
