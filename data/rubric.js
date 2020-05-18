export default function rubric() {
  return [
    {
      title: "Ability to build software",
      description:
        "Qualities related to the candidate’s ability to effectively build software.",
      questions: [
        {
          title: "Problem Solving",
          gradeKey: "problemSolving",
          description: (
            <p>
              Independently finding a creative solution is great. Failing to
              conceive of any solution is a red flag. Only demonstrating a naïve
              approach is a warning sign. Partial credit for being able to
              conceive of the solution, but not being able to follow through
              with it, especially for junior candidates.
            </p>
          ),
        },
        {
          title: "Code Fluency",
          gradeKey: "codeFluency",
          description: (
            <p>
              Make allowances at your discretion if this is a whiteboard
              interview, or if they are using tools on a provided computer that
              they don’t usually use. For coding tests, allow — or instruct —
              the candidate to use the language they are most familiar with.
            </p>
          ),
        },
        {
          title: "Autonomy",
          gradeKey: "autonomy",
          description: (
            <p>
              The specifics of this will vary by interview type. For Tech Lead
              Simulations, we might expect a good candidate to take control,
              break the problem down and assign them. For a coding interview, a
              good candidate will work independently, requesting little input
              except to clarify scope. Generally, we are looking for people who
              will be able to work with minimal guidance, and people who are
              able to own problems.
            </p>
          ),
        },
        {
          title: "Basic computer science knowledge",
          gradeKey: "basicComputerScienceKnowledge",
          description: (
            <>
              <p>
                The specifics of this category will vary by role. For
                specialised roles like Recommendations Research Scientist, the
                expectation of algorithmic familiarity is likely to be higher,
                and we might, for example, have a reasonable expectation of the
                candidate knowing the naïve Bayesian or collaborative filtering.
                We would generally expect senior engineers to have a wider
                exposure to more special-purpose data structures than junior
                engineers.
              </p>
              <p>
                Some questions do not require the use of complex data
                structures. Do not arbitrarily force a discussion about them,
                unless there is a clear fit for the problem.
              </p>
              <p>
                To be clear: we are not judging candidates on whether they know
                terms like O(n). We are judging them on whether they understand
                that there are trade-offs in building software, and that
                different algorithms and data structures have different
                trade-offs.
              </p>
              <p>
                Candidates who choose and implement appropriate data structures
                and algorithms without explaining their use may score well here,
                but more poorly on communication.
              </p>
            </>
          ),
        },
        {
          title: "System design",
          gradeKey: "systemDesign",
          description: (
            <p>
              The grading for this portion will depend on the type of interview
              and the seniority of the candidate. For more senior positions, we
              would expect sensible code composition as a minimum, and some
              evidence of larger-scale system design. For junior positions,
              sensible decomposition of code will typically suffice.
            </p>
          ),
        },
        {
          title: "Resoluteness",
          gradeKey: "resoluteness",
          description: (
            <p>
              Giving up on a particular approach and finding an alternative is
              fine. Giving up on the entire task because it is too hard is not.
              This is unrelated to whether the candidate actually solves the
              problem. When grading on challenges in past positions, exercise
              your judgement as to whether any further effort was warranted on
              the candidate’s part — staying in an abusive, hostile or dangerous
              environment is not a reasonable expectation of the candidate.
            </p>
          ),
        },
      ],
    },
    {
      title: "Ability to learn and teach",
      description:
        "Qualities related to a candidate’s ability to improve themselves, and make $COMPANY better.",
      questions: [
        {
          title: "Curiosity",
          gradeKey: "curiosity",
          description: (
            <p>
              Curiosity does not have to be code- or industry-related! A
              demonstrated curiosity about, for example (and without
              limitation), their family genealogy, a foreign culture, cuisine,
              the mechanics of windmills, literary history, biomechanics etc.
              are all interesting. Consider as examples within $COMPANY today:
              typography, the provenance of meat, travel-hacking, and Japanese,
              among many others.
            </p>
          ),
        },
        {
          title: "Awareness",
          gradeKey: "awareness",
          description: (
            <>
              <p>
                We want candidates who know themselves, who will respond well to
                feedback, and who are self-aware enough to know what their
                deficiencies are and seek to work with those who can support
                them.
              </p>
              <p>
                It will typically be hard to make a call on this in a purely
                technical interview. However, it is instructive to see how the
                candidate responds when bugs with their code are pointed out. An
                inability to recognise or accept a mistake can be problematic.
                Contrariwise, responding well to a bug with humour and good
                grace is a good sign.
              </p>
            </>
          ),
        },
        {
          title: "Empathy",
          gradeKey: "empathy",
          description: (
            <>
              <p>
                Judging empathy in an interview can be difficult. Generally,
                we’re looking for people that understand there are multiple
                perspectives, are sensitive to other people, and can demonstrate
                the ability to imagine what someone else might be thinking or
                feeling. The more senior a candidate is and the more likely they
                are to lead others, the more important empathy is.
              </p>
              <p>
                You will generally not be able to make a call in a purely
                technical interview, if the candidate describes no interactions
                with others (colleagues, clients etc.). However, there may be
                some signs like empathy to future maintainers of code — good
                variable naming, good documentation — as long as the candidate
                describes the value of those things for that purpose.
              </p>
            </>
          ),
        },
        {
          title: "Communication",
          gradeKey: "communication",
          description: (
            <>
              <p>
                Communication is very broad, and can cover presentation skills,
                verbal communication, an ability to explain new concepts
                clearly, written communication, slide decks, data
                visualisations, gesticulations with hands, listening, asking
                clarifying questions, and expectation-setting. Communication
                styles vary widely among candidates; you should focus on whether
                they are able to get their point across, and able to accurately
                interpret your questions.
              </p>
              <p>
                Some people are naturally less communicative than others when
                speaking to strangers, and especially in interviews. You should
                assess them on the entirety of their communicative ability, not
                just their ability to talk fast and off the cuff. It’s fine to
                coax more out of a person, and/or give them time to warm up.
                Whenever possible, ask open questions to give the candidate the
                opportunity to talk.
              </p>
            </>
          ),
        },
        {
          title: "Collaboration",
          gradeKey: "collaboration",
          description: (
            <p>
              Collaboration If a candidate has worked exclusively in very small
              teams, much of this might be theoretical. In technical interviews,
              judge the candidate on their ability to use you for your
              knowledge, and willingness to ask for help. Pay attention to how
              they describe their role on previous teams, and whether they are
              comfortable sharing credit and accepting blame.
            </p>
          ),
        },
        {
          title: "Perspective",
          gradeKey: "perspective",
          description: (
            <>
              <p>
                ​While everyone may be​ (or at least, feel) unique, people from
                similar backgrounds with similar education and career paths tend
                to have similar worldviews​.​ Current academic studies in this
                area suggests that diversity of background and point of view
                makes companies better. We recognize an inherent tension in this
                area — that by weighing some demographic backgrounds more
                heavily, we may be disadvantaging others.
              </p>
              <p>
                ​A candidate should not be penalised for the particular
                demographic that they belong to​, or don’t belong to.​ ​But we
                recognise that those who are underrepresented at $COMPANY and in
                the tech sector more broadly,​ can offer us points of view that
                we are currently missing. We should remember that while we are
                hiring individuals, we are building a team.
              </p>
              <p>
                Perspective is itself a broad topic — it​ ​could​ be of the
                world, of the company, of technology, of the product​, or
                something else entirely​. As a non-exhaustive example list, life
                experiences that may lead a person to have an underrepresented
                perspective may include gender, race, country of origin,
                languages spoken, military service, sexuality, age,
                socio-economic class, political preference, education, family
                makeup, or religion. It is intrusive and illegal to ask direct
                questions about most of these categories, so don’t. To the same
                point, asking indirect questions aimed at yielding this
                information are equally problematic.
              </p>
              <p>
                But, the underlying motivation — to understand what point of
                view a candidate might bring to bear on our company our product
                — is something you should pursue. To this end, open-ended
                questions may generate discussions on what a candidate may bring
                to $COMPANY that isn’t in evidence on their resumè. For example,
                questions like:
              </p>
              <p>
                “What are some of the important experiences that have shaped
                your view of the world and your work?”
              </p>
              <p>
                “Do you think there’s a perspective that our product is missing
                that could improve it?”
              </p>
              <p>
                “What are some things you think $COMPANY can do better to
                broaden our appeal to new users?”
              </p>
            </>
          ),
        },
      ],
    },
  ];
}
