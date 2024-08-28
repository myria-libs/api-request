export interface UserLeaderboardScore {
    score: number;
    userId: string;
    username?: string;
    displayName?: string;
}
export interface UserLeaderboardScores {
    items: [UserLeaderboardScore];
}
