const myTags = [
    'HTML', 'CSS', 'JavaScript',
    'Linux', 'SQL', 'React',
    'C/C++/C#', 'Java', 'Modulations',
    'PremierePro', 'Illustrator', 'Networking',
];

var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    
    // interact with cursor move on mouse out
    keep: true
    
});