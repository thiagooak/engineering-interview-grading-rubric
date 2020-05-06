export default function grade() {
  return {
    problemSolving: [
      {
        name: "N/A",
        description: (
          <p>
            Do not make a call if you are not asking the candidate to solve a
            problem and they are not asked to describe a time where they solved
            a substantial problem.
          </p>
        ),
      },
      {
        name: "Strong No",
        description:
          "The candidate is unable to conceive of any solution to the problem. The candidate is able to describe a basic, or naïve approach, but unable to implement it.",
      },
      {
        name: "No",
        description:
          "The candidate is unable to arrive at a solution beyond the most basic, naïve approach, even with significant help and hints from the interviewer. The final solution does not account for edge cases. (If due to a lack of time, in the judgement of the interviewer, the candidate would not be able to address those edge cases.)",
      },
      {
        name: "Mixed",
        description:
          "The candidate conceives of and implements a naïve solution independently, conceives of a better approach with minimal hints, and is able to complete it with help from the interviewer. The candidate dives in to a solution without giving the problem much thought, or asking questions. If a missing edge case is pointed out, they are only able to solve it with significant help.",
      },
      {
        name: "Yes",
        description:
          "The candidate is able to outline a solution beyond the most naïve, independently, and implement it, covering the vast majority of cases. If one or two hints are required, the candidate understands their importance quickly, and moves on. The candidate asks questions to clarify the scope of the problem and states their assumptions. If an edge case is pointed out to the candidate, they are able to modify their solution independently.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate clarifies the scope as a natural first step, is able to articulate multiple approaches and describe the pros and cons of each, makes a sensible decision based on the constraints of the interview format, and is able to fully implement the approach, without any real help from the interviewer. The candidate recognises edge cases and draws attention to them unprompted, then solves them.",
      },
    ],
    codeFluency: [
      {
        name: "N/A",
        description:
          "Do not make a call if you are not testing a candidate’s ability to produce code, or asking them to read or review code.",
      },
      {
        name: "Strong No",
        description:
          "The candidate does not know basic language constructs like loops and conditionals. The candidate cannot invoke functions correctly. The candidate is unable to read provided code or describe in any sense what it does.",
      },
      {
        name: "No",
        description:
          "The candidate is unable to translate their thoughts into code. Little knowledge of the language’s standard library is demonstrated. The candidate chooses nonsensical or non-descriptive variable names when writing code. The candidate is unable to describe the behaviour of any provided code with any precision.",
      },
      {
        name: "Mixed",
        description:
          "The candidate is able to write basic code, but does not demonstrate strong familiarity with their chosen language’s properties or idioms. Candidate reimplements standard library functions, rather than using what is available. (Do not judge on this if you do not know their chosen language’s idioms or standard library.)",
      },
      {
        name: "Yes",
        description:
          "The candidate codes fluently and naturally. The candidate chooses to use standard library functions and is able to describe their behaviour when asked. They may use placeholders to abstract away functionality then come back to fill them in. When reading code, the candidate is able to understand the general purpose of the code quickly.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate codes without any significant pauses and writes idiomatic code by default. Thought is translated into code without any apparent difficulty. When reading code, and with a little effort, the candidate is able to understand its full behaviour and nuances, and point out more idiomatic approaches where appropriate.",
      },
    ],
    autonomy: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate requires hand-holding and has to be led through every step of the interview. The candidate refuses to make any decisions without consent from the interviewer.",
      },
      {
        name: "No",
        description:
          "The candidate requires lots of support to complete their task. Decisions are made reluctantly. Approval and validation are sought for each decision. The candidate is unable to describe a time where they led or instigated a project, or if they are more junior, is unable to describe a time when they solved something independently.",
      },
      {
        name: "Mixed",
        description:
          "The candidate is able to work independently, but seeks approval regularly in a way that abdicates responsibility. The candidate demonstrates some ability to deliver a solution without much input from the interviewer.",
      },
      {
        name: "Yes",
        description:
          "The candidate is confident owning their decisions and demonstrates a strong ability to work independently. If more junior, the candidate takes ownership of the problem, using the interviewer as a resource to make progress, if needed.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate controls the cadence of the task-oriented part of the interview, asking for guidance or clarification only where appropriate. The candidate makes decisions without seeking approval, but describes the rationale to the interviewer.",
      },
    ],
    basicComputerScienceKnowledge: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate is unfamiliar with the most common data structures, like hash, set, or array. The candidate is completely unable to assess the relative merits of competing algorithm choices.",
      },
      {
        name: "No",
        description:
          "The candidate has heard of common data structures, but cannot describe which ones are appropriate for the task at hand, or when they might be useful. The candidate cannot explain, for example, the difference between an O(n) solution and an O(n²) solution (the behaviour, not the terms).",
      },
      {
        name: "Mixed",
        description:
          "The candidate uses hashes, sets and the like appropriately, but cannot, for instance differentiate between a list, a queue, and an array. The candidate is aware that certain data structures are better for certain tasks, but has difficulty articulating why.",
      },
      {
        name: "Yes",
        description:
          "The candidate understands time and space complexity (even if they don’t use those terms) and can describe the characteristics of common algorithms. The candidate can describe the tradeoffs inherent in different approaches, and can articulate why a specific data structure is appropriate. The candidate can competently implement a recursive algorithm (only if recursion makes sense for the task).",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate is able to pick an appropriate data structure or algorithm for a task, and has a strong understanding of their relative merits. The candidate’s knowledge goes beyond the basics, and there is a demonstrated familiarity with concepts like heaps, priority queues, tries, or more exotic constructs.",
      },
    ],
    systemDesign: [
      {
        name: "N/A",
        description:
          "Do not make a call if the task at hand is so simple that nobody would realistically do anything other than write a quick script.",
      },
      {
        name: "Strong No",
        description:
          "The candidate writes all their code in one function, with no decomposition. The candidate does not see the value in separating out code in their solution, or if the task at hand does not warrant it, in principle. In a design question, the candidate fails to define any reasonable abstractions, or has no idea how to construct the system.",
      },
      {
        name: "No",
        description:
          "The candidate does not seek to break out their code into reusable components, and doesn’t understand the value of doing so. The candidate is unable to describe the interaction of system components with any precision. The candidate does not demonstrate any understanding of separation of concerns.",
      },
      {
        name: "Mixed",
        description:
          "The candidate adopts a reactive approach to code or system organisation, thinking only one step ahead at a time. Their finished output has the appearance of being bolted together, rather than being coherently designed. Abstractions exist, but are leaky, rigid or resistant to change.",
      },
      {
        name: "Yes",
        description:
          "The candidate is able to structure their system in a way that separates concerns appropriately with components that interact through reasonable interfaces. In object-oriented code, the candidate demonstrates a good understanding of SOLID principles (even if they don’t know the specific terms). For simple code, functions are used appropriately to minimise complexity.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate is able to break down a complex system into elegantly structured components, and thoroughly describe the interaction model, the interface and the behaviour. Abstractions are clear and clean, given the problem definition, and keep open the possibility of future needs without significant refactoring. Additional thought is given to complex and subtle interactions, like race conditions and idempotency.",
      },
    ],
    resoluteness: [
      {
        name: "N/A",
        description:
          "Do not make a call if the candidate is able to provide a solution with little effort, and no questions are asked about previous challenges.",
      },
      {
        name: "Strong No",
        description:
          "The candidate fails to complete the assigned task and is ambivalent about it. The candidate is unable, when asked, to describe a time when they persisted at something, or describes a time when they quit because something was too hard. (Excepting if, in the judgement of the interviewer, the project was unreasonably hard, or the situation was untenable.) Demonstrates no capacity for sticking with something in any prior position.",
      },
      {
        name: "No",
        description:
          "The candidate shows no strong desire to finish the problem. When confronted with issues in their solution, the candidate shows no strong inclination to get to a fully working answer. Sees difficult times as barriers, rather than challenges.",
      },
      {
        name: "Mixed",
        description:
          "The candidate professes a desire to finish a task, but shows signs of frustration when issues come up, and becomes negative about the situation. If describing a difficult prior position, the candidate failed to take any steps to make their situation better, did not explore alternatives, and instead moved on in relatively short order.",
      },
      {
        name: "Yes",
        description:
          "The candidate demonstrates a desire to finish the assigned task, and if presented with issues is suitably motivated to fix them. The candidate describes a time when they persevered with a difficult situation and achieved a good outcome. The candidate describes prior challenges as growth opportunities.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate is very determined to finish the task assigned and works hard to do so. If they finish, they are eager to describe next steps, additional work, or extensions. If the allotted time runs out, they express disappointment at not being able to finish, or suggest that they are going to work it out later. For exceptional performance, the candidate emails a solution after the fact (unprompted — do not ask them to do this). The candidate demonstrated incredible staying power in a difficult previous situation, doggedly pursuing their goal beyond what would be expected of an average person.",
      },
    ],
    curiosity: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate demonstrated no interest in $COMPANY, or in the world around them. Provided no evidence that they want to learn more.",
      },
      {
        name: "No",
        description:
          "The candidate isn’t able to describe any self-directed learning. They accept every statement at face value, without digging in. They ask no questions. (Excepting if the candidate is tired from a long day of interviews and has previously asked questions of others.)",
      },
      {
        name: "Mixed",
        description:
          "The candidate asks, or has asked, “why?” once or twice, but isn’t particularly interested in the answers, and doesn’t go deeper. The questions the candidate asks are fairly standard, on topics like tech stack, or working hours, without really seeking any deep insight. The candidate has done a little self-directed learning on a topic that interests them.",
      },
      {
        name: "Yes",
        description:
          "The candidate asks insightful questions about $COMPANY. They ask follow-up questions to go deeper on topics that interest them. They describe times when they have done independent research, on any topic. The candidate describes needing to figure out why something was broken, and derives satisfaction from finding answers. The candidate has done research on the people interviewing them.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate displays an insatiable appetite for learning, provides ample evidence of self-improvement and asking questions, and gets excited when they recognise an opportunity for learning. The candidate runs out of time asking questions, and still has more to ask.",
      },
    ],
    awareness: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate demonstrates a significant lack of self-awareness and of introspection. The candidate fails to meaningfully identify any ways in which they could improve. The candidate uncritically gives themselves a 10/10 for performance at all their past positions. The candidate demonstrates no interest in receiving feedback.",
      },
      {
        name: "No",
        description:
          "When asked to identify opportunities for improvement, the candidate gives false-modest answers like “sometimes I work too hard.” They can’t identify their performance at a previous position relative to their peers. They don’t know how their manager would rate them, or why. They have rejected concrete feedback in the past, and were unable to see why it was offered.",
      },
      {
        name: "Mixed",
        description:
          "The candidate recognises that they can improve, but speaks in vague terms that demonstrate a lack of significant thought on the matter. The candidate is ambivalent about receiving feedback. The candidate is unable to articulate a time when receiving feedback, or self-analysis, helped them become better.",
      },
      {
        name: "Yes",
        description:
          "The candidate describes a time when they received critical feedback, and were able to integrate it to become better. They make reflective statements like “I was immature”, or “I wasn’t willing to compromise”, or “I’ve learned that getting buy-in from others is important”. The candidate knows themselves, and has thought about how they can improve. The candidate made deliberate career choices in response to past experiences.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate is able to critique their own past performance and identify a number of growth opportunities. They compare their past selves with their current selves unflinchingly, and identify areas where they have improved and the steps they took. The candidate is aware that they make mistakes and demonstrates a desire to learn from them. The candidate speaks objectively about their own shortcomings and describes strategies for mitigating them. They are eager to receive feedback, and demand it.",
      },
    ],
    empathy: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate is actively hostile about former colleagues and uses pejorative words, demonstrating a lack of care. The candidate describes people with whom they disagree as, for example, “stupid”. The candidate is incapable of putting themselves in another’s place. They are focussed on themselves.",
      },
      {
        name: "No",
        description:
          "The candidate makes remarks that imply other people don’t matter, or is dismissive of alternative points of view without due consideration. When describing decisions that they don’t agree with, they are unable or unwilling to speak to any context or constraints the decision-maker faced. The candidate describes situations in terms like “us vs them”, dismissing those with whom there are disagreements as “other”. The candidate doesn’t understand why something upset someone.",
      },
      {
        name: "Mixed",
        description:
          "The candidate demonstrates a limited ability to understand another’s point of view. The candidate understands that constraints on decision makers exist, but demonstrates little sympathy for people with whom they disagree. The candidate is not particularly worried about the unfair treatment of peers.",
      },
      {
        name: "Yes",
        description:
          "The candidate declines the opportunity to blame others for a poor outcome, without providing nuance or mitigating circumstances. They demonstrate an intuitive grasp of the reasonable person principle (even if they don’t use the term). The candidate demonstrates that they recognise the impact of their actions on colleagues, and understands that their perspective is not the only valid one. The candidate describes good variable naming and code organisation as a service to colleagues.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate does not judge someone’s actions without first understanding their perspective. The candidate shows a balanced assessment of challenges faced at previous roles, and can understand the perspectives of both reports, peers, and managers (as appropriate). The candidate can clearly articulate another’s point of view and describe their worldview. The candidate feels upset when people not within their peer group are treated unfairly. The candidate thinks about how their code will be used, who will look after it, and shows strong consideration for their colleagues in how they build software.",
      },
    ],
    communication: [
      {
        name: "N/A",
        description:
          "You should be able to make a call on communication in every interview.",
      },
      {
        name: "Strong No",
        description:
          "The candidate does not ask any questions, and doesn’t listen. They solve the wrong problem as a result. The candidate is incapable of describing a concept or topic even when they are intimately familiar with it (unless — in truly exceptional cases — the topic is so complicated that the interviewer lacks the context necessary to understand it). The candidate cannot clearly communicate their intentions or thought process, even after significant encouragement and prodding.",
      },
      {
        name: "No",
        description:
          "The candidate’s intent is frequently unclear. When writing code, the interviewer frequently finds themselves in a position where they cannot in good faith say what the candidate is attempting to do, or why. The candidate cuts the interviewer off frequently. The candidate is reluctant to offer anything more than one or two word answers, or writes in fragments that don’t particularly make sense. The candidate needs a frequent re-framing of a problem to understand it. The cannot adequately explain why they chose the approach they took.",
      },
      {
        name: "Mixed",
        description:
          "The candidate needs to say things multiple times to get their point across to a good faith listener. The candidate can communicate an idea at a high level, but lacks precision and nuance in the details. The candidate “handwaves” complex parts of code despite being prodded to expound. They are unable to describe a time where they convinced someone of something, or used language to influence something.",
      },
      {
        name: "Yes",
        description:
          "When solving a problem, the candidate asks questions to clarify needs, and is able to describe an approach at a high-level. They describe how their code works, unprompted. They are able to communicate complex topics to a layperson. The candidate clearly imparts knowledge and concepts through appropriate means, including, but not limited to, diagrams, body movement, writing and speech. When explaining something, the candidate talks at a level appropriate to their audience. The candidate describes a time where their communication influenced a decision.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate frequently checks understanding when explaining a complex concept, and if there is any misunderstanding, is able to unpack the problem and effectively communicate the necessary information. The candidate finds the precise word they want to convey the exact meaning they need (even if they takes a few seconds to do so). They are able to explain with great precision why they took the steps they did on a project. The candidate has put together cases that persuade a skeptical audience.",
      },
    ],
    collaboration: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate describes themselves as a loner, doing their best work alone. Demonstrates no understanding of the value of working within teams and cannot describe a time where working with others was beneficial. The candidate is suspicious, generally, of “teamwork” as a concept.",
      },
      {
        name: "No",
        description:
          "The candidate describes successes as “I”, but describes failures as “we”. The candidate does not like working with others. They do not make use of the interviewer when they are stuck and trying to solve a problem. The candidate fails to solicit input from teammates.",
      },
      {
        name: "Mixed",
        description:
          "The candidate describes working with others, albeit with some reluctance. They demonstrate a limited capability to work on a problem with others. They ask some questions, though conversation on a problem falls short of a meaningful dialog. ",
      },
      {
        name: "Yes",
        description:
          "The candidate is happy working with others to achieve an outcome. The candidate employs a collaborative approach to problem solving, soliciting feedback, and integrating it into their solution. The candidate brings others with them. The candidate does not merely hand out tasks, and is not satisfied with merely receiving tasks to complete.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate demonstrates repeated examples of working with others to achieve a desired outcome. They are eager to work with others. The candidate describes times where other people provided skills that they were lacking. Describes achievements as “we” as appropriate (though taking individual credit for their specific contribution is fine).",
      },
    ],
    perspective: [
      {
        name: "N/A",
        description: "x",
      },
      {
        name: "Strong No",
        description:
          "The candidate offers no new perspectives on the world, the product or the company. The candidate has no thoughts on how $COMPANY can improve. The candidate appears not to have done any research on $COMPANY at all. The candidate doesn’t recognise any of the dangers of groupthink. The candidate describes directly or indirectly homogeneity as the only way to achieve success.",
      },
      {
        name: "No",
        description:
          "The candidate fails, when given the opportunity, to describe how they would improve the product, company or engineering systems. The candidate suggests that they prefer to work with people like themselves. The candidate demonstrates no interest in others’ points of view. The candidate offers no new insight, and the interviewer learns nothing new in the interview, no matter how small.",
      },
      {
        name: "Mixed",
        description:
          "The candidate has done a little research on $COMPANY, but knows little more than that it’s a blogging platform, and that Ev is the founder. The candidate solves a problem in the same way that the vast majority of candidates do. ",
      },
      {
        name: "Yes",
        description:
          "The candidate is able to describe the needs of a demographic for which $COMPANY does not yet adequately cater. The candidate is able to teach the interviewer something about people’s perspective of $COMPANY, and recognises the value of diverse perspectives. The candidate is able to contextualise a problem or solution in a way that the interviewer hasn’t considered. The candidate teaches the interviewer something they didn’t know. The candidate adds something unique to the company that we don’t already have.",
      },
      {
        name: "Strong Yes",
        description:
          "The candidate has extensively researched $COMPANY and comes prepared with lots of ways the product could be improved. The candidate has strong ties to a community that is underserved by $COMPANY, or with whom $COMPANY currently has difficulty communicating. The candidate has ideas of how $COMPANY could be made more useful or opened up to a new audience by serving a specific set of needs that haven’t been identified within the company. The candidate identifies an edge-case in a long-standing interview question, of which the interviewer was previously unaware, or solves the problem (correctly) in a way that hasn’t been seen before by the company. The candidate imparts substantial wisdom or something revelatory to the interviewer.",
      },
    ],
  };
}
