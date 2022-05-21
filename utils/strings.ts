export function difficultyIntToString(difficulty: number | undefined) {
    switch (difficulty) {
        case 0: return 'Easy';
        case 1: return 'Moderate';
        case 2: return 'Difficult';
        case 3: return 'Expert';
        default: return 'Unknown';
    }
}
