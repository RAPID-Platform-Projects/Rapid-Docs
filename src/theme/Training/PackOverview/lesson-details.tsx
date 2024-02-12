import Link from '@docusaurus/Link';
import { IPackLesson } from '@site/plugins/rapid-training-packs-plugin';
import React, { useState } from 'react'
import './lesson-details.css';

interface ILessonDetailsProps {
  lesson: IPackLesson;
}

export default function LessonDetails(props: ILessonDetailsProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <details open={open} onClick={toggleOpen} className={"LessonDetails"} >
      <summary className="LessonTitle" >
        {props.lesson.title}
      </summary>
      <div className="PagesContainer" >
        {props.lesson.pages.map(page => (
          <Link key={page.title} to={page.path} className="PageTitle" >
            {page.title}
          </Link>
        ))}
      </div>
    </details>
  )
}
