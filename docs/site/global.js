// global constants
var g = {};

// course info
g.courseCode = '';
g.courseName = 'Essential Web Tools';
g.courseCodeName = g.courseCode + ' | ' + g.courseName;

// lessons
g.n01 = 'Lesson ' + '01';
g.n02 = 'Lesson ' + '02';
g.n03 = 'Lesson ' + '03';
g.n04 = 'Lesson ' + '04';

// module names
g.u01 = g.n01 + ' - Web Tools and Text Editors';
g.u02 = g.n02 + ' - Command Line';
g.u03 = g.n03 + ' - Git and Version Control';
g.u04 = g.n04 + ' - Testing and Offline Storage';

// assignment information

g.reading = 'Reading Materials';
g.classTime = 'In-class Materials';
g.assignment = 'Assignment';

// course topics
g.t1_1 = 'Course Overview';
g.t1_2 = 'Introduction to Text Editors';
g.t1_3 = 'Introduction to Git';
g.t1_4 = 'Github';
g.t1_5 = 'Create First Repository';

g.t2_1 = 'Browser Developer Tools';
g.t2_2 = 'Command Line & Terminal';
g.t2_3 = 'SSH';
g.t2_4 = 'Windows vs Mac vs Linux vs Chromebook';
g.t2_5 = 'Being Awesome with Text Editors';

g.t3_1 = 'Update Repositories';
g.t3_2 = 'Working in a Team with Git';
g.t3_3 = 'Create Branches';
g.t3_4 = 'VS Code GUI';

g.t4_1 = 'Package Managers';
g.t4_2 = 'PHP: Composer';
g.t4_3 = 'JavaScript: Node';
g.t4_4 = 'Popular Packages';

let courseTopics = [];
for (t in g) {
  if (t.charAt(0) === 't') {
    let c2 = t.charAt(1);
    let a = parseInt(c2) - 1;
    if (!courseTopics[a]) {
      courseTopics.push([]);
    }
    courseTopics[a].push(g[t]);
  }
}
