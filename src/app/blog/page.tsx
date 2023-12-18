import React from "react";

type Props = {};

export default function BlogPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center space-y-5 py-10">
      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Blog Page
      </h2>

      <blockquote className="mt-6 max-w-xl border-l-2 pl-6 italic">
        The core strategies, <strong>active recall</strong> and{" "}
        <strong>spaced repetition</strong>, are not only useful for exams but
        also for learning new disciplines.
      </blockquote>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Active Recall
      </h3>

      <p className="max-w-xl">
        This article primarily emphasizes that spaced repetition is a more
        crucial learning strategy compared to the constant input of cramming, as
        this strategy can help us remember things better. Check the{" "}
        <a
          className="font-bold underline underline-offset-2 transition-colors duration-200 hover:text-violet-500"
          href="https://aliabdaal.com/activerecallstudytechnique/"
        >
          original post
        </a>{" "}
        here
      </p>

      <ul className="my-6 ml-6 max-w-xl list-disc [&>li]:mt-2">
        <li>
          <strong>Active Recall Theory and Evidence:</strong> Active recall
          involves retrieving information from memory by testing oneself at
          every stage of the revision process. It&apos;s more effective than
          traditional methods like rereading or summarizing. A 2013 research
          analyzed various studies and found active recall to have &apos;high
          utility&apos; for learning.
        </li>
        <li>
          <strong>Effectiveness of Active Recall:</strong> A study demonstrated
          that testing oneself once is more effective than rereading material
          multiple times. Active recall significantly outperformed other methods
          in both factual and conceptual tests. It&apos;s a simple yet
          substantially beneficial technique.
        </li>
        <li>
          <strong>Active Recall Strategies:</strong> Strategies include closed
          book note-making, where one writes from memory and then checks the
          book for missed points, and asking oneself questions based on the
          material, similar to the &apos;Cornell Note-Taking&apos; method. These
          methods involve cognitive effort and enhance memory retention.
        </li>
        <li>
          <strong>Using Anki for Active Recall:</strong> Anki, a flashcard app,
          incorporates active recall and spaced repetition. It&apos;s useful for
          memorizing facts and specific content, as evidenced by its success
          among medical students for studying pharmacology and memorizing essay
          paragraphs.
        </li>
      </ul>

      <iframe
        width="680"
        height="383"
        src="https://www.youtube.com/embed/ukLnPbIffxE"
        title="How to study for exams - Evidence-based revision tips"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
        Spaced Repetition
      </h3>

      <p className="max-w-xl">
        Thanks to Ali, this article primarily emphasizes that spaced repetition
        is a more crucial learning strategy compared to the constant input of
        cramming, as this strategy can help us remember things better. Check the{" "}
        <a
          className="underline underline-offset-2"
          href="https://aliabdaal.com/spaced-repetition/"
        >
          original post
        </a>{" "}
        here
      </p>
      <ul className="my-6 ml-6 max-w-xl list-disc [&>li]:mt-2">
        <li>
          <strong>Spaced Repetition Over Cramming:</strong> Emphasizes the
          superiority of spaced repetition for study efficiency. This technique,
          based on the psychological forgetting curve, involves reviewing study
          material at specific intervals. It leads to better long-term memory
          retention compared to cramming.
        </li>
        <li>
          <strong>Study Evidence & Application:</strong> A 2011 study
          illustrated the effectiveness of spaced repetition within a single
          study session. It showed that recalling information at spaced
          intervals significantly improves retention. The article recommends
          integrating this method into daily study routines, revisiting previous
          topics before progressing to new ones.
        </li>
        <li>
          <strong>Personalized Spreadsheet System: </strong> The author shares a
          successful personal strategy using a Google Sheets spreadsheet for
          spaced repetition. This approach involves listing topics and marking
          review dates for active recall, aiding in tracking progress and
          identifying areas for improvement.
        </li>
      </ul>

      <iframe
        title="How to Study for Exams - Spaced Repetition | Evidence-based revision tips"
        src="https://www.youtube.com/embed/Z-zNHHpXoMM?enablejsapi=1&amp;origin=https%3A%2F%2Faliabdaal.com"
        width="680"
        height="383"
        data-gtm-yt-inspected-41290476_5="true"
        id="963386905"
        data-gtm-yt-inspected-41290476_8="true"
        data-gtm-yt-inspected-41290476_11="true"
        data-gtm-yt-inspected-14="true"
        className="mt-6"
      ></iframe>
    </div>
  );
}
