const LOADING_ENCOURAGING_JOB_FACTS = [
    "You're one step closer to finding the right job.",
    "Every 'no' brings you closer to a 'yes.'",
    "Job searching can take time - don't rush the process.",
    'Stay positive - the right opportunity is just around the corner.',
    "You're gaining valuable experience with every application.",
    'Patience and persistence are key to landing your dream job.',
    'Small progress is still progress.',
    'Every application is a chance to refine your skills.',
    "You're building resilience with every step of this journey.",
    'The right job is looking for someone just like you.',
    "Rejections aren't failures, they're redirections.",
    'Success is a journey, not a destination.',
    'Your hard work will pay off soon.',
    'The right job will find you when the time is right.',
    "Believe in yourself - you're capable of great things.",
    'Keep going; persistence is the key to success.',
    "You're not alone - job seekers everywhere are on this journey too.",
    'Every setback is a setup for a greater comeback.',
    'Growth happens when you step out of your comfort zone.',
    'Your next opportunity could be just around the corner.',
    'The best job matches come when you least expect it.',
    'Focus on your strengths - they will take you far.',
    "There's always something to learn from every job search experience.",
    'Networking can open doors to amazing opportunities.',
    'Take breaks when needed; self-care is part of the process.',
    "You're making progress every day, even when it doesn't feel like it.",
    'Stay curious - the right job is out there waiting for you.',
    "Every 'no' means you're one step closer to a 'yes.'",
    'Remember: even the most successful people faced challenges in their career journey.',
    'Trust the process - your dream job will come when the time is right.',
    'Resilience is built through persistence and patience.',
    'Believe in your skills, your experiences, and your abilities.',
    "Job hunting isn't a sprint - it's a marathon.",
    'Success is about perseverance, not perfection.',
    "It's okay to take a break. A clear mind leads to better decisions.",
    "Keep your eyes on the prize - you've got this!",
    'You have what it takes to succeed in this journey.',
    "Rejections are just part of the process - don't let them define you.",
    'Every new day is a fresh chance to try again.',
    'Your ideal job is a combination of your passion and your skills.',
    'Confidence grows every time you apply yourself.',
    'Every application you submit is a step forward.',
    "You're gaining clarity on what you want with each job search.",
    'The right job is closer than you think.',
    'Consistency is key in the job search process.',
    'Growth is uncomfortable, but so worth it.',
    'Even small achievements count in your job search journey.',
    'You are always learning and growing through each experience.',
    'The best opportunities are the ones you least expect.',
    'You have valuable skills that employers are looking for.',
    'Stay patient - great things take time.',
    'Your hard work and perseverance will lead to success.',
    'Believe in your ability to achieve what you set out to do.',
    'Challenges today are stepping stones to success tomorrow.',
    'Job searching may be tough, but so are you.',
    'Every interview is a chance to learn and grow.',
    "Success isn't an accident; it's the result of persistence and hard work.",
    "Job searching teaches you valuable life skills, even if it's tough.",
    "You're not starting from scratch - you're starting from experience.",
    'Remember, every rejection is an opportunity to improve.',
    'You are making progress even when it feels slow.',
    "There's power in persistence. Keep moving forward.",
    'Small steps lead to big results in the long run.',
    'Stay focused on your goals and keep pushing forward.',
    'Your next opportunity could come at any moment.',
    "You've made it this far - keep going!",
    'Every day brings you closer to your next job.',
    "You're building a brighter future with every step you take.",
    'Job hunting can be a journey - enjoy the learning process.',
    "Success takes time, but it's always worth the wait.",
    'The perfect opportunity is worth waiting for.',
    'Trust in your journey - success will come.',
    'Your dream job is on the horizon.',
    'The best things come to those who wait.',
    "You're stronger than any challenge that comes your way.",
    "You're doing great - keep it up!",
    'Every step forward is progress.',
    'The right job will come when you least expect it.',
    'You have what it takes to land your dream job.',
    "Stay calm - you're doing just fine.",
    'Remember, you are exactly where you need to be.',
    "Don't stop now - success is closer than you think.",
    'Your persistence is paying off - keep going!',
    'Opportunities are coming your way - stay positive.',
    'Trust the timing of your career journey.',
    "You're capable of achieving everything you set out to do.",
    "Take it one step at a time - you're on the right track.",
    'Success in job searching comes with persistence and patience.',
    'Your determination is your biggest asset.',
    "Keep applying - you're one step closer to success.",
    "Great things come to those who don't give up.",
    "You've got the power to shape your career path.",
    'Waltzes is here to help you get the job you want.',
];

export const randomLoadingFact = () => {
    return LOADING_ENCOURAGING_JOB_FACTS[
        Math.floor(Math.random() * LOADING_ENCOURAGING_JOB_FACTS.length)
    ];
};
