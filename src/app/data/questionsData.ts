export const questions = [
  {
    id: 1,
    questionId: '37034',
    standard: '8.NS',
    standardName: 'The Number System',
    measurableStandard: '[8.NS.A.1] Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion; for rational numbers show that the decimal expansion repeats eventually, and convert a decimal expansion which repeats eventually into a rational number.',
    questionText: 'Which of the following numbers is irrational?',
    options: [
      { letter: 'A', text: '−6', isCorrect: false },
      { letter: 'B', text: '−0.45', isCorrect: false },
      { letter: 'C', text: '2/3', isCorrect: false },
      { letter: 'D', text: '√10', isCorrect: true },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Assumes irrational because of the negative sign',
      'Assumes irrational because of decimal',
      'Assumes irrational because of fraction'
    ],
    percentCorrect: 82,
    studentsCorrect: 23,
    studentsIncorrect: 5,
    color: '#388E3C'
  },
  {
    id: 2,
    questionId: '37035',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.A.2] Use square root and cube root symbols to represent solutions to equations of the form x² = p and x³ = p, where p is a positive rational number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes.',
    questionText: 'Solve for x: 2x + 5 = 15',
    options: [
      { letter: 'A', text: 'x = 5', isCorrect: true },
      { letter: 'B', text: 'x = 10', isCorrect: false },
      { letter: 'C', text: 'x = 7.5', isCorrect: false },
      { letter: 'D', text: 'x = 20', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Did not subtract 5 first',
      'Forgot to divide by 2',
      'Added instead of subtracting'
    ],
    percentCorrect: 61,
    studentsCorrect: 17,
    studentsIncorrect: 11,
    color: '#5F1980'
  },
  {
    id: 3,
    questionId: '37036',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.B.5] Graph proportional relationships, interpreting the unit rate as the slope of the graph. Compare two different proportional relationships represented in different ways.',
    questionText: 'Graph the linear function y = 2x - 3',
    options: [
      { letter: 'A', text: 'Graph A', isCorrect: false },
      { letter: 'B', text: 'Graph B', isCorrect: true },
      { letter: 'C', text: 'Graph C', isCorrect: false },
      { letter: 'D', text: 'Graph D', isCorrect: false },
    ],
    bloomsTaxonomy: 'Understanding',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Confused slope direction',
      'Misidentified y-intercept',
      'Used wrong scale'
    ],
    percentCorrect: 92,
    studentsCorrect: 26,
    studentsIncorrect: 2,
    color: '#1565C0'
  },
  {
    id: 4,
    questionId: '37037',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.C.7] Solve linear equations in one variable. Give examples of linear equations in one variable with one solution, infinitely many solutions, or no solutions.',
    questionText: 'Which equation has no solution?',
    options: [
      { letter: 'A', text: '2x + 3 = 2x + 5', isCorrect: true },
      { letter: 'B', text: 'x + 1 = 2', isCorrect: false },
      { letter: 'C', text: '3x = 9', isCorrect: false },
      { letter: 'D', text: 'x - 2 = x - 2', isCorrect: false },
    ],
    bloomsTaxonomy: 'Analyzing',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Solved without considering contradiction',
      'Confused with simple solution',
      'Thought identity means no solution'
    ],
    percentCorrect: 32,
    studentsCorrect: 9,
    studentsIncorrect: 19,
    color: '#B40B08'
  },
  {
    id: 5,
    questionId: '37038',
    standard: '8.F',
    standardName: 'Functions',
    measurableStandard: '[8.F.A.3] Interpret the equation y = mx + b as defining a linear function, whose graph is a straight line; give examples of functions that are not linear.',
    questionText: 'Identify the slope of the line y = 3x + 2',
    options: [
      { letter: 'A', text: '3', isCorrect: true },
      { letter: 'B', text: '2', isCorrect: false },
      { letter: 'C', text: '-3', isCorrect: false },
      { letter: 'D', text: '5', isCorrect: false },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Confused slope with y-intercept',
      'Used wrong sign',
      'Added coefficients together'
    ],
    percentCorrect: 78,
    studentsCorrect: 22,
    studentsIncorrect: 6,
    color: '#5F1980'
  },
  {
    id: 6,
    questionId: '37039',
    standard: '8.F',
    standardName: 'Functions',
    measurableStandard: '[8.F.B.4] Construct a function to model a linear relationship between two quantities. Determine the rate of change and initial value of the function from a description of a relationship or from two (x, y) values.',
    questionText: 'What is the rate of change between points (2, 5) and (4, 11)?',
    options: [
      { letter: 'A', text: '3', isCorrect: true },
      { letter: 'B', text: '2', isCorrect: false },
      { letter: 'C', text: '6', isCorrect: false },
      { letter: 'D', text: '1/3', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Only calculated x change',
      'Only calculated y change',
      'Inverted the slope fraction'
    ],
    percentCorrect: 85,
    studentsCorrect: 24,
    studentsIncorrect: 4,
    color: '#388E3C'
  },
  {
    id: 7,
    questionId: '37040',
    standard: '8.G',
    standardName: 'Geometry',
    measurableStandard: '[8.G.C.9] Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve real-world and mathematical problems.',
    questionText: 'Calculate the volume of a cylinder with radius 3 and height 5',
    options: [
      { letter: 'A', text: '45π', isCorrect: true },
      { letter: 'B', text: '15π', isCorrect: false },
      { letter: 'C', text: '30π', isCorrect: false },
      { letter: 'D', text: '75π', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Used diameter instead of radius',
      'Forgot to square the radius',
      'Confused with surface area formula'
    ],
    percentCorrect: 45,
    studentsCorrect: 13,
    studentsIncorrect: 15,
    color: '#F64C13'
  },
  {
    id: 8,
    questionId: '37041',
    standard: '8.G',
    standardName: 'Geometry',
    measurableStandard: '[8.G.B.7] Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions.',
    questionText: 'In a right triangle, if a = 3 and b = 4, what is c?',
    options: [
      { letter: 'A', text: '5', isCorrect: true },
      { letter: 'B', text: '7', isCorrect: false },
      { letter: 'C', text: '12', isCorrect: false },
      { letter: 'D', text: '25', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Added sides instead of using theorem',
      'Multiplied sides',
      'Squared the sum instead of summing squares'
    ],
    percentCorrect: 95,
    studentsCorrect: 27,
    studentsIncorrect: 1,
    color: '#1565C0'
  },
  {
    id: 9,
    questionId: '37042',
    standard: '8.NS',
    standardName: 'Number System',
    measurableStandard: '[8.NS.A.2] Use rational approximations of irrational numbers to compare the size of irrational numbers, locate them approximately on a number line diagram, and estimate the value of expressions.',
    questionText: 'Which value is closest to √50?',
    options: [
      { letter: 'A', text: '7.1', isCorrect: true },
      { letter: 'B', text: '6.5', isCorrect: false },
      { letter: 'C', text: '8.0', isCorrect: false },
      { letter: 'D', text: '25', isCorrect: false },
    ],
    bloomsTaxonomy: 'Understanding',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Underestimated square root',
      'Overestimated square root',
      'Divided by 2 instead of taking root'
    ],
    percentCorrect: 68,
    studentsCorrect: 19,
    studentsIncorrect: 9,
    color: '#5F1980'
  },
  {
    id: 10,
    questionId: '37043',
    standard: '8.NS',
    standardName: 'Number System',
    measurableStandard: '[8.NS.A.1] Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion.',
    questionText: 'Which number is rational?',
    options: [
      { letter: 'A', text: '0.75', isCorrect: true },
      { letter: 'B', text: 'π', isCorrect: false },
      { letter: 'C', text: '√2', isCorrect: false },
      { letter: 'D', text: '√3', isCorrect: false },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Thought π is rational',
      'Confused all square roots as irrational',
      'Did not recognize terminating decimal'
    ],
    percentCorrect: 73,
    studentsCorrect: 20,
    studentsIncorrect: 8,
    color: '#5F1980'
  },
  {
    id: 11,
    questionId: '37044',
    standard: '8.SP',
    standardName: 'Statistics and Probability',
    measurableStandard: '[8.SP.A.1] Construct and interpret scatter plots for bivariate measurement data to investigate patterns of association between two quantities.',
    questionText: 'What type of correlation does the scatter plot show?',
    options: [
      { letter: 'A', text: 'Positive', isCorrect: true },
      { letter: 'B', text: 'Negative', isCorrect: false },
      { letter: 'C', text: 'No correlation', isCorrect: false },
      { letter: 'D', text: 'Exponential', isCorrect: false },
    ],
    bloomsTaxonomy: 'Understanding',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Read trend backwards',
      'Did not see pattern',
      'Confused correlation type with function type'
    ],
    percentCorrect: 88,
    studentsCorrect: 25,
    studentsIncorrect: 3,
    color: '#388E3C'
  },
  {
    id: 12,
    questionId: '37045',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.A.1] Know and apply the properties of integer exponents to generate equivalent numerical expressions.',
    questionText: 'Simplify: 2³ × 2²',
    options: [
      { letter: 'A', text: '2⁵', isCorrect: true },
      { letter: 'B', text: '2⁶', isCorrect: false },
      { letter: 'C', text: '4⁵', isCorrect: false },
      { letter: 'D', text: '32', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Multiplied exponents instead of adding',
      'Multiplied bases',
      'Calculated value instead of expression'
    ],
    percentCorrect: 71,
    studentsCorrect: 20,
    studentsIncorrect: 8,
    color: '#5F1980'
  },
  {
    id: 13,
    questionId: '37046',
    standard: '8.F',
    standardName: 'Functions',
    measurableStandard: '[8.F.A.1] Understand that a function is a rule that assigns to each input exactly one output.',
    questionText: 'Which relation is NOT a function?',
    options: [
      { letter: 'A', text: '{(1,2), (2,3), (1,4)}', isCorrect: true },
      { letter: 'B', text: '{(1,2), (2,2), (3,2)}', isCorrect: false },
      { letter: 'C', text: '{(1,2), (2,3), (3,4)}', isCorrect: false },
      { letter: 'D', text: '{(0,0), (1,1), (2,4)}', isCorrect: false },
    ],
    bloomsTaxonomy: 'Understanding',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Thought same output means not function',
      'Did not check for repeated inputs',
      'Confused with domain/range'
    ],
    percentCorrect: 64,
    studentsCorrect: 18,
    studentsIncorrect: 10,
    color: '#5F1980'
  },
  {
    id: 14,
    questionId: '37047',
    standard: '8.G',
    standardName: 'Geometry',
    measurableStandard: '[8.G.A.2] Understand that a two-dimensional figure is congruent to another if the second can be obtained from the first by a sequence of rotations, reflections, and translations.',
    questionText: 'Which transformation produces a congruent figure?',
    options: [
      { letter: 'A', text: 'Rotation', isCorrect: true },
      { letter: 'B', text: 'Dilation', isCorrect: false },
      { letter: 'C', text: 'Scaling', isCorrect: false },
      { letter: 'D', text: 'Stretching', isCorrect: false },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Confused with similarity transformations',
      'Did not understand congruence',
      'Thought all transformations preserve size'
    ],
    percentCorrect: 89,
    studentsCorrect: 25,
    studentsIncorrect: 3,
    color: '#388E3C'
  },
  {
    id: 15,
    questionId: '37048',
    standard: '8.NS',
    standardName: 'Number System',
    measurableStandard: '[8.NS.A.1] Know that numbers that are not rational are called irrational.',
    questionText: 'Which is an example of an irrational number?',
    options: [
      { letter: 'A', text: 'π', isCorrect: true },
      { letter: 'B', text: '0.333...', isCorrect: false },
      { letter: 'C', text: '√4', isCorrect: false },
      { letter: 'D', text: '7/8', isCorrect: false },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Thought repeating decimals are irrational',
      'Did not simplify square root',
      'Confused fractions with irrational'
    ],
    percentCorrect: 93,
    studentsCorrect: 26,
    studentsIncorrect: 2,
    color: '#1565C0'
  },
  {
    id: 16,
    questionId: '37049',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.C.8] Analyze and solve pairs of simultaneous linear equations.',
    questionText: 'Solve the system: x + y = 5 and x - y = 1',
    options: [
      { letter: 'A', text: 'x=3, y=2', isCorrect: true },
      { letter: 'B', text: 'x=2, y=3', isCorrect: false },
      { letter: 'C', text: 'x=4, y=1', isCorrect: false },
      { letter: 'D', text: 'x=5, y=0', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Swapped x and y values',
      'Made arithmetic error',
      'Only solved one equation'
    ],
    percentCorrect: 58,
    studentsCorrect: 16,
    studentsIncorrect: 12,
    color: '#F64C13'
  },
  {
    id: 17,
    questionId: '37050',
    standard: '8.SP',
    standardName: 'Statistics and Probability',
    measurableStandard: '[8.SP.A.2] Know that straight lines are widely used to model relationships between two quantitative variables.',
    questionText: 'What is the best line of fit for the data?',
    options: [
      { letter: 'A', text: 'y = 2x + 1', isCorrect: true },
      { letter: 'B', text: 'y = x + 3', isCorrect: false },
      { letter: 'C', text: 'y = 3x', isCorrect: false },
      { letter: 'D', text: 'y = -x + 5', isCorrect: false },
    ],
    bloomsTaxonomy: 'Analyzing',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Incorrect slope estimate',
      'Wrong y-intercept',
      'Used negative slope'
    ],
    percentCorrect: 42,
    studentsCorrect: 12,
    studentsIncorrect: 16,
    color: '#F64C13'
  },
  {
    id: 18,
    questionId: '37051',
    standard: '8.F',
    standardName: 'Functions',
    measurableStandard: '[8.F.B.5] Describe qualitatively the functional relationship between two quantities by analyzing a graph.',
    questionText: 'When does the function increase?',
    options: [
      { letter: 'A', text: 'x > 2', isCorrect: true },
      { letter: 'B', text: 'x < 2', isCorrect: false },
      { letter: 'C', text: 'x = 2', isCorrect: false },
      { letter: 'D', text: 'All values', isCorrect: false },
    ],
    bloomsTaxonomy: 'Analyzing',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Read graph backwards',
      'Identified minimum instead',
      'Did not understand increasing'
    ],
    percentCorrect: 76,
    studentsCorrect: 21,
    studentsIncorrect: 7,
    color: '#5F1980'
  },
  {
    id: 19,
    questionId: '37052',
    standard: '8.G',
    standardName: 'Geometry',
    measurableStandard: '[8.G.A.5] Use informal arguments to establish facts about the angle sum and exterior angle of triangles.',
    questionText: 'What is the sum of interior angles in a triangle?',
    options: [
      { letter: 'A', text: '180°', isCorrect: true },
      { letter: 'B', text: '360°', isCorrect: false },
      { letter: 'C', text: '90°', isCorrect: false },
      { letter: 'D', text: '270°', isCorrect: false },
    ],
    bloomsTaxonomy: 'Remembering',
    itemConceptLevel: 'Foundational',
    teacherRationale: [
      'Confused with quadrilateral',
      'Thought each angle is 90°',
      'Random guess'
    ],
    percentCorrect: 96,
    studentsCorrect: 27,
    studentsIncorrect: 1,
    color: '#1565C0'
  },
  {
    id: 20,
    questionId: '37053',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.A.3] Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities.',
    questionText: 'Express 4,500,000 in scientific notation',
    options: [
      { letter: 'A', text: '4.5 × 10⁶', isCorrect: true },
      { letter: 'B', text: '45 × 10⁵', isCorrect: false },
      { letter: 'C', text: '4.5 × 10⁵', isCorrect: false },
      { letter: 'D', text: '0.45 × 10⁷', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Did not move decimal to single digit',
      'Counted decimal places wrong',
      'Moved decimal wrong direction'
    ],
    percentCorrect: 69,
    studentsCorrect: 19,
    studentsIncorrect: 9,
    color: '#5F1980'
  },
  {
    id: 21,
    questionId: '37054',
    standard: '8.G',
    standardName: 'Geometry',
    measurableStandard: '[8.G.B.8] Apply the Pythagorean Theorem to find the distance between two points in a coordinate system.',
    questionText: 'Find distance between (0,0) and (3,4)',
    options: [
      { letter: 'A', text: '5', isCorrect: true },
      { letter: 'B', text: '7', isCorrect: false },
      { letter: 'C', text: '12', isCorrect: false },
      { letter: 'D', text: '25', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Added coordinates',
      'Multiplied coordinates',
      'Squared the sum'
    ],
    percentCorrect: 81,
    studentsCorrect: 23,
    studentsIncorrect: 5,
    color: '#388E3C'
  },
  {
    id: 22,
    questionId: '37055',
    standard: '8.SP',
    standardName: 'Statistics and Probability',
    measurableStandard: '[8.SP.A.3] Use the equation of a linear model to solve problems in the context of bivariate measurement data.',
    questionText: 'Using y = 3x + 2, find y when x = 4',
    options: [
      { letter: 'A', text: '14', isCorrect: true },
      { letter: 'B', text: '12', isCorrect: false },
      { letter: 'C', text: '11', isCorrect: false },
      { letter: 'D', text: '9', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Forgot to add 2',
      'Made multiplication error',
      'Added instead of multiplied'
    ],
    percentCorrect: 87,
    studentsCorrect: 24,
    studentsIncorrect: 4,
    color: '#388E3C'
  },
  {
    id: 23,
    questionId: '37056',
    standard: '8.F',
    standardName: 'Functions',
    measurableStandard: '[8.F.A.2] Compare properties of two functions each represented in a different way.',
    questionText: 'Which function has a greater y-intercept?',
    options: [
      { letter: 'A', text: 'y = 2x + 5', isCorrect: true },
      { letter: 'B', text: 'y = 3x + 2', isCorrect: false },
      { letter: 'C', text: 'Both equal', isCorrect: false },
      { letter: 'D', text: 'Cannot determine', isCorrect: false },
    ],
    bloomsTaxonomy: 'Analyzing',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Compared slopes instead',
      'Added all coefficients',
      'Did not understand y-intercept'
    ],
    percentCorrect: 79,
    studentsCorrect: 22,
    studentsIncorrect: 6,
    color: '#5F1980'
  },
  {
    id: 24,
    questionId: '37057',
    standard: '8.NS',
    standardName: 'Number System',
    measurableStandard: '[8.NS.A.2] Use rational approximations of irrational numbers to compare the size of irrational numbers.',
    questionText: 'Which is largest: √8, 2.5, or 5/2?',
    options: [
      { letter: 'A', text: '√8', isCorrect: true },
      { letter: 'B', text: '2.5', isCorrect: false },
      { letter: 'C', text: '5/2', isCorrect: false },
      { letter: 'D', text: 'All equal', isCorrect: false },
    ],
    bloomsTaxonomy: 'Analyzing',
    itemConceptLevel: 'Conceptual',
    teacherRationale: [
      'Did not approximate √8',
      'Thought 5/2 ≠ 2.5',
      'Calculated √8 incorrectly'
    ],
    percentCorrect: 53,
    studentsCorrect: 15,
    studentsIncorrect: 13,
    color: '#F64C13'
  },
  {
    id: 25,
    questionId: '37058',
    standard: '8.EE',
    standardName: 'Expressions and Equations',
    measurableStandard: '[8.EE.B.6] Use similar triangles to explain why the slope m is the same between any two distinct points on a non-vertical line.',
    questionText: 'What is the slope between (1,2) and (3,6)?',
    options: [
      { letter: 'A', text: '2', isCorrect: true },
      { letter: 'B', text: '4', isCorrect: false },
      { letter: 'C', text: '1/2', isCorrect: false },
      { letter: 'D', text: '8', isCorrect: false },
    ],
    bloomsTaxonomy: 'Applying',
    itemConceptLevel: 'Procedural',
    teacherRationale: [
      'Calculated change in y only',
      'Inverted the slope',
      'Added differences instead of dividing'
    ],
    percentCorrect: 72,
    studentsCorrect: 20,
    studentsIncorrect: 8,
    color: '#5F1980'
  },
];

