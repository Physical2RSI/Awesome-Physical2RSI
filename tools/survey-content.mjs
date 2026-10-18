// Survey content shown in the README, taken from the manuscript with the authors' approval (see docs/PUBLICATION.md).
// Keep wording in step with the manuscript; tools/render-readme.mjs lays it out.

export const SURVEY = {
  title: "Toward Recursive Self-Improvement in Physical AI",
  subtitle: "Foundations, Mechanisms, and Open Problems",
  year: 2026,
  // [name, affiliation numbers, corresponding author (optional)]
  authors: [
    ["Meng Luo", [1]],
    ["Zechen Bai", [1]],
    ["Shanqing Xu", [2]],
    ["Yanlin Li", [1]],
    ["Kaixin Li", [1]],
    ["Mengchen Qian", [2]],
    ["Ran Zhang", [3]],
    ["Ziyang Luo", [4]],
    ["Wei Chen", [2]],
    ["Hongzhan Lin", [1], true],
  ],
  affiliations: ["National University of Singapore", "Huazhong University of Science and Technology", "NTU", "Hong Kong Baptist University"],
  bibtexKey: "luo2026physicalrsi",
};

export const ABOUT = [
  "*Recursive self-improvement* (RSI) describes a system that improves not only its behavior but also the process by which it improves. " +
    "Recent digital agents test this idea by rewriting their own code and checking each version with executable tests. Bringing these mechanisms " +
    "into the physical world requires learning from partial observations through costly trials, while accounting for changing operating conditions " +
    "and potentially irreversible consequences.",
  "The survey positions RSI within robot learning and synthesizes pathways from improving robot capabilities to improving the processes that " +
    "generate them. It examines how physical experience can strengthen these improvement mechanisms, and when the resulting gains can support " +
    "further self-improvement of the mechanisms themselves.",
];

export const CONDITIONS = [
  ["Informative feedback", "does experience distinguish the remaining learning need?"],
  ["Usability", "can the receiving component represent, optimize, and execute the change?"],
  ["Distribution shift", "does the change stay useful as the policy, model, task, or hardware changes, including changes caused by improvement itself?"],
  ["Continued practice", "does another informative trial remain safe and affordable?"],
];
export const CONDITIONS_NOTE =
  "Component-level proxies are not downstream value: collection success says little about training value when kept trajectories omit the action a learner lacks, and prediction or evaluator accuracy says little when the optimizer or controller cannot use the distinction.";

export const FIGURES = {
  1: ["From digital to physical recursive self-improvement.", "Numbers mark where experience leaves a change: policy (1), world model (2), and external knowledge (3) improve what the robot does; the learning procedure (4) changes how it learns; and the improver, drawn as the loop around the procedure, revises it. RSI further requires that repair knowledge improve the improver and that the improver, once improved, help produce its own next improvement."],
  2: ["Improving what the robot does and how it learns.", "On the left, the learner improves under a fixed recipe and retains the change in its policy, world model, or external knowledge. On the right, the improver revises the learning procedure using retained repair knowledge; the dashed return asks whether that knowledge improves how the next revision is made (R1), and whether the improver, once improved, then helps produce its own next improvement (R2). The bottom row lists the physical limits behind the four conditions that let gains carry forward."],
  3: ["The review at a glance.", "Illustrations in (b) show the four grasp breakdowns from Section 1."],
  4: ["Where a retained change is kept, and its use.", "Each row follows the grasp example from physical experience to the retained change and its immediate use; the italic line names the use. Dashed tags mark secondary handoffs into the learning procedure."],
  5: ["Four teaching signals from physical experience.", "Each column follows the grasp example: what was experienced, what the signal changes in the training data, and representative systems from this section."],
  6: ["Where models, policies, and physical data change in SILVR, RISE, PlayWorld, and VLAW.", ""],
  7: ["Three forms of external knowledge in the grasp example.", "Each panel shows one saved form of the slip repair and representative systems from this section; reuse on another robot first checks the interface."],
  8: ["Does a revised component help the next learner?", "Two matched learners differ only in the component under test, here an evaluator. Their common outcome check stays fixed and separate from that evaluator; comparing the learners' outcomes tests procedure improvement."],
  9: ["A proposed test of the two links of recursive self-improvement (R1 and R2).", "In R2, self-revision with frozen or acquired knowledge first produces the control or next improver, respectively. Each then revises a learning procedure, which is tested through fresh matched learners under a common, protected outcome check."],
};
// file of each figure under assets/readme/figures (Figure 1 is a painting, kept as WebP)
export const FIGURE_FILE = (number) => `assets/readme/figures/figure-${number}.${number === 1 ? "webp" : "png"}`;

export const QUESTIONS = [
  ["RQ1", "What limits a robot's next improvement?", "Is useful experience missing, or is progress limited by supervision, optimization, action generation, interfaces, or retention?"],
  ["RQ2", "Which changes address that limitation?", "How does experience change behavior, reusable models or skills, and the collection, supervision, curriculum, or update procedures used in later learning?"],
  ["RQ3", "When can improvements build on one another?", "When do improvements carry forward into better learning procedures and improvers, and what evidence would establish recursive self-improvement?"],
  ["RQ4", "What makes self-improvement different in the physical world?", "How do sensing, embodiment, reset, safety, cost, and hardware changes constrain the process?"],
];

// The manuscript's table of the four uses of retained change, with the section that discusses each use
export const USES = [
  ["Behavior", "Policy, value, residual", "Execute or choose actions", "Better task behavior", "§3.1.1 Policy updates"],
  ["Prediction and practice", "Dynamics or world model", "Plan or supply training experience", "Better decisions or learning", "§3.1.2 World models"],
  ["Reuse and recovery", "Memory, skill, contract, program", "Retrieve, recover, or synthesize", "Reusable execution knowledge", "§3.1.3 Memories, skills, code"],
  ["Learning procedure", "Collector, evaluator, editor, updater", "Choose experience, judge, or construct updates", "Better subsequent learning", "§3.2 Learning procedures"],
];

