// Survey content shown in the README, taken from the manuscript with the authors' approval (see docs/PUBLICATION.md).
// Keep wording in step with the manuscript; tools/render-readme.mjs lays it out.

export const SURVEY = {
  title: "Toward Recursive Self-Improvement in Physical AI",
  year: 2026,
  // [name, affiliation numbers, corresponding author (optional)]
  authors: [
    ["Meng Luo", [1]],
    ["Zechen Bai", [1]],
    ["Shanqing Xu", [2]],
    ["Yanlin Li", [1]],
    ["Kaixin Li", [1]],
    ["Mengchen Qian", [2]],
    ["Weifeng Lu", [3]],
    ["Ran Zhang", [4]],
    ["Yingtian Zou", [3]],
    ["Ziyang Luo", [5]],
    ["Wei Chen", [2]],
    ["Hongzhan Lin", [1], true],
  ],
  affiliations: ["NUS", "HUST", "SJTU", "NTU", "HKBU"],
  bibtexKey: "luo2026physicalrsi",
};

export const ABOUT = [
  "*Recursive self-improvement* (RSI) describes a system that improves not only its behavior but also the process by which it improves. " +
    "Recent digital agents test this idea by rewriting their own code and checking each version with executable tests. Bringing these mechanisms " +
    "into the physical world requires learning from partial observations through costly trials, while accounting for changing operating conditions " +
    "and potentially irreversible consequences.",
  "The survey positions RSI within robot learning and traces pathways from improving robot capabilities to improving the processes that " +
    "generate them. It examines how physical experience can strengthen these improvement mechanisms, and when the resulting gains can support " +
    "further self-improvement of the mechanisms themselves.",
];

export const CONDITIONS = [
  ["Informative feedback", "does experience distinguish the remaining learning need?"],
  ["Usability", "can the receiving component represent, optimize, and execute the change?"],
  ["Robustness to distribution shift", "does the change stay useful as the policy, model, task, or hardware changes, including changes caused by improvement itself?"],
  ["Continued practice", "does another informative trial remain safe and affordable?"],
];
export const CONDITIONS_NOTE =
  "Data volume and component accuracy are unreliable proxies for progress: two data collectors with similar task success can yield training data of very different value, and a more accurate predictor can still produce less useful training data for a policy.";

export const FIGURES = {
  1: ["From digital to physical recursive self-improvement.", "Numbers mark where experience leaves a change: policy (1), world model (2), and external knowledge (3) improve what the robot does; the learning procedure (4) changes how it learns; and the improver, drawn as the loop around the procedure, revises it. RSI further requires that repair knowledge improve the improver and that the improver, once improved, help produce its own next improvement."],
  2: ["Improving what the robot does and how it learns.", "On the left, the learner improves under a fixed recipe and retains the change in its policy, world model, or external knowledge. On the right, the improver revises the learning procedure using retained repair knowledge; the dashed return asks whether that knowledge improves how the next revision is made (R1), and whether the improver, once improved, then helps produce its own next improvement (R2). The bottom row lists the physical limits behind the four conditions that let gains carry forward."],
  3: ["The review at a glance.", "Illustrations in (b) show the four grasp breakdowns from Section 1."],
  4: ["Where a retained change is kept and how it is used.", "Each row follows the grasp example from physical experience to the retained change and its immediate use; the italic line names the use. Dashed tags mark secondary handoffs into the learning procedure."],
  5: ["Four teaching signals from physical experience.", "Each column follows the grasp example: what was experienced, what the signal changes in the training data, and representative systems from this section."],
  6: ["Where models, policies, and physical data change.", "Learning loops of SILVR, RISE, PlayWorld, and VLAW."],
  7: ["Three forms of external knowledge in the grasp example.", "Each panel shows one saved form of the slip repair and representative systems from this section; reuse on another robot first checks the interface."],
  8: ["Does a revised component help the next learner?", "Two matched learners differ only in the component under test, here an evaluator. Their common outcome check stays fixed and separate from that evaluator; comparing the learners' outcomes tests procedure improvement."],
  9: ["A proposed test of the two links of recursive self-improvement (R1 and R2).", "In R2, the updated improver revises itself with frozen or acquired knowledge, producing the control or next improver, respectively. Each then revises a learning procedure, which is tested through fresh matched learners under a common, protected outcome check; the next improver must beat both the control and the updated improver; for the updated improver, its learner from R1 serves as the baseline. The R2 control assumes that the acquired knowledge can be withheld without changing the parent improver, as with a memory snapshot; the count of four hardware-trained learners per seed assumes that one candidate per improver survives screening."],
};
// file of each figure under assets/readme/figures (Figure 1 is a painting, kept as WebP)
export const FIGURE_FILE = (number) => `assets/readme/figures/figure-${number}.${number === 1 ? "webp" : "png"}`;

