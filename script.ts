const toggleSkillsButton = document.createElement('button');
toggleSkillsButton.textContent = 'Toggle Skills';
document.body.insertBefore(toggleSkillsButton, document.getElementById('skills'));

toggleSkillsButton.addEventListener('click', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection!.style.display = 'none';
  }
});