export const students = [
  { id: 'STU-2024-001', name: 'Boatneg, Glory', percentCorrect: 75, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
  { id: 'STU-2024-002', name: 'Cash, Penny', percentCorrect: 67, answers: ['D', 'A', 'B', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A', 'A', 'C', 'A', 'A', 'A', 'C', 'A', 'A', 'B', 'C', 'A'] },
  { id: 'STU-2024-008', name: 'Fischer, Gilbert', percentCorrect: 75, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'B', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A'] },
  { id: 'STU-2024-014', name: 'Griffin, Jean', percentCorrect: 41, answers: ['C', 'B', 'A', 'C', 'B', 'D', 'B', 'A', 'C', 'C', 'A', 'B', 'C', 'A', 'A', 'D', 'C', 'C', 'A', 'B', 'B', 'C', 'D', 'C', 'C'] },
  { id: 'STU-2024-021', name: 'Hardy, Holly', percentCorrect: 83, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
  { id: 'STU-2024-003', name: 'Anderson, Blake', percentCorrect: 92, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
  { id: 'STU-2024-004', name: 'Chen, Michelle', percentCorrect: 58, answers: ['D', 'B', 'B', 'C', 'A', 'A', 'B', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'A', 'C', 'D', 'B', 'A', 'A', 'B', 'A', 'B', 'C', 'B'] },
  { id: 'STU-2024-005', name: 'Davis, Marcus', percentCorrect: 67, answers: ['D', 'A', 'B', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'B', 'A'] },
  { id: 'STU-2024-006', name: 'Evans, Sarah', percentCorrect: 83, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
  { id: 'STU-2024-007', name: 'Foster, James', percentCorrect: 50, answers: ['C', 'B', 'A', 'C', 'B', 'A', 'B', 'A', 'C', 'C', 'A', 'B', 'C', 'A', 'B', 'D', 'C', 'C', 'A', 'B', 'B', 'C', 'D', 'C', 'C'] },
  { id: 'STU-2024-009', name: 'Garcia, Sofia', percentCorrect: 75, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A'] },
  { id: 'STU-2024-010', name: 'Harrison, Tyler', percentCorrect: 67, answers: ['D', 'A', 'A', 'C', 'A', 'A', 'B', 'A', 'B', 'A', 'A', 'A', 'C', 'A', 'A', 'C', 'A', 'B', 'A', 'A', 'A', 'A', 'C', 'A', 'A'] },
  { id: 'STU-2024-011', name: 'Ibrahim, Layla', percentCorrect: 92, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
  { id: 'STU-2024-012', name: 'Johnson, Kevin', percentCorrect: 58, answers: ['C', 'B', 'B', 'C', 'A', 'B', 'B', 'A', 'B', 'C', 'B', 'C', 'C', 'A', 'B', 'D', 'D', 'C', 'A', 'B', 'B', 'C', 'B', 'C', 'B'] },
  { id: 'STU-2024-013', name: 'Kumar, Priya', percentCorrect: 75, answers: ['D', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
];
