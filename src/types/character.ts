export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | "unknown";
    species: string;
    gender: 'Male' | 'Famele' | "Genderless" | "unknown";
    image: string;
    origin: {
        name: string;
        resident_count: number;
    } | null;
    current_location: {
        name: string;
        residents_count: number;
    } | null;
    last_episode: {
        name: string;
        episode: string;
        air_date: string;
    } | null;
    total_episodes: number;
}

export interface ApiResponse<T> {
    sucess: boolean;
    message: string;
    data: T;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pages: number;
    per_page: number;
    has_next: boolean;
    has_prev: boolean;
}