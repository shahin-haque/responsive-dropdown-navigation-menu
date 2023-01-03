import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import todo from '../public/icon-todo.svg';
import calendar from '../public/icon-calendar.svg';
import reminders from '../public/icon-reminders.svg';
import planning from '../public/icon-planning.svg';
import arrow from '../public/icon-arrow-down.svg';

const FeaturesLinks = () => {
  const [isSecondary, setIsSecondary] = useState(false);
  return (
    <li className="link features">
      <span onClick={() => setIsSecondary(!isSecondary)}>
        Features
        <Image className="arrow" src={arrow} alt="arrow" />
      </span>
      <div
        className={`${
          isSecondary ? 'secondary-links open ' : 'secondary-links'
        }`}
      >
        <Link href="/todo-list">
          <Image className="todo" src={todo} alt="todo" />
          Todo List
        </Link>
        <Link href="/calendar">
          <Image className="calendar" src={calendar} alt="calendar" />
          Calendar
        </Link>
        <Link href="/reminders">
          <Image className="reminders" src={reminders} alt="reminders" />
          Reminders
        </Link>
        <Link href="/planning">
          <Image className="planning" src={planning} alt="planning" />
          Planning
        </Link>
      </div>
    </li>
  );
};

export default FeaturesLinks;
