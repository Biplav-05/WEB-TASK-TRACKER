const { execSync } = require('child_process');

const fromVersion = process.argv[2];
const toVersion = process.argv[3];

const getCommits = (from, to) => {
    const command = `git log ${from}..${to} --pretty=format:"%s"`;
    return execSync(command).toString().trim().split('\n');
};

const categorizeCommit = (commit) => {
    if (commit.startsWith('feat')) return 'Features';
    if (commit.startsWith('fix')) return 'Bug Fixes';
    if (commit.startsWith('docs')) return 'Documentation';
    if (commit.startsWith('style')) return 'Styles';
    if (commit.startsWith('refactor')) return 'Code Refactoring';
    if (commit.startsWith('perf')) return 'Performance Improvements';
    if (commit.startsWith('test')) return 'Tests';
    if (commit.startsWith('build')) return 'Builds';
    if (commit.startsWith('ci')) return 'Continuous Integration';
    if (commit.startsWith('chore')) return 'Chores';
    if (commit.startsWith('revert')) return 'Reverts';
    return 'Other Changes';
};

const commits = getCommits(fromVersion, toVersion);
const categories = {};

commits.forEach(commit => {
    const category = categorizeCommit(commit);
    if (!categories[category]) categories[category] = [];
    categories[category].push(commit);
});

let releaseNotes = `# What's Changed\n\n`;

Object.keys(categories).forEach(category => {
    if (categories[category].length > 0) {
        releaseNotes += `## ${category}\n`;
        categories[category].forEach(commit => {
            releaseNotes += `- ${commit}\n`;
        });
        releaseNotes += '\n';
    }
});

console.log(releaseNotes);