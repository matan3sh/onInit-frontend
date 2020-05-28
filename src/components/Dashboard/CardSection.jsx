import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';

export const CardSection = ({ loggedInUser, courses, enrolls }) => {
  initializeIcons();

  const calcAllReviews = () => {
    var count = 0;
    for (let i = 0; i < courses.length; i++) {
      count += courses[i].reviews.length;
    }
    return count;
  };

  const calcYourReviews = () => {
    var count = 0;
    for (let i = 0; i < courses.length; i++) {
      if (loggedInUser._id === courses[i].addByUser._id) {
        count += courses[i].reviews.length;
      }
    }
    return count;
  };

  const calcYourEnrolls = () => {
    var count = 0;
    for (let i = 0; i < enrolls.length; i++) {
      if (loggedInUser._id === enrolls[i].ownedUserId) count++;
    }
    return count;
  };

  const calcYourCourses = () => {
    var count = 0;
    for (let i = 0; i < courses.length; i++) {
      if (loggedInUser._id === courses[i].addByUser._id) count++;
    }
    return count;
  };

  const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '7vh 0',
  };
  const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#6457a6',
  };
  const styles = {
    cardStyles: {
      root: {
        background: 'white',
        padding: 20,
        borderTop: '5px solid #6457a6',
        width: '90%',
        maxWidth: '90%',
        margin: 'auto',
        borderRadius: '5px',
      },
    },
    header: {
      root: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
    amount: {
      root: {
        fontSize: 26,
        paddingBottom: 20,
        paddingTop: 30,
      },
    },
    percentage: {
      root: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6457a6',
      },
    },
  };
  const cards = [
    {
      title: 'Courses',
      amount: `${calcYourCourses()}`,
      icon: 'Money',
      percentage: `${((calcYourCourses() * 100) / courses.length).toFixed(1)}`,
    },
    {
      title: 'Enrolls',
      amount: `${calcYourEnrolls()}`,
      icon: 'PaymentCard',
      percentage: `${((calcYourEnrolls() * 100) / enrolls.length).toFixed(1)}`,
    },
    {
      title: 'Reviews',
      amount: `${calcYourReviews()}`,
      icon: 'ReviewSolid',
      percentage: `${((calcYourReviews() * 100) / calcAllReviews()).toFixed(
        1
      )}`,
    },
  ];

  return (
    <div style={container}>
      {cards.map((card) => (
        <div className='s-Grid-col ms-sm3 ms-xl3'>
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <i
                  style={icon}
                  className={`ms-Icon ms-Icon--${card.icon}`}
                  aria-hidden='true'
                ></i>
                <Text styles={styles.header}>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{card.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.percentage}>{card.percentage} %</Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};