export const EVIDENCE =
  "Existing studies, concentrated in manipulation, support behavioral improvement, benefits to later learning, and procedure improvement. " +
  "Some systems also change the improver's knowledge or tools, but the physical studies reviewed here have yet to isolate gains attributable to recursion.";

export const OUTLINE = [
  ["1", "Introduction", ""],
  ["2", "Foundations of Physical RSI", "Learning to act · Defining recursive self-improvement · Relating RSI to robot learning · Facing physical limits · Benchmarking self-improvement"],
  ["3", "Mechanisms toward Physical RSI", "Improving policies, world models, and knowledge · Improving learning procedures · Improving the improver · Closing the recursive loop"],
  ["4", "Challenges and Future Directions for Physical RSI", "Measuring improvement · Accumulating improvement · Keeping improvement safe · Making improvement recursive"],
  ["5", "Conclusion", ""],
  ["A–C", "Appendices", "Extended landscape of physical self-improvement · Reported outcomes and experimental context · Glossary"],
];

export const RECURSION = [
  ["The first three claims already have support.", "Existing studies show behavioral improvement, later-learning benefit, and procedure improvement; some systems also change their improver's knowledge or tools. For R1 and R2, the survey distinguishes mechanism only, uncontrolled results, and controlled results; evidence for an earlier claim does not establish a later one."],
  ["R1: repair knowledge must improve the improver.", "Give the improver, with its earlier and with its acquired repair knowledge, the same new failure histories, tools, objectives, and budget; apply the learning procedures each produces to matched learners and compare common physical outcomes."],
  ["R2: the improved improver must help improve itself.", "Let the updated improver propose a revision of itself and compare it with a control revision proposed with its earlier knowledge frozen; repeating the first test on the resulting improvers links further gains to what was learned."],
  ["Where to start.", "Reward construction and skill-library editing yield inspectable revisions that simulation can screen, leaving four hardware-trained learners per seed. Eureka (a reward improver whose knowledge does not change) and PRACTICE (a learned skill editor whose own improver is fixed) already supply baselines."],
];

// The manuscript's table of open problems: [direction, conditions served, central question, starting benchmark]
export const PROBLEMS = [
  ["Keeping judges aligned", ["Distribution shift"], "How can evaluators be refreshed without changing the intended task?", "Fixed learner and data; varied evaluator and refresh rule; protected physical outcomes"],
  ["Surviving system changes", ["Usability", "Distribution shift"], "When should an artifact be reused, adapted, revalidated, or retired?", "Declared changes to sensing, embodiment, timing, interfaces, and memory schemas, plus gradual drift"],
  ["Budgeting physical resources", ["Continued practice"], "How should robot time, human attention, compute, and wear be spent over time?", "Task sequences with maintenance events under finite capacities; Pareto reporting of resources"],
  ["Finding the bottleneck", ["Informative feedback"], "Which component limits the next improvement?", "Injected policy, model, evaluator, and interface faults with similar terminal outcomes; held-out natural failures"],
  ["Choosing the next experiment", ["Informative feedback"], "Which probe yields evidence that an available update can use?", "Fixed starting system and budget; joint selection versus fixed, information-gain-only, and sequential baselines"],
  ["Transferring repair knowledge", ["Usability", "Distribution shift"], "Does knowledge about earlier repairs improve repairs on new failure families?", "The two-round comparison of Figure 9 on held-out failure families"],
];

export const PROGRAMS = [
  "Combine cross-component diagnosis with joint experiment–update selection under matched multi-resource budgets.",
  "Test versioned evaluators and repair knowledge on held-out failures and declared hardware or software changes, using protected outcome checks to separate transfer from drift.",
  "Connect these tests across at least two causally isolated procedure-revision rounds and report their full acquisition, maintenance, and revalidation costs.",
];

export const CLOSING =
  "Physical recursive self-improvement will be demonstrated not when a robot changes many times, but when knowledge of why one repair worked causally improves how the next repair is made, and when that improved capability, applied to new evidence, helps improve itself again without losing the ability to keep learning.";

// BibTeX entry shared by the README and the website
export function surveyBibtex(url) {
  const authors = SURVEY.authors
    .map(([name]) => {
      const parts = name.split(" ");
      return `${parts.at(-1)}, ${parts.slice(0, -1).join(" ")}`;
    })
    .join(" and ");
  return [
    `@misc{${SURVEY.bibtexKey},`,
    `  title        = {${SURVEY.title}: ${SURVEY.subtitle}},`,
    `  author       = {${authors}},`,
    `  year         = {${SURVEY.year}},`,
    `  howpublished = {\\url{${url}}},`,
    "  note         = {Manuscript}",
    "}",
  ].join("\n");
}

export const TEASER_ALT =
  "A painting in the style of Van Gogh: under a swirling starry sky, a small robot practises grasping a mug, files the change it kept, rewrites its own learning recipe, and climbs a step holding the improved recipe, while a golden trail loops back to the start.";

// Figure 6's four systems (panel titles), with the robot that illustrates each panel
export const SYSTEMS = [
  ["silvr", "SILVR", "Collect on the real robot, then revise the planner"],
  ["rise", "RISE", "Improve a policy inside fixed learned models"],
  ["playworld", "PlayWorld", "Acquire play data, fit a model, then optimize a noise policy"],
  ["vlaw", "VLAW", "Update the world model, then the policy; repeat with new physical data"],
];