export const QUESTIONS = [
  ["RQ1", "What limits a robot's next improvement?", "Is useful experience missing, or is progress limited by supervision, optimization, action generation, interfaces, or retention?"],
  ["RQ2", "Which changes address that limitation?", "How does experience change behavior, reusable models or skills, and the collection, supervision, curriculum, or update procedures used in later learning?"],
  ["RQ3", "When can improvements build on one another?", "When do improvements carry forward into better learning procedures and improvers, and what evidence would establish recursive self-improvement?"],
  ["RQ4", "What makes self-improvement different in the physical world?", "How do sensing, embodiment, reset, safety, cost, and hardware changes constrain the process?"],
];

// The four rows of Figure 4 (where a retained change is kept and how it is used), with the section that discusses each use
export const USES = [
  ["Behavior", "Policy, value, residual", "Execute or choose actions", "Better task behavior", "§3.1.1 Policy updates"],
  ["Prediction and practice", "Dynamics or world model", "Plan or supply training experience", "Better decisions or learning", "§3.1.2 World models"],
  ["Reuse and recovery", "Memory, skill, contract, program", "Retrieve, recover, or synthesize", "Reusable execution knowledge", "§3.1.3 Memories, skills, code"],
  ["Learning procedure", "Collector, evaluator, editor, updater", "Choose experience, judge, or construct updates", "Better subsequent learning", "§3.2 Learning procedures"],
];

export const EVIDENCE =
  "Existing studies, concentrated in manipulation, support behavioral improvement, later-learning benefits, and procedure improvement. " +
  "Some systems also change their improver's knowledge or tools, but no physical study reviewed here has yet isolated a gain attributable to recursion, "+
  "which requires a controlled comparison against a version of the improver whose acquired knowledge is frozen.";

export const OUTLINE = [
  ["1", "Introduction", ""],
  ["2", "Foundations of Physical RSI", "Learning to act · Defining recursive self-improvement · Relating RSI to robot learning · Facing physical limits · Benchmarking self-improvement"],
  ["3", "Mechanisms toward Physical RSI", "Improving policies, world models, and knowledge · Improving learning procedures · Improving the improver · Closing the recursive loop"],
  ["4", "Challenges and Future Directions for Physical RSI", "Measuring improvement · Accumulating improvement · Keeping improvement safe · Making improvement recursive"],
  ["5", "Conclusion", ""],
  ["A–D", "Appendices", "Extended landscape of physical self-improvement · Reported outcomes and experimental context · Glossary · Gallery"],
];

export const RECURSION = [
  ["The first three claims already have support.", "Existing studies show behavioral improvement, later-learning benefit, and procedure improvement; some systems also change their improver's knowledge or tools. For R1 and R2, the survey distinguishes mechanism only, uncontrolled results, and controlled results; evidence for an earlier claim does not establish a later one."],
  ["R1: repair knowledge must improve the improver.", "Give the improver, with its earlier and with its acquired repair knowledge, the same new failure histories, tools, objectives, and budget; apply the learning procedures each produces to matched learners and compare common physical outcomes."],
  ["R2: the improved improver must help improve itself.", "Given common new repair histories, let the updated improver propose a revision of itself and compare the result both with the unrevised improver and with a control revision of the same improver proposed with its earlier knowledge frozen; repeating the first two tests on the resulting improvers links further gains to what was learned."],
  ["Where to start.", "Reward construction and skill-library editing yield inspectable revisions that simulation can screen, leaving four hardware-trained learners per seed when one candidate per improver survives. Eureka (a reward improver whose knowledge does not change) and PRACTICE (a learned skill editor whose own improver is fixed) already supply baselines."],
];

// The manuscript's table of open problems: [direction, conditions served, central question, starting benchmark]
export const PROBLEMS = [
  ["Keeping judges aligned", ["Robustness to distribution shift"], "Refresh the judge, keep the task", "Vary only the evaluator; protected outcomes"],
  ["Surviving system changes", ["Usability", "Robustness to distribution shift"], "Reuse, adapt, revalidate, or retire?", "Declared changes plus gradual drift"],
  ["Budgeting physical resources", ["Continued practice"], "Spending robot time, attention, compute, wear", "Task sequences with upkeep; Pareto reports"],
  ["Finding the bottleneck", ["Informative feedback"], "Which component limits improvement?", "Injected faults; held-out natural failures"],
  ["Choosing the next experiment", ["Informative feedback"], "Which probe yields usable evidence?", "Joint vs fixed, information-gain, sequential"],
  ["Transferring repair knowledge", ["Usability", "Robustness to distribution shift"], "Do repair lessons transfer to new failures?", "Two-round test (Figure 9)"],
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
    `  title        = {${SURVEY.title}},`,
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
